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
await page.waitForTimeout(600)

// Hero (top viewport)
await page.screenshot({ path: 'screenshots/01-hero.png' })

// Full work section
await page.locator('#work').scrollIntoViewIfNeeded()
await page.waitForTimeout(500)
await page.locator('#work').screenshot({ path: 'screenshots/02-work.png' })

// Each case study card
const cards = page.locator('#work article')
const n = await cards.count()
for (let i = 0; i < n; i++) {
  await cards.nth(i).scrollIntoViewIfNeeded()
  await page.waitForTimeout(300)
  await cards.nth(i).screenshot({ path: `screenshots/case-${i + 1}.png` })
}

await browser.close()
console.log(`done — captured hero, work, and ${n} cases`)
