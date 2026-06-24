import { chromium } from 'playwright'

const base = 'http://localhost:5173/'
const browser = await chromium.launch()
const page = await browser.newPage({
  viewport: { width: 1440, height: 940 },
  deviceScaleFactor: 2,
  reducedMotion: 'reduce',
})
await page.goto(base, { waitUntil: 'networkidle' })
await page.evaluate(() => document.fonts.ready)
await page.waitForTimeout(400)

// Open palette via keyboard
await page.keyboard.press('Meta+k')
await page.waitForTimeout(350)
await page.screenshot({ path: 'screenshots/03-palette-open.png' })

// Type a query to show fuzzy filtering across groups
await page.keyboard.type('design')
await page.waitForTimeout(300)
await page.screenshot({ path: 'screenshots/04-palette-search.png' })

// Clear, search a theme and execute it -> highlights matching case(s)
await page.keyboard.press('Meta+a')
await page.keyboard.type('payments')
await page.waitForTimeout(250)
await page.keyboard.press('Enter')
await page.waitForTimeout(800)
await page.locator('#work').screenshot({ path: 'screenshots/05-work-focus.png' })

await browser.close()
console.log('palette shots done')
