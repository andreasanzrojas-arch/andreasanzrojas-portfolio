/**
 * gp-find-star-screens.js
 *
 * Fetches ALL top-level frames from the GlobalPayments Figma page,
 * prints their node IDs and names, and optionally generates a contact sheet
 * (one screenshot per frame) saved to public/assets/projects/globalpayments/frames/.
 *
 * Usage:
 *   node gp-find-star-screens.js YOUR_FIGMA_TOKEN
 *
 * The token needs file_content:read scope.
 */

const https = require('https')
const fs = require('fs')
const path = require('path')

const token = process.argv[2]
if (!token) {
  console.error('Usage: node gp-find-star-screens.js YOUR_FIGMA_TOKEN')
  process.exit(1)
}

const FILE_KEY = '67d6mjusCraKbgFnS6xTv3'
const PAGE_ID  = '31:10939'

function get(url, headers) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers }, res => {
      let data = ''
      res.on('data', d => (data += d))
      res.on('end', () => {
        try { resolve(JSON.parse(data)) }
        catch (e) { reject(new Error('JSON parse error: ' + data.slice(0, 200))) }
      })
      res.on('error', reject)
    })
  })
}

function downloadFile(url, dest) {
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
  console.log('Fetching page structure...')

  // Get the page node (only direct children to avoid huge response)
  const url = `https://api.figma.com/v1/files/${FILE_KEY}/nodes?ids=${encodeURIComponent(PAGE_ID)}&depth=2`
  const data = await get(url, { 'X-Figma-Token': token })

  const pageNode = data.nodes?.[PAGE_ID.replace(':', '-')]?.document
    || data.nodes?.[PAGE_ID]?.document

  if (!pageNode) {
    console.error('Could not find page node. Keys:', Object.keys(data.nodes || {}))
    process.exit(1)
  }

  const children = pageNode.children || []
  const frames = children.filter(n => n.type === 'FRAME' || n.type === 'COMPONENT' || n.type === 'SECTION')

  console.log(`\nFound ${frames.length} top-level frames on page:\n`)
  frames.forEach((f, i) => {
    console.log(`  [${String(i + 1).padStart(3)}]  id=${f.id.padEnd(16)}  name="${f.name}"`)
  })

  if (frames.length === 0) {
    console.log('No frames found — the page might have a different structure (e.g., nested sections).')
    return
  }

  // Ask if user wants to download contact sheet
  const outDir = path.join(process.cwd(), 'public/assets/projects/globalpayments/frames')
  fs.mkdirSync(outDir, { recursive: true })

  console.log('\nDownloading screenshots for all frames (this may take a moment)...')

  // Batch requests — Figma API supports up to 100 node IDs per request
  const ids = frames.map(f => f.id)
  const BATCH = 50
  const batches = []
  for (let i = 0; i < ids.length; i += BATCH) {
    batches.push(ids.slice(i, i + BATCH))
  }

  const allImages = {}
  for (const batch of batches) {
    const imgUrl = `https://api.figma.com/v1/images/${FILE_KEY}?ids=${encodeURIComponent(batch.join(','))}&format=png&scale=1`
    const imgData = await get(imgUrl, { 'X-Figma-Token': token })
    if (imgData.err) { console.warn('Warning:', imgData.err); continue }
    Object.assign(allImages, imgData.images || {})
  }

  // Download each image
  let done = 0
  for (const frame of frames) {
    const imgUrl = allImages[frame.id]
    if (!imgUrl) { console.warn(`  No image for ${frame.id} (${frame.name})`); continue }

    // Sanitize filename
    const safeName = frame.name.replace(/[^a-z0-9-_]/gi, '_').slice(0, 60)
    const dest = path.join(outDir, `${safeName}__${frame.id.replace(':', '-')}.png`)

    try {
      await downloadFile(imgUrl, dest)
      console.log(`  ✅ ${frame.name}  →  ${path.basename(dest)}`)
    } catch (e) {
      console.warn(`  ❌ ${frame.name}: ${e.message}`)
    }
    done++
  }

  console.log(`\nDone — ${done} frames saved to:\n  ${outDir}\n`)
  console.log('Open that folder, find the star screens for each flow, then share the node IDs so I can update the decision cards.')
})()
