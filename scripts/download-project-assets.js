// Download named case study images from Squarespace CDN.
// Usage: node scripts/download-project-assets.js

import fs from 'node:fs'
import https from 'node:https'
import { mkdirSync, createWriteStream, unlinkSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

const projects = {
  'banco-bogota': [
    ['hero', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/2f16d675-2b06-448a-828b-e36663233340/Captura+de+pantalla+2025-03-10+a+las+8.44.05%E2%80%AFp.%E2%80%AFm..png'],
    ['screens-overview', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/783ca3ea-61de-491c-987f-55d483b38ea0/Captura+de+pantalla+2025-03-10+a+las+8.43.59%E2%80%AFp.%E2%80%AFm..png'],
    ['flow-1', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/6b419d96-b7fb-46bc-ab05-9028d8bc5b4d/Captura+de+pantalla+2025-03-10+a+las+9.10.15%E2%80%AFp.%E2%80%AFm..png'],
    ['flow-2', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/889e4967-4939-4819-a24b-b1828e070c96/Captura+de+pantalla+2025-03-21+a+las+3.00.51%E2%80%AFp.%E2%80%AFm..png'],
    ['simulation', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/e62e7cf3-395d-4496-b41d-39d8a10e7b69/Captura+de+pantalla+2025-03-10+a+las+9.11.39%E2%80%AFp.%E2%80%AFm..png'],
    ['screens-2', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/09486141-cb32-4fa0-8f2e-de5b958bd4e1/Captura+de+pantalla+2025-03-10+a+las+9.03.28%E2%80%AFp.%E2%80%AFm..png'],
    ['screens-3', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/b8da4f57-01f0-4a93-a4d3-b6b642d86b43/Captura+de+pantalla+2025-03-10+a+las+9.05.07%E2%80%AFp.%E2%80%AFm..png'],
    ['screens-4', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/3b4f5c6e-55bb-4f3f-b88f-2b1e3aefc267/Captura+de+pantalla+2025-03-10+a+las+9.07.45%E2%80%AFp.%E2%80%AFm..png'],
    ['screens-5', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/6654e242-6ff5-4e3a-b31d-a1e433d1e7ee/Captura+de+pantalla+2025-03-10+a+las+9.06.19%E2%80%AFp.%E2%80%AFm..png'],
  ],
  globalpayments: [
    ['hero', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/512490d6-bfde-45b1-bef3-107f50a96650/Captura+de+pantalla+2025-03-10+a+las+9.41.40%E2%80%AFp.%E2%80%AFm..png'],
    ['screens-overview', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/d6747600-22ab-42a9-ac30-e268acb5f7d3/Captura+de+pantalla+2025-03-10+a+las+9.39.43%E2%80%AFp.%E2%80%AFm..png'],
    ['mobile-1', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/2fe47ac7-5f35-4d14-a23f-abf74b056ade/Redmi+Note+11+Pro.png'],
    ['mobile-2', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/7b63ddd4-3d9c-4d26-9b7a-d0607e74cc11/c.png'],
    ['mobile-3', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/501d0e22-403d-47ea-a91f-6b4ecab8b1c4/dc.png'],
    ['android-1', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/2fc2ecb3-cce8-4c78-ba85-516543d273d4/Android+Compact+-+70.png'],
    ['screens-2', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/2d7f1aca-5dd8-4b3b-bd07-148586b8f9bb/h.png'],
    ['results', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/5fa32731-f484-4171-a0f5-305b5e133fd9/Captura+de+pantalla+2025-03-10+a+las+9.52.59%E2%80%AFp.%E2%80%AFm..png'],
  ],
  monoma: [
    ['hero', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/5694e99c-8eea-45a8-8420-b1b4ee7677e1/Redmi+Note+11+Pro.png'],
    ['android-1', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/d920aa24-88a1-4543-9d0a-f9b7988f75a1/Android+Compact+-+99.png'],
    ['mobile-1', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/7783d470-02d4-4c70-9fcd-fd25bce66e95/Redmi+Note+11+Pro-1.png'],
    ['mobile-2', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/7f172682-2b54-4107-a069-bc3fdb0ab618/Redmi+Note+11+Pro-2.png'],
    ['mobile-3', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/39bfbe03-8238-430b-8dde-0860dfd9436c/Redmi+Note+11+Pro.png'],
    ['mobile-4', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/dcbdd400-55b0-4b6d-bd7c-0fa561e23b20/Redmi+Note+11+Pro-3.png'],
    ['mobile-5', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/83ace994-62a2-46b4-9833-fb2a879f8a43/Redmi+Note+11+Pro-2.png'],
    ['mobile-6', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/5c84c1e0-9705-454b-ac65-5c9bf4a39d06/Redmi+Note+11+Pro-6.png'],
    ['mobile-7', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/66c779a7-b3c9-4110-9425-b6e5321bc572/Redmi+Note+11+Pro-1.png'],
    ['mobile-8', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/fb24a258-0c34-4f77-aa06-374a4a74197c/Redmi+Note+11+Pro-4.png'],
    ['results-1', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/56490c41-aa6e-4ef1-b355-e01203fab2aa/Android+Compact+-+106.png'],
    ['results-2', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/d9033574-64f3-404a-93e6-bc4359151ffc/Redmi+Note+11+Pro-7.png'],
    ['results-3', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/33d59899-0e93-4706-bf4b-e297b0926a44/Redmi+Note+11+Pro-5.png'],
    ['iteration-1', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/aab77853-5db1-402a-8ea8-5de6214af1d1/Redmi+Note+11+Pro-10.png'],
    ['iteration-2', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/dcdfad67-09eb-468b-8d08-8904151fe4c9/Redmi+Note+11+Pro-11.png'],
    ['final', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/8af137ae-37ea-4421-9f8c-76e7ff192a09/Redmi+Note+11+Pro-12.png'],
  ],
  'travel-adventures': [
    ['hero', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/08e9adca-e3ff-492c-beaf-9e01cc1783dd/Captura+de+pantalla+2025-03-05+a+las+10.41.19%E2%80%AFp.%E2%80%AFm..png'],
    ['screens-1', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/41dd7dc2-296f-4d1c-abc5-df65c8b1b01c/n.png'],
    ['screens-2', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/91edc8a6-0b93-43e0-9c07-3e968f87f3a2/v.png'],
    ['research-1', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/c6919a53-2335-4847-8e35-bac7f8709ec8/Captura+de+pantalla+2025-03-05+a+las+10.35.00%E2%80%AFp.%E2%80%AFm..png'],
    ['research-2', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/d90a1e39-a0e0-4eb6-b065-b831f4114c06/Captura+de+pantalla+2025-03-05+a+las+10.34.51%E2%80%AFp.%E2%80%AFm..png'],
    ['design-system', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/dd0fb837-5c78-4132-befa-aafa5eb045f3/jj.png'],
    ['solution', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/e1d042c8-1469-461d-8739-d9700623be4f/Captura+de+pantalla+2025-03-05+a+las+10.47.23%E2%80%AFp.%E2%80%AFm..png'],
    ['results', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/747e37f1-1d82-48d0-baa8-eb03c2615e02/Captura+de+pantalla+2025-03-05+a+las+10.43.50%E2%80%AFp.%E2%80%AFm..png'],
    ['mobile-1', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/cbfb2ac8-9262-405e-b26a-6c1e4dcfc67b/Redmi+Note+11+Pro.png'],
    ['mobile-2', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/12593370-90f1-452b-834d-090e0a990e54/ytr.png'],
    ['mobile-3', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/d95628b1-ed5e-40e2-8105-7587b66892a1/juy.png'],
    ['mobile-4', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/2d74f43e-b0a9-4563-ad2a-6aa79822eb5e/ag.png'],
    ['mobile-5', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/04fe0439-fa18-4870-9de0-710b015d67af/juyt.png'],
    ['mobile-6', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/7bb3eeec-4859-4660-a1ec-6bf6b3f72fee/htr.png'],
    ['mobile-7', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/2b2d88e0-d97c-4307-9a7a-edf8d08ab912/hhh.png'],
    ['mobile-8', 'https://images.squarespace-cdn.com/content/v1/67bfc568e8e0a81922d2ed6b/81ba4947-168c-42f0-a015-8c2397d39b02/htrb.png'],
  ],
}

function extFromUrl(url) {
  const pathname = new URL(url).pathname.toLowerCase()
  if (pathname.endsWith('.png')) return 'png'
  if (pathname.endsWith('.jpg') || pathname.endsWith('.jpeg')) return 'jpg'
  if (pathname.endsWith('.webp')) return 'webp'
  return 'png'
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return download(res.headers.location, dest).then(resolve).catch(reject)
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${url}`))
          res.resume()
          return
        }

        const file = createWriteStream(dest)
        res.pipe(file)
        file.on('finish', () => {
          file.close()
          resolve()
        })
        file.on('error', (err) => {
          file.close()
          if (existsSync(dest)) unlinkSync(dest)
          reject(err)
        })
      })
      .on('error', (err) => {
        if (existsSync(dest)) unlinkSync(dest)
        reject(err)
      })
  })
}

async function main() {
  let ok = 0
  let failed = 0

  for (const [project, images] of Object.entries(projects)) {
    const dir = join(ROOT, 'public/assets/projects', project)
    mkdirSync(dir, { recursive: true })

    for (const [name, url] of images) {
      const dest = join(dir, `${name}.${extFromUrl(url)}`)
      process.stdout.write(`Downloading ${project}/${name}... `)
      try {
        await download(url, dest)
        const size = fs.statSync(dest).size
        console.log(`OK (${Math.round(size / 1024)} KB)`)
        ok += 1
      } catch (err) {
        console.log(`FAILED — ${err.message}`)
        failed += 1
      }
    }
  }

  console.log(`\nDone. ${ok} downloaded, ${failed} failed.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
