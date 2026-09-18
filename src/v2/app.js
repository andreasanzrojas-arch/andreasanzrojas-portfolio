const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const coarse = window.matchMedia('(pointer: coarse)').matches

const memory = {
  key: 'asr-v2-memory',
  read() {
    try {
      return JSON.parse(sessionStorage.getItem(this.key) || '{}')
    } catch {
      return {}
    }
  },
  write(patch) {
    sessionStorage.setItem(this.key, JSON.stringify({ ...this.read(), ...patch }))
  },
}

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

function setFragmentState(root, focusId, locked) {
  const live = qs('[data-gravity-live]', root)
  qsa('[data-fragment]', root).forEach((el) => {
    const id = el.dataset.fragment
    const isFocus = id === focusId
    el.classList.toggle('is-focus', isFocus)
    el.classList.toggle('is-yield', Boolean(focusId) && !isFocus)
    el.classList.toggle('is-locked', Boolean(locked) && isFocus)
    el.setAttribute('aria-pressed', String(Boolean(locked) && isFocus))
  })
  const active = focusId ? qs(`[data-fragment="${focusId}"]`, root) : null
  if (live) {
    const label = active?.dataset.label || 'Resting composition'
    live.textContent = locked ? `${label} — locked. Surrounding work yields.` : focusId ? `${label} in focus.` : 'Move toward a fragment. Click or tap to lock.'
  }
}

function initFieldGravity() {
  qsa('[data-field-gravity]').forEach((root) => {
    const frags = qsa('[data-fragment]', root)
    if (!frags.length) return
    const low = root.dataset.fidelity === 'low'
    let pointer = null
    let raf = 0
    const stored = memory.read().lockedFragment
    if (stored && qs(`[data-fragment="${stored}"]`, root)) {
      root.dataset.locked = stored
      setFragmentState(root, stored, true)
    } else {
      setFragmentState(root, null, false)
    }

    const nearest = () => {
      if (root.dataset.locked) return root.dataset.locked
      if (!pointer) return null
      let best = null
      let bestD = Infinity
      frags.forEach((el) => {
        const r = el.getBoundingClientRect()
        const d = Math.hypot(pointer.x - (r.left + r.width / 2), pointer.y - (r.top + r.height / 2))
        if (d < bestD) {
          bestD = d
          best = el.dataset.fragment
        }
      })
      const radius = low ? 140 : 260
      return bestD < radius ? best : null
    }

    const tick = () => {
      raf = 0
      if (root.dataset.locked) {
        setFragmentState(root, root.dataset.locked, true)
        return
      }
      setFragmentState(root, nearest(), false)
    }

    const schedule = () => {
      if (reduced) {
        tick()
        return
      }
      if (!raf) raf = requestAnimationFrame(tick)
    }

    root.addEventListener(
      'pointermove',
      (e) => {
        if (e.pointerType === 'touch') return
        pointer = { x: e.clientX, y: e.clientY }
        schedule()
      },
      { passive: true },
    )

    root.addEventListener('pointerleave', () => {
      pointer = null
      if (!root.dataset.locked) setFragmentState(root, null, false)
    })

    frags.forEach((el) => {
      el.addEventListener('click', () => {
        const id = el.dataset.fragment
        if (root.dataset.locked === id) {
          delete root.dataset.locked
          memory.write({ lockedFragment: null })
          setFragmentState(root, coarse ? id : nearest(), false)
          return
        }
        root.dataset.locked = id
        memory.write({ lockedFragment: id })
        setFragmentState(root, id, true)
      })
      el.addEventListener('focus', () => {
        if (!root.dataset.locked) setFragmentState(root, el.dataset.fragment, false)
      })
    })

    root.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && root.dataset.locked) {
        delete root.dataset.locked
        memory.write({ lockedFragment: null })
        setFragmentState(root, null, false)
      }
    })
  })
}

function initStageDissolve() {
  qsa('[data-stage-dissolve]').forEach((root) => {
    const cases = qsa('.stage-case', root)
    if (!cases.length) return
    const dots = qsa('[data-stage-to]', root)
    const status = qs('[data-stage-status]', root)
    let index = Number(memory.read().workStage || 0)
    if (index >= cases.length) index = 0
    let startX = null

    const show = (next, via = 'select') => {
      const wrapped = (next + cases.length) % cases.length
      const prev = cases[index]
      index = wrapped
      cases.forEach((el, i) => {
        el.classList.remove('is-current', 'is-leaving')
        if (i === index) el.classList.add('is-current')
      })
      if (prev && prev !== cases[index] && !reduced) {
        prev.classList.add('is-leaving')
        window.setTimeout(() => prev.classList.remove('is-leaving'), 700)
      }
      dots.forEach((dot, i) => dot.setAttribute('aria-selected', String(i === index)))
      const title = cases[index].dataset.title || `Case ${index + 1}`
      if (status) status.textContent = via === 'yield' ? `${title} takes priority.` : title
      memory.write({ workStage: index })
      const locked = cases[index].dataset.fragment
      if (locked) memory.write({ lockedFragment: locked })
    }

    qs('[data-stage-prev]', root)?.addEventListener('click', () => show(index - 1, 'yield'))
    qs('[data-stage-next]', root)?.addEventListener('click', () => show(index + 1, 'yield'))
    dots.forEach((dot) =>
      dot.addEventListener('click', () => show(Number(dot.dataset.stageTo), 'yield')),
    )

    const onStageKey = (e) => {
      if (e.target.closest('input, textarea, select, a')) return
      if (e.target.closest('[data-field-gravity]')) return
      if (e.target.closest('button') && !e.target.closest('[data-stage-prev], [data-stage-next], [data-stage-to]')) return
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
      if (e.target !== document.body && e.target !== document.documentElement && !root.contains(e.target)) return
      e.preventDefault()
      show(index + (e.key === 'ArrowRight' ? 1 : -1), 'yield')
    }
    document.addEventListener('keydown', onStageKey)

    const viewport = qs('.stage-viewport', root) || root
    viewport.addEventListener('pointerdown', (e) => {
      if (e.target.closest('a, input, button, textarea, [data-work-depth]')) {
        startX = null
        return
      }
      startX = e.clientX
    })
    viewport.addEventListener('pointerup', (e) => {
      if (startX == null) return
      const dx = e.clientX - startX
      startX = null
      if (Math.abs(dx) > 48) show(index + (dx < 0 ? 1 : -1), 'yield')
    })

    show(index, 'restore')
  })
}

function applyDepth(root, value) {
  const v = Math.max(0, Math.min(1, value))
  root.style.setProperty('--depth', String(v))
  root.dataset.depth = v.toFixed(2)
  const ritual = qs('[data-depth-ritual]', root)
  const resolve = qs('[data-depth-resolve]', root)
  if (ritual) ritual.setAttribute('aria-hidden', String(v > 0.55))
  if (resolve) resolve.setAttribute('aria-hidden', String(v < 0.45))
  const slider = qs('input[type="range"]', root)
  if (slider && Math.abs(Number(slider.value) - v * 100) > 1) slider.value = String(Math.round(v * 100))
  const hold = qs('[data-depth-hold]', root)
  if (hold) hold.setAttribute('aria-pressed', String(v > 0.85))
  const live = qs('[data-depth-live]', root)
  if (live) {
    live.textContent =
      v > 0.7
        ? 'The ritual resolves: Simulate · Validate · Confirm.'
        : v > 0.2
          ? 'The analog sequence is yielding through the surface.'
          : 'Hold the surface to see the 12-step ritual resolve.'
  }
}

function initWorkDepth() {
  qsa('[data-work-depth]').forEach((root) => {
    const stored = Number(memory.read().bancoDepth || 0)
    let value = stored
    let holding = false
    let holdFrom = 0
    let holdStart = 0
    let raf = 0

    applyDepth(root, value)

    const stopHold = (keep) => {
      holding = false
      if (raf) cancelAnimationFrame(raf)
      raf = 0
      if (!keep && value < 0.92) {
        value = 0
        applyDepth(root, 0)
      } else {
        value = 1
        applyDepth(root, 1)
      }
      memory.write({ bancoDepth: value })
    }

    const whileHold = (now) => {
      if (!holding) return
      const t = Math.min(1, (now - holdStart) / 720)
      value = holdFrom + (1 - holdFrom) * t
      applyDepth(root, value)
      if (t < 1) raf = requestAnimationFrame(whileHold)
      else stopHold(true)
    }

    const toggleDepth = () => {
      value = value > 0.5 ? 0 : 1
      applyDepth(root, value)
      memory.write({ bancoDepth: value })
    }

    const startHold = () => {
      if (reduced || coarse) {
        toggleDepth()
        return
      }
      holding = true
      holdFrom = value
      holdStart = performance.now()
      raf = requestAnimationFrame(whileHold)
    }

    const surface = qs('.depth-artifact', root) || root
    surface.addEventListener('pointerdown', (e) => {
      if (e.target.closest('a, input, button')) return
      if (coarse || reduced) return
      e.preventDefault()
      startHold()
    })
    surface.addEventListener('click', (e) => {
      if (e.target.closest('a, input, button')) return
      if (!(coarse || reduced)) return
      toggleDepth()
    })
    window.addEventListener('pointerup', () => {
      if (holding) stopHold(value > 0.85)
    })

    qs('[data-depth-hold]', root)?.addEventListener('click', (e) => {
      e.preventDefault()
      toggleDepth()
    })

    qs('input[type="range"]', root)?.addEventListener('input', (e) => {
      value = Number(e.target.value) / 100
      applyDepth(root, value)
      memory.write({ bancoDepth: value })
    })

    root.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        if (e.target.closest('input, a, textarea, button')) return
        e.preventDefault()
        toggleDepth()
      }
    })
  })
}

function initLabAssistant() {
  const root = qs('[data-lab-assistant]')
  if (!root) return
  const form = root.matches('form') ? root : qs('form', root)
  if (!form) return
  const out = qs('[data-lab-output]', root)
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const brief = qs('[name="brief"]', form)?.value?.trim()
    if (!out) return
    root.classList.add('is-resolved')
    if (!brief) {
      out.textContent =
        'Add a brief to see how the concept sequences a conversation. Lab Concept only — no model, no shipped metrics.'
      return
    }
    out.innerHTML = `<p><strong>Framing</strong> — What decision is this brief actually asking for?</p>
<p>${brief.replace(/</g, '&lt;')}</p>
<p><strong>Next honest step</strong> — separate evidence, constraints, and open questions before any screen. This assistant is a concept for that sequencing, not a shipped product.</p>`
  })
}

initNav()
initFieldGravity()
initStageDissolve()
initWorkDepth()
initLabAssistant()
