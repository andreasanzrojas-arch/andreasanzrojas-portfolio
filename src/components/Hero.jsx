import { useEffect, useRef } from 'react'
import { hero } from '../data'
import Reveal from './Reveal'

export default function Hero() {
  const wrapRef = useRef(null)

  // Subtle cursor-reactive ambiance — moves a low-opacity radial glow.
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const x = ((e.clientX - r.left) / r.width) * 100
      const y = ((e.clientY - r.top) / r.height) * 100
      el.style.setProperty('--mx', `${x}%`)
      el.style.setProperty('--my', `${y}%`)
    }
    el.addEventListener('pointermove', onMove)
    return () => el.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <section id="top" ref={wrapRef} className="relative overflow-hidden">
      {/* Ambiance layers */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          background:
            'radial-gradient(420px circle at var(--mx,30%) var(--my,28%), rgba(27,58,87,0.10), transparent 60%)',
        }}
      />
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-multiply" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-hairline to-transparent" />

      <div className="shell relative flex min-h-[88vh] flex-col justify-center pt-28 pb-24">
        <div className="max-w-4xl">
          <Reveal>
            <p className="eyebrow mb-8">{hero.eyebrow}</p>
          </Reveal>

          <h1 className="font-display text-display font-medium text-ink">
            {hero.headline.map((line, i) => (
              <Reveal as="span" key={i} delay={120 + i * 90} className="block">
                {line}
              </Reveal>
            ))}
          </h1>

          <Reveal delay={420}>
            <p className="mt-8 max-w-prose text-lead text-muted">{hero.sub}</p>
          </Reveal>

          <Reveal delay={520}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href={hero.ctaPrimary.href} className="btn-primary">
                {hero.ctaPrimary.label}
                <span aria-hidden>→</span>
              </a>
              <a href={hero.ctaSecondary.href} className="btn-ghost">
                {hero.ctaSecondary.label}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
