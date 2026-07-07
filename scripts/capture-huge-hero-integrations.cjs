const { chromium } = require('playwright')
const path = require('path')
const fs = require('fs')

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 1600, height: 900 })

  const outDir = path.join(__dirname, '../public/assets/projects/huge')
  fs.mkdirSync(outDir, { recursive: true })

  await page.goto('https://edu.google.com/intl/ALL_us/resources/get-started/apps/', {
    waitUntil: 'networkidle',
    timeout: 45000,
  })

  try {
    await page.click('[aria-label="Close"]', { timeout: 3000 })
  } catch {}

  await page.waitForTimeout(2000)

  // Hero — full top section with app cards
  await page.screenshot({
    path: path.join(outDir, 'hero.png'),
    clip: { x: 0, y: 0, width: 1600, height: 900 },
  })

  // Integrations — scroll to "Apps with seamless integrations"
  const integrationsHeading = page.getByText('Apps with seamless integrations', { exact: false }).first()
  await integrationsHeading.scrollIntoViewIfNeeded()
  await page.waitForTimeout(1500)
  const integrationsBox = await integrationsHeading.evaluate((el) => {
    const section = el.closest('section') || el.parentElement?.parentElement || el
    const rect = section.getBoundingClientRect()
    return {
      x: Math.max(0, rect.x),
      y: Math.max(0, rect.y),
      width: Math.min(1600, rect.width),
      height: Math.min(900, rect.height),
    }
  })
  await page.screenshot({
    path: path.join(outDir, 'screen-integrations.png'),
    clip: integrationsBox,
  })

  await browser.close()
  console.log('Updated hero.png and screen-integrations.png')
})().catch((err) => {
  console.error(err)
  process.exit(1)
})
