/**
 * Download Monoma decision screen PNGs from Figma.
 * Usage: node monoma-download-screens.cjs YOUR_FIGMA_TOKEN
 */

const https = require('https')
const fs = require('fs')
const path = require('path')

const token = process.argv[2]
if (!token) {
  console.error('Usage: node monoma-download-screens.cjs YOUR_FIGMA_TOKEN')
  process.exit(1)
}

const FILE_KEY = 'hs0CyG5ofnkNaZWDWawFii'
const OUT_DIR = path.join(process.cwd(), 'public/assets/projects/monoma')

const SCREENS = {
  'monoma-d01-approval': '4048:27499',
  'monoma-d02-geolocation': '4012:11458',
  'monoma-d03-identity': '4007:650',
  'monoma-d04-personalization': '4045:26725',
  'monoma-d05-home': '4007:808',
  'monoma-d06-tracking': '4012:1811',
  'monoma-d07-nfc': '4006:10583',
  'monoma-d08-crosssell': '4160:5556',
}

function get(url, headers) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers }, (res) => {
      let data = ''
      res.on('data', (d) => (data += d))
      res.on('end', () => {
        try {
          resolve(JSON.parse(data))
        } catch (e) {
          reject(new Error('JSON error: ' + data.slice(0, 200)))
        }
      })
      res.on('error', reject)
    })
  })
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject)
      }
      const file = fs.createWriteStream(dest)
      res.pipe(file)
      file.on('finish', () => file.close(resolve))
      file.on('error', reject)
    }).on('error', reject)
  })
}

;(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true })
  const ids = Object.values(SCREENS).join(',')
  console.log('Requesting image URLs from Figma...')
  const data = await get(
    `https://api.figma.com/v1/images/${FILE_KEY}?ids=${encodeURIComponent(ids)}&format=png&scale=2`,
    { 'X-Figma-Token': token }
  )
  if (data.err) throw new Error('Figma error: ' + data.err)

  for (const [name, id] of Object.entries(SCREENS)) {
    const url = data.images[id]
    const dest = path.join(OUT_DIR, name + '.png')
    if (!url) {
      console.warn('  No URL for ' + name)
      continue
    }
    console.log('Downloading ' + name + '.png ...')
    await download(url, dest)
    console.log('  Saved to ' + dest)
  }

  console.log('\nDone!')
})().catch((err) => {
  console.error('Error:', err.message)
  process.exit(1)
})
