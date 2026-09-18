import puppeteer from 'puppeteer'

const BASE = process.env.BASE || 'http://127.0.0.1:4173'

const browser = await puppeteer.launch({
  executablePath: '/usr/bin/google-chrome-stable',
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
})

const report = { pass: [], fail: [] }
const check = (name, ok, detail) => {
  ;(ok ? report.pass : report.fail).push({ name, detail })
  console.log(ok ? 'PASS' : 'FAIL', name, detail || '')
}

{
  const page = await browser.newPage()
  await page.setViewport({ width: 1440, height: 900 })
  await page.goto(BASE + '/', { waitUntil: 'networkidle0' })

  const rest = await page.evaluate(() => ({
    locked: [...document.querySelectorAll('[data-fragment].is-locked')].map((el) => el.dataset.fragment),
    stages: document.querySelectorAll('.stage-case').length,
    current: document.querySelector('.stage-case.is-current')?.dataset.fragment,
    grid: getComputedStyle(document.querySelector('.work-stage .stage-viewport')).display,
    decisionTrace: document.body.innerText.includes('Decision Trace'),
  }))
  check('home has 4 fragments + 3 stages, no Decision Trace', rest.stages === 3 && !rest.decisionTrace, rest)

  await page.hover('[data-fragment="banco"]')
  await new Promise((r) => setTimeout(r, 120))
  const prox = await page.evaluate(() => ({
    focus: document.querySelector('[data-fragment="banco"]')?.className,
    yieldMain: document.querySelector('[data-fragment="google"]')?.classList.contains('is-yield'),
  }))
  check('Field Gravity proximity: Banco focuses, Google yields', prox.focus.includes('is-focus') && prox.yieldMain, prox)

  await page.click('[data-fragment="banco"]')
  const locked = await page.evaluate(() => ({
    banco: document.querySelector('[data-fragment="banco"]').classList.contains('is-locked'),
    googleYield: document.querySelector('[data-fragment="google"]').classList.contains('is-yield'),
    memory: sessionStorage.getItem('asr-v2-memory'),
    live: document.querySelector('[data-gravity-live]')?.textContent,
  }))
  check('Field Gravity lock persists on Banco', locked.banco && locked.googleYield && locked.memory.includes('banco'), locked)

  await page.click('[data-stage-next]')
  await new Promise((r) => setTimeout(r, 80))
  const stage = await page.evaluate(() => ({
    current: document.querySelector('.stage-case.is-current')?.dataset.fragment,
    leaving: document.querySelector('.stage-case.is-leaving')?.dataset.fragment,
    status: document.querySelector('[data-stage-status]')?.textContent,
    memory: sessionStorage.getItem('asr-v2-memory'),
  }))
  check('Stage Dissolve Google yields to Banco', stage.current === 'banco' && stage.leaving === 'google', stage)

  await page.$eval('[data-work-depth]', (el) => el.focus())
  await page.keyboard.press('Enter')
  const depth = await page.evaluate(() => ({
    value: document.querySelector('[data-work-depth]')?.dataset.depth,
    live: document.querySelector('[data-depth-live]')?.textContent,
    ritualHidden: document.querySelector('[data-depth-ritual]')?.getAttribute('aria-hidden'),
    resolveHidden: document.querySelector('[data-depth-resolve]')?.getAttribute('aria-hidden'),
    labels: [...document.querySelectorAll('[data-depth-ritual] span')].map((s) => s.textContent),
    figures: [...document.querySelectorAll('[data-depth-resolve] figcaption')].map((s) => s.textContent),
  }))
  check(
    'Work Depth keyboard reveals Simulate Validate Confirm from 12-step ritual',
    Number(depth.value) === 1 &&
      depth.live.includes('Simulate') &&
      depth.labels.length === 12 &&
      depth.figures.join(' · ') === 'Simulate · Validate · Confirm',
    depth,
  )

  await page.goto(BASE + '/work', { waitUntil: 'networkidle0' })
  const mem = await page.evaluate(() => ({
    stage: document.querySelector('.stage-case.is-current')?.dataset.fragment,
    depth: document.querySelector('[data-work-depth]')?.dataset.depth,
    storage: sessionStorage.getItem('asr-v2-memory'),
  }))
  check('Interaction memory restores Banco stage + depth on /work', mem.stage === 'banco' && Number(mem.depth) === 1, mem)

  await page.keyboard.press('ArrowRight')
  const mc = await page.evaluate(() => document.querySelector('.stage-case.is-current')?.dataset.fragment)
  check('Keyboard ArrowRight stages to Mastercard', mc === 'mastercard', mc)

  await page.close()
}

{
  const page = await browser.newPage()
  await page.emulate({
    viewport: { width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 },
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1',
  })
  await page.goto(BASE + '/', { waitUntil: 'networkidle0' })
  await page.tap('[data-fragment="mastercard"]')
  const mobileLock = await page.evaluate(() => ({
    locked: document.querySelector('[data-fragment="mastercard"]')?.classList.contains('is-locked'),
    yield: document.querySelector('[data-fragment="google"]')?.classList.contains('is-yield'),
    overflow: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) - window.innerWidth,
  }))
  check('Mobile tap locks Mastercard; no overflow at 390', mobileLock.locked && mobileLock.yield && mobileLock.overflow <= 1, mobileLock)

  await page.tap('[data-stage-next]')
  await new Promise((r) => setTimeout(r, 80))
  await page.tap('[data-depth-hold]')
  const mobileDepth = await page.evaluate(() => ({
    current: document.querySelector('.stage-case.is-current')?.dataset.fragment,
    depth: document.querySelector('[data-work-depth]')?.dataset.depth,
    live: document.querySelector('[data-depth-live]')?.textContent,
  }))
  check('Mobile stage + Hold the surface tap alternative', mobileDepth.current === 'banco' && Number(mobileDepth.depth) === 1, mobileDepth)
  await page.close()
}

{
  const page = await browser.newPage()
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }])
  await page.setViewport({ width: 1280, height: 800 })
  await page.goto(BASE + '/', { waitUntil: 'networkidle0' })
  await page.click('[data-fragment="google"]')
  const reduced = await page.evaluate(() => {
    const el = document.querySelector('[data-fragment="google"]')
    const cs = getComputedStyle(el)
    return {
      locked: el.classList.contains('is-locked'),
      transform: cs.transform,
      transition: cs.transitionDuration,
    }
  })
  check('Reduced motion still locks; no fragment transform', reduced.locked && (reduced.transform === 'none' || reduced.transform === 'matrix(1, 0, 0, 1, 0, 0)'), reduced)
  await page.close()
}

{
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 800 })
  await page.goto(BASE + '/lab-workspace', { waitUntil: 'networkidle0' })
  const lab = await page.evaluate(() => ({
    proto: document.body.innerText.includes('Lab Prototype'),
    fidelity: document.querySelector('[data-field-gravity]')?.dataset.fidelity,
    fieldLow: document.querySelector('.gravity-field')?.dataset.fidelity,
    shippedClaim: /shipped product(?! —)/i.test(document.body.innerText) && document.body.innerText.includes('conversion rate'),
  }))
  await page.click('[data-fragment="book"]')
  const labLock = await page.evaluate(() => document.querySelector('[data-fragment="book"]')?.classList.contains('is-locked'))
  check('Lab workspace is Prototype + low-fidelity gravity lock', lab.proto && lab.fidelity === 'low' && labLock, { lab, labLock })

  await page.goto(BASE + '/lab-assistant', { waitUntil: 'networkidle0' })
  const concept = await page.evaluate(() => ({
    concept: document.body.innerText.includes('Concept'),
    noApi: document.body.innerText.includes('does not call a model') || document.body.innerText.includes('no API'),
  }))
  await page.type('[name="brief"]', 'CDT onboarding brief')
  await page.click('[data-lab-assistant] button[type="submit"]')
  const out = await page.$eval('[data-lab-output]', (el) => el.textContent)
  check('Lab assistant is Concept, local only, no fabricated metrics', concept.concept && concept.noApi && out.includes('not a shipped product'), { concept, out: out.slice(0, 180) })
  await page.close()
}

{
  const page = await browser.newPage()
  const routes = ['/', '/work', '/case-banco', '/lab-workspace', '/lab-assistant']
  const widths = [320, 768, 1024, 1440, 1920]
  const overflow = []
  for (const route of routes) {
    for (const w of widths) {
      await page.setViewport({ width: w, height: 800, isMobile: w <= 430 })
      await page.goto(BASE + route, { waitUntil: 'domcontentloaded' })
      const o = await page.evaluate(() => Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) - window.innerWidth)
      if (o > 1) overflow.push({ route, w, o })
    }
  }
  check('No horizontal overflow 320–1920 on key routes', overflow.length === 0, overflow)
  await page.close()
}

await browser.close()
console.log(JSON.stringify({ passed: report.pass.length, failed: report.fail.length, fail: report.fail }, null, 2))
if (report.fail.length) process.exit(1)
