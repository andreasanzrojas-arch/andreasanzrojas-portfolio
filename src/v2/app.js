const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const coarse = window.matchMedia('(pointer: coarse)').matches

function qs(sel, root = document) {
  return root.querySelector(sel)
}

function qsa(sel, root = document) {
  return [...root.querySelectorAll(sel)]
}

function initNav() {
  const toggle = qs('.nav-toggle')
  const nav = qs('#site-nav')
  if (!toggle || !nav) return

  const close = () => {
    nav.classList.remove('is-open')
    toggle.setAttribute('aria-expanded', 'false')
  }

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true'
    toggle.setAttribute('aria-expanded', String(!open))
    nav.classList.toggle('is-open', !open)
    if (!open) nav.querySelector('a')?.focus()
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close()
  })

  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', close))
}

function initFieldGravity() {
  const canvas = qs('#field')
  if (!canvas || reduced) return
  const ctx = canvas.getContext('2d', { alpha: true })
  if (!ctx) return

  const state = {
    w: 0,
    h: 0,
    dpr: 1,
    nodes: [],
    well: { x: 0, y: 0, active: false },
    tap: null,
    pointer: null,
    raf: 0,
  }

  function resize() {
    state.dpr = Math.min(window.devicePixelRatio || 1, 2)
    state.w = window.innerWidth
    state.h = window.innerHeight
    canvas.width = Math.floor(state.w * state.dpr)
    canvas.height = Math.floor(state.h * state.dpr)
    canvas.style.width = `${state.w}px`
    canvas.style.height = `${state.h}px`
    ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0)
    const count = Math.round(Math.min(90, (state.w * state.h) / 18000))
    state.nodes = Array.from({ length: count }, () => ({
      x: Math.random() * state.w,
      y: Math.random() * state.h,
      ox: 0,
      oy: 0,
      m: 0.45 + Math.random() * 1.1,
    }))
    state.nodes.forEach((n) => {
      n.ox = n.x
      n.oy = n.y
    })
  }

  function wellFromScroll() {
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
    const t = window.scrollY / max
    return {
      x: state.w * (0.28 + 0.5 * Math.sin(t * Math.PI)),
      y: state.h * (0.18 + 0.64 * t),
    }
  }

  function wellFromFocus() {
    const el = document.activeElement
    if (!el || el === document.body) return null
    const r = el.getBoundingClientRect()
    if (r.width === 0 && r.height === 0) return null
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 }
  }

  function currentWell() {
    if (state.pointer) return state.pointer
    if (state.tap) return state.tap
    const focus = wellFromFocus()
    if (focus) return focus
    return wellFromScroll()
  }

  function tick() {
    const well = currentWell()
    ctx.clearRect(0, 0, state.w, state.h)
    ctx.fillStyle = 'rgba(228, 211, 163, 0.55)'
    for (const n of state.nodes) {
      const dx = well.x - n.x
      const dy = well.y - n.y
      const dist = Math.max(40, Math.hypot(dx, dy))
      const pull = (180 * n.m) / dist
      n.x += (n.ox - n.x) * 0.02 + (dx / dist) * pull * 0.012
      n.y += (n.oy - n.y) * 0.02 + (dy / dist) * pull * 0.012
      const r = 0.7 + n.m * 0.8
      ctx.beginPath()
      ctx.arc(n.x, n.y, r, 0, Math.PI * 2)
      ctx.fill()
    }
    state.raf = requestAnimationFrame(tick)
  }

  const fine = window.matchMedia('(pointer: fine)').matches
  if (fine) {
    window.addEventListener(
      'pointermove',
      (e) => {
        if (e.pointerType === 'mouse') state.pointer = { x: e.clientX, y: e.clientY }
      },
      { passive: true },
    )
  }

  window.addEventListener(
    'pointerdown',
    (e) => {
      if (e.pointerType === 'mouse') return
      state.tap = { x: e.clientX, y: e.clientY }
      state.pointer = null
    },
    { passive: true },
  )

  window.addEventListener('scroll', () => {}, { passive: true })
  window.addEventListener('resize', resize)
  resize()
  tick()
}

function initStageDissolve() {
  const root = qs('[data-stage-dissolve]')
  if (!root) return
  const slides = qsa('.stage-img', root)
  const dots = qsa('.stage-dot', root)
  const caption = qs('[data-stage-caption]', root)
  if (!slides.length) return

  let index = 0
  let startX = 0

  function show(next) {
    index = (next + slides.length) % slides.length
    slides.forEach((img, i) => img.classList.toggle('is-active', i === index))
    dots.forEach((dot, i) => dot.setAttribute('aria-selected', String(i === index)))
    const copy = slides[index].dataset.caption
    if (caption && copy) caption.textContent = copy
  }

  qs('[data-stage-prev]', root)?.addEventListener('click', () => show(index - 1))
  qs('[data-stage-next]', root)?.addEventListener('click', () => show(index + 1))
  dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)))

  root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      show(index - 1)
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      show(index + 1)
    }
  })

  const frame = qs('.stage-frame', root)
  if (frame) {
    frame.addEventListener('pointerdown', (e) => {
      startX = e.clientX
      frame.setPointerCapture?.(e.pointerId)
    })
    frame.addEventListener('pointerup', (e) => {
      const dx = e.clientX - startX
      if (Math.abs(dx) > 40) show(index + (dx < 0 ? 1 : -1))
    })

    if (!coarse && !reduced) {
      frame.addEventListener(
        'pointermove',
        (e) => {
          if (e.pointerType !== 'mouse' || e.buttons) return
          const r = frame.getBoundingClientRect()
          const t = (e.clientX - r.left) / r.width
          show(Math.min(slides.length - 1, Math.max(0, Math.floor(t * slides.length))))
        },
        { passive: true },
      )
    }
  }

  if (!reduced && !coarse) {
    let last = 0
    window.addEventListener(
      'scroll',
      () => {
        const now = window.scrollY
        if (Math.abs(now - last) < 80) return
        last = now
        const r = root.getBoundingClientRect()
        if (r.bottom < 0 || r.top > window.innerHeight) return
        const t = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height)))
        show(Math.round(t * (slides.length - 1)))
      },
      { passive: true },
    )
  }

  show(0)
}

function setDepth(card, value) {
  const v = Math.max(0, Math.min(1, value))
  const stage = qs('.work-card-stage', card)
  const photo = qs('.work-layer-photo', card)
  const front = qs('.work-layer-front', card)
  const slider = qs('input[type="range"]', card)
  if (stage) {
    stage.style.transform = `perspective(900px) rotateX(${8 * v}deg) rotateY(${-10 * v}deg)`
  }
  if (photo) photo.style.transform = `translateZ(${24 * v}px) scale(${1 + v * 0.04})`
  if (front) front.style.transform = `translateY(${-10 * v}px)`
  if (slider && Math.abs(Number(slider.value) - v * 100) > 1) slider.value = String(Math.round(v * 100))
  card.dataset.depth = v.toFixed(2)
}

function initWorkDepth() {
  qsa('[data-work-depth]').forEach((card) => {
    const slider = qs('input[type="range"]', card)
    setDepth(card, 0)

    slider?.addEventListener('input', (e) => setDepth(card, Number(e.target.value) / 100))

    card.addEventListener('pointermove', (e) => {
      if (e.pointerType === 'mouse' && e.buttons) return
      if (e.pointerType === 'mouse') {
        const r = card.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width
        const y = (e.clientY - r.top) / r.height
        setDepth(card, 0.25 + (1 - Math.hypot(x - 0.5, y - 0.5)) * 0.75)
      }
    })

    card.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'mouse') return
      const r = card.getBoundingClientRect()
      const y = (e.clientY - r.top) / r.height
      setDepth(card, 1 - y)
    })

    card.addEventListener('pointerleave', (e) => {
      if (e.pointerType === 'mouse' && document.activeElement !== card && document.activeElement !== slider) {
        setDepth(card, 0)
      }
    })

    card.addEventListener('keydown', (e) => {
      const cur = Number(card.dataset.depth || 0)
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        e.preventDefault()
        setDepth(card, cur + 0.1)
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        e.preventDefault()
        setDepth(card, cur - 0.1)
      }
      if (e.key === 'Enter' || e.key === ' ') {
        if (e.target === slider) return
        if (e.key === ' ') e.preventDefault()
        setDepth(card, cur > 0.5 ? 0 : 1)
      }
    })

    card.addEventListener('focusin', () => {
      if (Number(card.dataset.depth || 0) === 0) setDepth(card, 0.45)
    })
    card.addEventListener('focusout', () => {
      if (!card.contains(document.activeElement)) setDepth(card, 0)
    })
  })
}

function initLabAssistant() {
  const form = qs('[data-lab-assistant]')
  if (!form) return
  const out = qs('[data-lab-output]', form)
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const brief = qs('[name="brief"]', form)?.value?.trim()
    if (!out) return
    if (!brief) {
      out.textContent = 'Add a brief to see how the concept structures a design conversation. This is a lab prototype — it does not call a model or claim production metrics.'
      return
    }
    out.innerHTML = `<p><strong>Framing</strong> — What decision is this brief actually asking for?</p>
<p>${brief.replace(/</g, '&lt;')}</p>
<p><strong>Next honest step</strong> — separate evidence, constraints, and open questions before any screen. This assistant is a concept for that sequencing, not a shipped product metric.</p>`
  })
}

initNav()
initFieldGravity()
initStageDissolve()
initWorkDepth()
initLabAssistant()
