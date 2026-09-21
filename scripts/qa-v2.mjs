import puppeteer from 'puppeteer'

const BASE = process.env.BASE || 'http://127.0.0.1:4173'
const pages = [
  '/',
  '/work',
  '/case-google',
  '/case-banco',
  '/case-mastercard',
  '/case-more',
  '/lab-workspace',
  '/lab-assistant',
  '/about',
  '/contact',
]
const widths = [320, 375, 390, 430, 768, 834, 1024, 1280, 1440, 1728, 1920]
const mid = [348, 400, 500, 900, 1100, 1366, 1600]

const browser = await puppeteer.launch({
  executablePath: '/usr/bin/google-chrome-stable',
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
})

const issues = []
const page = await browser.newPage()

async function check(path, width) {
  await page.setViewport({ width, height: 900, deviceScaleFactor: 1, isMobile: width <= 430 })
  const res = await page.goto(BASE + path, { waitUntil: 'networkidle0', timeout: 30000 })
  const status = res?.status()
  const okStatus = status === 200 || status === 304
  const metrics = await page.evaluate(() => {
    const doc = document.documentElement
    const body = document.body
    const skip = document.querySelector('.skip')
    const header = document.querySelector('header')
    const main = document.querySelector('main')
    const footer = document.querySelector('footer')
    const nav = document.querySelector('nav')
    const overflow = Math.max(doc.scrollWidth, body.scrollWidth) - window.innerWidth
    const bad = [...document.querySelectorAll('*')].filter((el) => {
      const r = el.getBoundingClientRect()
      return r.width > window.innerWidth + 2 && r.left < window.innerWidth
    }).slice(0, 8).map((el) => `${el.tagName.toLowerCase()}.${el.className}`.slice(0, 80))
    return {
      overflow,
      skip: Boolean(skip),
      landmarks: Boolean(header && main && footer && nav),
      title: document.title,
      bad,
    }
  })
  const row = { path, width, status, ...metrics }
  if (!okStatus || metrics.overflow > 1 || !metrics.skip || !metrics.landmarks) {
    issues.push(row)
  }
  return row
}

const results = []
for (const path of pages) {
  for (const w of [...widths, ...mid]) {
    results.push(await check(path, w))
  }
}

await browser.close()

const failed = results.filter((r) => (r.status !== 200 && r.status !== 304) || r.overflow > 1 || !r.skip || !r.landmarks)
console.log(JSON.stringify({ total: results.length, failed: failed.length, issues: failed }, null, 2))
if (failed.length) process.exit(1)
