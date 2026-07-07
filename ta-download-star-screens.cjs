/**
 * Download Travel Adventures star screen PNGs from Figma.
 * Usage: node ta-download-star-screens.cjs YOUR_FIGMA_TOKEN
 */

const https = require('https')
const fs = require('fs')
const path = require('path')

const token = process.argv[2]
if (!token) {
  console.error('Usage: node ta-download-star-screens.cjs YOUR_FIGMA_TOKEN')
  process.exit(1)
}

const FILE_KEY = '3kLLunNyYft6xrJzphfqQi'
const OUT_DIR = path.join(process.cwd(), 'public/assets/projects/travel-adventures')

const SCREENS = {
  'ta-star-agencies': '4141:34794',
  'ta-star-agency-detail': '4107:17074',
  'ta-star-route': '4051:19162',
  'ta-star-payment': '4089:16102',
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
    await download(url, dest)
    console.log('  Saved (' + Math.round(fs.statSync(dest).size / 1024) + ' KB)')
  }

  console.log('\nDone!')
})().catch((err) => {
  console.error('Error:', err.message)
  process.exit(1)
})
