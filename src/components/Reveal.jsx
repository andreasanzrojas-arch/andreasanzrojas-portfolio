import { useEffect, useRef, useState } from 'react'

// Lightweight scroll reveal using IntersectionObserver.
// Fades + rises content once, on first entry into the viewport.
// variant: 'rise' | 'scale' | 'blur' (continuity-driven entrance).
export default function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  variant = 'rise',
  className = '',
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal reveal--${variant} ${visible ? 'reveal-in' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}
