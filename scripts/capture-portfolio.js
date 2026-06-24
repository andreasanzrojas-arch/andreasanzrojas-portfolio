// Capture screenshots + source images from the live Squarespace portfolio.
// Usage: node scripts/capture-portfolio.js
import { mkdir, writeFile, readdir, stat } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const VIEWPORT = { width: 1440, height: 900 }
const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36'

const targets = [
  {
    url: 'https://www.andreasanzrojas.com/cdt-banco-de-bogot',
    dir: 'public/assets/banco-cdt',
    sections: true, // also screenshot each image/section separately
  },
  {
    url: 'https://www.andreasanzrojas.com/globalpayments',
    dir: 'public/assets/mastercard',
    sections: false,
  },
]

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

// Scroll the whole page to trigger Squarespace lazy-loaded images.
async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let total = 0
      const step = 600
      const timer = setInterval(() => {
        window.scrollBy(0, step)
        total += step
        if (total >= document.body.scrollHeight + window.innerHeight) {
          clearInterval(timer)
          resolve()
        }
      }, 120)
    })
  })
  await page.evaluate(() => window.scrollTo(0, 0))
  await sleep(800)
}

function extFromContentType(ct = '', url = '') {
  if (ct.includes('jpeg') || ct.includes('jpg')) return 'jpg'
  if (ct.includes('png')) return 'png'
  if (ct.includes('webp')) return 'webp'
  if (ct.includes('gif')) return 'gif'
  if (ct.includes('svg')) return 'svg'
  if (ct.includes('avif')) return 'avif'
  const m = url.split('?')[0].match(/\.(jpe?g|png|webp|gif|svg|avif)$/i)
  return m ? m[1].toLowerCase().replace('jpeg', 'jpg') : 'img'
}

async function downloadImages(urls, dir) {
  const saved = []
  let i = 0
  for (const url of urls) {
    i += 1
    try {
      const res = await fetch(url, { headers: { 'User-Agent': UA, Referer: 'https://www.andreasanzrojas.com/' } })
      if (!res.ok) {
        console.warn(`  ! skip img ${i} (HTTP ${res.status}): ${url}`)
        continue
      }
      const ct = res.headers.get('content-type') || ''
      const ext = extFromContentType(ct, url)
      const buf = Buffer.from(await res.arrayBuffer())
      const name = `img-${String(i).padStart(2, '0')}.${ext}`
      await writeFile(join(dir, name), buf)
      saved.push(name)
    } catch (err) {
      console.warn(`  ! failed img ${i}: ${url} — ${err.message}`)
    }
  }
  return saved
}

async function capture(page, target) {
  const absDir = join(ROOT, target.dir)
  await mkdir(absDir, { recursive: true })
  console.log(`\n→ ${target.url}`)

  await page.goto(target.url, { waitUntil: 'networkidle2', timeout: 60000 })
  await autoScroll(page)

  // a. Full page screenshot
  await page.screenshot({ path: join(absDir, 'page-full.png'), fullPage: true })
  console.log('  ✓ page-full.png')

  // Collect unique, real image URLs (prefer largest from srcset; absolute).
  const imageUrls = await page.evaluate(() => {
    const pickFromSrcset = (ss) => {
      if (!ss) return null
      const parts = ss
        .split(',')
        .map((p) => p.trim())
        .map((p) => {
          const [u, d] = p.split(/\s+/)
          const w = d && d.endsWith('w') ? parseInt(d) : 0
          return { u, w }
        })
        .filter((x) => x.u)
      if (!parts.length) return null
      parts.sort((a, b) => b.w - a.w)
      return parts[0].u
    }
    const out = []
    document.querySelectorAll('img').forEach((img) => {
      const src =
        pickFromSrcset(img.getAttribute('srcset')) ||
        img.currentSrc ||
        img.src ||
        img.getAttribute('data-src')
      if (src && !src.startsWith('data:')) {
        try {
          out.push(new URL(src, location.href).href)
        } catch {
          /* ignore */
        }
      }
    })
    return [...new Set(out)]
  })
  console.log(`  • found ${imageUrls.length} <img> source(s)`)

  // b. Per-image section screenshots (banco page only).
  let sectionCount = 0
  if (target.sections) {
    const handles = await page.$$('img')
    for (const h of handles) {
      const box = await h.boundingBox()
      if (!box || box.width < 200 || box.height < 120) continue // skip icons/logos
      sectionCount += 1
      await h.scrollIntoViewIfNeeded?.()
      await h.evaluate((el) => el.scrollIntoView({ block: 'center' }))
      await sleep(250)
      const name = `section-${String(sectionCount).padStart(2, '0')}.png`
      try {
        await h.screenshot({ path: join(absDir, name) })
      } catch {
        sectionCount -= 1
      }
    }
    console.log(`  ✓ ${sectionCount} section screenshot(s)`)
  }

  // 4. Download the actual image files.
  const savedImgs = await downloadImages(imageUrls, absDir)
  console.log(`  ✓ downloaded ${savedImgs.length} image file(s)`)

  return absDir
}

async function summarize(dirs) {
  console.log('\n──────── SUMMARY ────────')
  let grandTotal = 0
  for (const dir of dirs) {
    const rel = dir.replace(ROOT + '/', '')
    const files = (await readdir(dir)).sort()
    console.log(`\n${rel}/  (${files.length} files)`)
    for (const f of files) {
      const s = await stat(join(dir, f))
      grandTotal += s.size
      const kb = (s.size / 1024).toFixed(1)
      console.log(`  ${f.padEnd(20)} ${kb.padStart(8)} KB`)
    }
  }
  console.log(`\nTotal: ${(grandTotal / 1024 / 1024).toFixed(2)} MB across ${dirs.length} folder(s)`)
}

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] })
try {
  const page = await browser.newPage()
  await page.setUserAgent(UA)
  await page.setViewport(VIEWPORT)
  const dirs = []
  for (const t of targets) {
    dirs.push(await capture(page, t))
  }
  await summarize(dirs)
} finally {
  await browser.close()
}
