import puppeteer from 'puppeteer'
import { mkdirSync } from 'node:fs'

const BASE = 'http://127.0.0.1:4173'
const out = '/opt/cursor/artifacts'
mkdirSync(out, { recursive: true })

const browser = await puppeteer.launch({
  executablePath: '/usr/bin/google-chrome-stable',
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})
const page = await browser.newPage()

const shots = [
  { name: 'home_320', path: '/', w: 320, h: 720 },
  { name: 'home_390', path: '/', w: 390, h: 844 },
  { name: 'home_768', path: '/', w: 768, h: 1024 },
  { name: 'home_1280', path: '/', w: 1280, h: 800 },
  { name: 'home_1920', path: '/', w: 1920, h: 1080 },
  { name: 'work_390', path: '/work', w: 390, h: 844 },
  { name: 'case_banco_1280', path: '/case-banco', w: 1280, h: 900 },
  { name: 'lab_390', path: '/lab-workspace', w: 390, h: 844 },
]

for (const s of shots) {
  await page.setViewport({ width: s.w, height: s.h, deviceScaleFactor: 1 })
  await page.goto(BASE + s.path, { waitUntil: 'networkidle0' })
  await page.screenshot({ path: `${out}/${s.name}.png`, fullPage: false })
  console.log('shot', s.name)
}

// overflow audit treating 304 as ok
const widths = [320, 375, 390, 430, 768, 834, 1024, 1280, 1440, 1728, 1920]
const routes = ['/', '/work', '/case-google', '/case-banco', '/case-mastercard', '/case-more', '/lab-workspace', '/lab-assistant', '/about', '/contact']
const bad = []
for (const route of routes) {
  for (const w of widths) {
    await page.setViewport({ width: w, height: 800 })
    await page.goto(BASE + route, { waitUntil: 'domcontentloaded' })
    const overflow = await page.evaluate(() => Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) - window.innerWidth)
    if (overflow > 1) bad.push({ route, w, overflow })
  }
}
console.log(JSON.stringify({ overflowIssues: bad }, null, 2))
await browser.close()
