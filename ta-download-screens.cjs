/**
 * Download Travel Adventures decision screen PNGs from Figma.
 * Usage: node ta-download-screens.cjs YOUR_FIGMA_TOKEN
 */

const https = require('https')
const fs = require('fs')
const path = require('path')

const token = process.argv[2]
if (!token) {
  console.error('Usage: node ta-download-screens.cjs YOUR_FIGMA_TOKEN')
  process.exit(1)
}

const FILE_KEY = '3kLLunNyYft6xrJzphfqQi'
const OUT_DIR = path.join(process.cwd(), 'public/assets/projects/travel-adventures')

const SCREENS = {
  hero: '4004:485',
  'ta-d01-days': '4017:11000',
  'ta-d02-agency-share': '4194:17398',
  'ta-d03-trips-empty': '4069:28203',
  'ta-d04-trip-name': '4102:13480',
  'ta-d05-trips-done': '4181:14105',
  'ta-d06-confirmation': '4107:16772',
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

  for (const [name, id] of Object.entries(SCREENS)) {
    console.log('Requesting ' + name + ' (' + id + ')...')
    const data = await get(
      `https://api.figma.com/v1/images/${FILE_KEY}?ids=${encodeURIComponent(id)}&format=png&scale=2`,
      { 'X-Figma-Token': token }
    )
    if (data.err) {
      console.error('  FAILED:', data.err)
      continue
    }

    const url = data.images[id]
    const dest = path.join(OUT_DIR, name + '.png')
    if (!url) {
      console.warn('  No URL for ' + name)
      continue
    }
    console.log('Downloading ' + name + '.png ...')
    await download(url, dest)
    const size = fs.statSync(dest).size
    console.log('  Saved (' + Math.round(size / 1024) + ' KB)')
  }

  console.log('\nDone!')
})().catch((err) => {
  console.error('Error:', err.message)
  process.exit(1)
})
