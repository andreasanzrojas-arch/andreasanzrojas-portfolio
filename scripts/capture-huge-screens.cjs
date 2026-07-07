const { chromium } = require('playwright')
const path = require('path')
const fs = require('fs')

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 1440, height: 900 })

  const outDir = path.join(__dirname, '../public/assets/projects/huge')
  fs.mkdirSync(outDir, { recursive: true })

  await page.goto('https://edu.google.com/intl/ALL_us/resources/get-started/apps/', {
    waitUntil: 'networkidle',
    timeout: 30000,
  })

  try {
    await page.click('[aria-label="Close"]', { timeout: 3000 })
  } catch {}

  await page.screenshot({
    path: path.join(outDir, 'hero.png'),
    clip: { x: 0, y: 0, width: 1440, height: 900 },
  })

  await page.evaluate(() => window.scrollBy(0, 1200))
  await page.waitForTimeout(1500)
  await page.screenshot({
    path: path.join(outDir, 'screen-audiences.png'),
    clip: { x: 0, y: 0, width: 1440, height: 900 },
  })

  await page.evaluate(() => window.scrollBy(0, 900))
  await page.waitForTimeout(1500)
  await page.screenshot({
    path: path.join(outDir, 'screen-integrations.png'),
    clip: { x: 0, y: 0, width: 1440, height: 900 },
  })

  await page.evaluate(() => window.scrollBy(0, 1200))
  await page.waitForTimeout(1500)
  await page.screenshot({
    path: path.join(outDir, 'screen-filters.png'),
    clip: { x: 0, y: 0, width: 1440, height: 900 },
  })

  await page.evaluate(() => window.scrollBy(0, 2000))
  await page.waitForTimeout(1500)
  await page.screenshot({
    path: path.join(outDir, 'screen-trailblazing.png'),
    clip: { x: 0, y: 0, width: 1440, height: 900 },
  })

  await browser.close()
  console.log('Screenshots saved to public/assets/projects/huge/')
})().catch((err) => {
  console.error(err)
  process.exit(1)
})
