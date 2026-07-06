/**
 * gp-download-star-screens.cjs
 * Downloads real UI star screens for GlobalPayments decision cards.
 *
 * Usage: node gp-download-star-screens.cjs YOUR_FIGMA_TOKEN
 */

const https = require('https')
const fs    = require('fs')
const path  = require('path')

const token = process.argv[2]
if (!token) { console.error('Usage: node gp-download-star-screens.cjs YOUR_TOKEN'); process.exit(1) }

const FILE_KEY = '67d6mjusCraKbgFnS6xTv3'
const OUT_DIR  = path.join(process.cwd(), 'public/assets/projects/globalpayments')

const SCREENS = {
  // D03 — Biometric setup: Face ID + Huella toggles
  'gp-d03-biometric': '4117:13098',
  // D04 — Contextual help: "¿Cómo quieres que te atendamos?" (teléfono / email / chat)
  'gp-d04-help': '4074:17004',
  // D05 — Loyalty dashboard: 150 pts, nivel Bronce, beneficios, gamification
  'gp-d05-loyalty': '4066:15021',
}

function get(url, headers) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers }, res => {
      let data = ''
      res.on('data', d => (data += d))
      res.on('end', () => { try { resolve(JSON.parse(data)) } catch(e) { reject(new Error(data.slice(0,200))) } })
      res.on('error', reject)
    })
  })
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    https.get(url, r => { r.pipe(file); file.on('finish', resolve); file.on('error', reject) })
  })
}

;(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true })
  const ids = Object.values(SCREENS).join(',')
  const { images, err } = await get(
    `https://api.figma.com/v1/images/${FILE_KEY}?ids=${encodeURIComponent(ids)}&format=png&scale=2`,
    { 'X-Figma-Token': token }
  )
  if (err) { console.error('Figma error:', err); process.exit(1) }

  const idToName = Object.fromEntries(
    Object.entries(SCREENS).map(([name, id]) => [id.replace(':', '-'), name])
  )

  for (const [rawId, imgUrl] of Object.entries(images)) {
    const name = idToName[rawId.replace(':', '-')] || rawId
    const dest = path.join(OUT_DIR, name + '.png')
    process.stdout.write(`Downloading ${name}.png ... `)
    await download(imgUrl, dest)
    console.log('✅')
  }

  console.log('\nDone. Now commit:')
  console.log('  git add public/assets/projects/globalpayments/')
  console.log('  git commit -m "assets: add real UI star screens for biometric, help, loyalty"')
  console.log('  git push origin main')
})()
