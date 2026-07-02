import { useEffect, useRef } from 'react'
import '../styles/cursor.css'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return undefined

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return undefined

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let animId = 0

    const moveCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`
    }

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`
      animId = requestAnimationFrame(animateRing)
    }

    const handleHoverIn = () => ring.classList.add('ring--hover')
    const handleHoverOut = () => ring.classList.remove('ring--hover')

    const interactiveEls = document.querySelectorAll('a, button')

    window.addEventListener('mousemove', moveCursor, { passive: true })
    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverIn)
      el.addEventListener('mouseleave', handleHoverOut)
    })

    animId = requestAnimationFrame(animateRing)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverIn)
        el.removeEventListener('mouseleave', handleHoverOut)
      })
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
