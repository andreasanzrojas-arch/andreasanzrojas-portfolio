import { useEffect, useRef, useState } from 'react'

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Scroll-linked parallax. Translates an element on the Y axis based on its
 * progress through the viewport. rAF-batched, only runs while in view.
 * `strength` = max px of travel in each direction.
 */
export function useParallax(strength = 28) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReduced()) return

    let raf = 0
    let inView = false

    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight || 1
      const center = r.top + r.height / 2
      // -1 (below) .. 0 (centered) .. 1 (above)
      const p = (center - vh / 2) / (vh / 2 + r.height / 2)
      const clamped = Math.max(-1, Math.min(1, p))
      el.style.setProperty('--py', `${(-clamped * strength).toFixed(2)}px`)
    }

    const onScroll = () => {
      if (!inView) return
      if (!raf) raf = requestAnimationFrame(update)
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting
        if (inView) onScroll()
      },
      { threshold: 0 },
    )
    io.observe(el)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [strength])

  return ref
}

/**
 * Returns [ref, inView]. Toggles once (default) when the element enters view.
 * Used to drive progressive reveal of complex artifacts.
 */
export function useInView({ threshold = 0.2, once = true } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) io.unobserve(el)
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, once])
  return [ref, inView]
}

/**
 * Cursor-responsive tilt with depth + a pointer-tracked glow.
 * Sets --rx/--ry (rotation), --lift, and --gx/--gy (glow position).
 * Smooths via CSS transition; resets on leave. rAF-batched.
 */
export function useTilt({ max = 6, lift = -6 } = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReduced()) return

    let raf = 0
    let pending = null

    const apply = () => {
      raf = 0
      if (!pending) return
      const { px, py } = pending
      el.style.setProperty('--rx', `${(py * -max).toFixed(2)}deg`)
      el.style.setProperty('--ry', `${(px * max).toFixed(2)}deg`)
      el.style.setProperty('--gx', `${((px + 0.5) * 100).toFixed(1)}%`)
      el.style.setProperty('--gy', `${((py + 0.5) * 100).toFixed(1)}%`)
    }

    const onEnter = () => el.style.setProperty('--lift', `${lift}px`)
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      pending = {
        px: (e.clientX - r.left) / r.width - 0.5,
        py: (e.clientY - r.top) / r.height - 0.5,
      }
      if (!raf) raf = requestAnimationFrame(apply)
    }
    const onLeave = () => {
      el.style.setProperty('--rx', '0deg')
      el.style.setProperty('--ry', '0deg')
      el.style.setProperty('--lift', '0px')
    }

    el.addEventListener('pointerenter', onEnter)
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointerenter', onEnter)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [max, lift])

  return ref
}

/**
 * Ambient cursor glow for a container (sets --mx/--my as percentages).
 * Used for hero atmospheres. rAF-batched.
 */
export function usePointerArea() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReduced()) return
    let raf = 0
    let pending = null
    const apply = () => {
      raf = 0
      if (!pending) return
      el.style.setProperty('--mx', `${pending.x}%`)
      el.style.setProperty('--my', `${pending.y}%`)
    }
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      pending = {
        x: (((e.clientX - r.left) / r.width) * 100).toFixed(1),
        y: (((e.clientY - r.top) / r.height) * 100).toFixed(1),
      }
      if (!raf) raf = requestAnimationFrame(apply)
    }
    el.addEventListener('pointermove', onMove)
    return () => {
      el.removeEventListener('pointermove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
  return ref
}
