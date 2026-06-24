import { useEffect, useState } from 'react'
import { nav } from '../data'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out-soft ${
        scrolled ? 'border-b border-hairline bg-canvas/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="shell flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-[15px] font-medium tracking-tight text-ink">
          {nav.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13px] font-medium tracking-wide text-muted transition-colors duration-200 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href={nav.resume.href}
            className="text-[13px] font-medium tracking-wide text-ink underline decoration-hairline-strong underline-offset-4 transition-colors duration-200 hover:decoration-ink"
          >
            {nav.resume.label}
          </a>
        </nav>

        <a href="#contact" className="text-[13px] font-medium tracking-wide text-ink md:hidden">
          Contact
        </a>
      </div>
    </header>
  )
}
