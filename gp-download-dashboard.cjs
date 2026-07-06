/**
 * gp-download-dashboard.js
 *
 * Downloads the home dashboard screen (4076:17649) which is the
 * perfect star screen for the Marketplace decision card.
 *
 * Usage:
 *   node gp-download-dashboard.js YOUR_FIGMA_TOKEN
 */

const https = require('https')
const fs    = require('fs')
const path  = require('path')

const token = process.argv[2]
if (!token) {
  console.error('Usage: node gp-download-dashboard.js YOUR_FIGMA_TOKEN')
  process.exit(1)
}

const FILE_KEY = '67d6mjusCraKbgFnS6xTv3'
const OUT_DIR  = path.join(process.cwd(), 'public/assets/projects/globalpayments')

const SCREENS = {
  // Home dashboard — shows merchant's tienda, marketplace, loyalty points
  // Used as the star screen for D06 (Online marketplace onboarding)
  'gp-d06-marketplace': '4076:17649',

  // Terminal selection — "Selecciona tu terminal" with 3 datáfono options
  // Already saved but re-downloading at 2x for sharpness
  'gp-d02-terminal': '4058:12792',
}

function get(url, headers) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers }, res => {
      let data = ''
      res.on('data', d => (data += d))
      res.on('end', () => {
        try { resolve(JSON.parse(data)) }
        catch (e) { reject(new Error('JSON error: ' + data.slice(0, 200))) }
      })
      res.on('error', reject)
    })
  })
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    https.get(url, r => {
      r.pipe(file)
      file.on('finish', resolve)
      file.on('error', reject)
    })
  })
}

;(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true })

  const ids = Object.values(SCREENS).join(',')
  const url = `https://api.figma.com/v1/images/${FILE_KEY}?ids=${encodeURIComponent(ids)}&format=png&scale=2`

  console.log('Requesting image URLs from Figma...')
  const { images, err } = await get(url, { 'X-Figma-Token': token })
  if (err) { console.error('Figma error:', err); process.exit(1) }

  const idToName = Object.fromEntries(
    Object.entries(SCREENS).map(([name, id]) => [id.replace(':', '-'), name])
  )

  for (const [rawId, imgUrl] of Object.entries(images)) {
    const name = idToName[rawId.replace(':', '-')] || rawId
    const dest = path.join(OUT_DIR, name + '.png')
    console.log(`Downloading ${name}.png ...`)
    await download(imgUrl, dest)
    console.log(`  ✅ Saved to ${dest}`)
  }

  console.log('\nDone! Now run in Cursor terminal:')
  console.log('  git add public/assets/projects/globalpayments/')
  console.log('  git commit -m "assets: replace GP marketplace star screen with home dashboard"')
  console.log('  git push origin main')
})()
