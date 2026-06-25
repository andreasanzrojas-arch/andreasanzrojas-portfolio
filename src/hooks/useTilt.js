import { useEffect, useRef } from 'react'

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/**
 * Mouse-tracking 3D tilt for work cards.
 * Applies perspective + rotateX/Y; fast transition while tracking, slow reset on leave.
 */
export function useTilt({ max = 8 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReduced()) return

    let raf = 0
    let pending = null

    const setTransform = (rx, ry) => {
      el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`
    }

    const apply = () => {
      raf = 0
      if (!pending) return
      const { px, py } = pending
      setTransform((py * -max).toFixed(2), (px * max).toFixed(2))
      el.style.setProperty('--gx', `${((px + 0.5) * 100).toFixed(1)}%`)
      el.style.setProperty('--gy', `${((py + 0.5) * 100).toFixed(1)}%`)
    }

    const onEnter = () => {
      el.style.transition = 'transform 0.1s ease'
    }

    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      pending = {
        px: (e.clientX - r.left) / r.width - 0.5,
        py: (e.clientY - r.top) / r.height - 0.5,
      }
      if (!raf) raf = requestAnimationFrame(apply)
    }

    const onLeave = () => {
      el.style.transition = 'transform 0.5s ease'
      setTransform(0, 0)
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
  }, [max])

  return ref
}
