import puppeteer from 'puppeteer'

const BASE = process.env.BASE || 'http://127.0.0.1:4173'
const wait = (ms) => new Promise((r) => setTimeout(r, ms))

const browser = await puppeteer.launch({
  executablePath: '/usr/bin/google-chrome-stable',
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})

const report = { pass: [], fail: [] }
const check = (name, ok, detail) => {
  ;(ok ? report.pass : report.fail).push({ name, detail })
  console.log(ok ? 'PASS' : 'FAIL', name, detail ?? '')
}

const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })

await page.goto(BASE + '/', { waitUntil: 'networkidle0' })

const a11y = await page.evaluate(() => {
  const skip = document.querySelector('.skip')
  const h1 = document.querySelector('h1')
  const unlabeled = [...document.querySelectorAll('button, a, input')].filter((el) => {
    const name = (el.getAttribute('aria-label') || el.innerText || el.getAttribute('alt') || '').trim()
    return !name && el.type !== 'hidden'
  }).map((el) => el.outerHTML.slice(0, 120))
  const decision = document.body.innerText.includes('Decision Trace')
  const tabs = document.querySelectorAll('[role="tab"]').length
  const tablist = document.querySelectorAll('[role="tablist"]').length
  return {
    skip: Boolean(skip),
    h1: h1?.textContent?.slice(0, 80),
    unlabeled,
    decision,
    tabs,
    tablist,
    nav: Boolean(document.querySelector('nav#site-nav')),
    main: Boolean(document.querySelector('main')),
  }
})
check('skip, h1, landmarks, no Decision Trace', a11y.skip && Boolean(a11y.h1) && a11y.nav && a11y.main && !a11y.decision, a11y)
check('unlabeled controls', a11y.unlabeled.length === 0, a11y.unlabeled)

await page.focus('.skip')
const skipFocus = await page.evaluate(() => document.activeElement?.className)
check('Skip link is keyboard-focusable', skipFocus.includes('skip'), skipFocus)

await page.keyboard.press('Tab')
await page.keyboard.press('Tab')
await page.keyboard.press('Tab')
await page.keyboard.press('Tab')
await page.keyboard.press('Tab')
await page.keyboard.press('Tab')
await page.keyboard.press('Tab')
const fragFocus = await page.evaluate(() => document.activeElement?.dataset?.fragment || document.activeElement?.className)
check('Tab can reach a product fragment or in-page control', Boolean(fragFocus), fragFocus)

await page.focus('[data-fragment="mastercard"]')
await page.keyboard.press('Space')
await wait(80)
const keyLock = await page.evaluate(() => ({
  locked: document.querySelector('[data-fragment="mastercard"]')?.classList.contains('is-locked'),
  yield: document.querySelector('[data-fragment="google"]')?.classList.contains('is-yield'),
  memory: sessionStorage.getItem('asr-v2-memory'),
}))
check('Keyboard Space locks fragment + memory', keyLock.locked && keyLock.yield && keyLock.memory.includes('mastercard'), keyLock)

await page.keyboard.press('Escape')
const unlocked = await page.evaluate(() => document.querySelector('[data-fragment="mastercard"]')?.classList.contains('is-locked'))
check('Escape unlocks Field Gravity', unlocked === false, unlocked)

await page.click('[data-stage-next]')
await wait(200)
const artifact = await page.$('.stage-case.is-current .depth-artifact')
check('Banco stage exposes depth artifact for hold', Boolean(artifact), Boolean(artifact))
if (artifact) {
  const box = await artifact.boundingBox()
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2)
  await page.mouse.down()
  await wait(800)
  await page.mouse.up()
  const held = await page.evaluate(() => ({
    depth: document.querySelector('[data-work-depth]')?.dataset.depth,
    live: document.querySelector('[data-depth-live]')?.textContent,
    figures: [...document.querySelectorAll('[data-depth-resolve] figcaption')].map((s) => s.textContent),
  }))
  check('Desktop hold on artifact resolves 12→Simulate·Validate·Confirm', Number(held.depth) === 1 && held.live.includes('Simulate'), held)
}

await page.click('[data-depth-hold]')
await wait(80)
const toggled = await page.evaluate(() => document.querySelector('[data-work-depth]')?.dataset.depth)
check('Hold the surface button toggles without being mousedown-only', Number(toggled) === 0, toggled)

await page.focus('[data-work-depth]')
await page.keyboard.press('Enter')
const keyed = await page.evaluate(() => document.querySelector('[data-work-depth]')?.dataset.depth)
check('Keyboard Enter on Banco surface reveals depth', Number(keyed) === 1, keyed)

await page.goto(BASE + '/case-banco', { waitUntil: 'networkidle0' })
const restored = await page.evaluate(() => ({
  depth: document.querySelector('[data-work-depth]')?.dataset.depth,
  memory: sessionStorage.getItem('asr-v2-memory'),
  decision: document.body.innerText.includes('Decision Trace'),
}))
check('Work Depth memory restores on case page; no Decision Trace', Number(restored.depth) === 1 && !restored.decision, restored)

await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }])
await page.goto(BASE + '/', { waitUntil: 'networkidle0' })
await page.evaluate(() => sessionStorage.removeItem('asr-v2-memory'))
await page.reload({ waitUntil: 'networkidle0' })
await page.click('[data-fragment="banco"]')
const reduced = await page.evaluate(() => {
  const el = document.querySelector('[data-fragment="banco"]')
  return { locked: el.classList.contains('is-locked'), transform: getComputedStyle(el).transform }
})
check('Reduced-motion lock without transform', reduced.locked && (reduced.transform === 'none' || reduced.transform === 'matrix(1, 0, 0, 1, 0, 0)'), reduced)

const overflow = []
for (const w of [320, 390, 768, 1024, 1440, 1920, 2560]) {
  await page.setViewport({ width: w, height: 900, isMobile: w <= 430 })
  for (const route of ['/', '/work', '/case-banco', '/lab-workspace', '/lab-assistant']) {
    await page.goto(BASE + route, { waitUntil: 'domcontentloaded' })
    const o = await page.evaluate(() => Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) - window.innerWidth)
    if (o > 1) overflow.push({ route, w, o })
  }
}
check('No overflow 320–2560', overflow.length === 0, overflow)

await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true })
await page.goto(BASE + '/lab-workspace', { waitUntil: 'networkidle0' })
const lab = await page.evaluate(() => ({
  proto: document.body.innerText.includes('Lab Prototype'),
  low: document.querySelector('[data-field-gravity]')?.dataset.fidelity === 'low',
}))
await page.tap('[data-fragment="agency"]')
const labLock = await page.evaluate(() => document.querySelector('[data-fragment="agency"]')?.classList.contains('is-locked'))
check('Lab Prototype lower-fidelity tap lock', lab.proto && lab.low && labLock, { lab, labLock })

await page.goto(BASE + '/lab-assistant', { waitUntil: 'networkidle0' })
const concept = await page.evaluate(() => document.body.innerText.includes('Concept') && (document.body.innerText.includes('no API') || document.body.innerText.includes('does not call a model')))
check('Lab Assistant Concept label, no fabricated product', concept, concept)

await browser.close()
console.log(JSON.stringify({ passed: report.pass.length, failed: report.fail.length, fail: report.fail }, null, 2))
if (report.fail.length) process.exit(1)
