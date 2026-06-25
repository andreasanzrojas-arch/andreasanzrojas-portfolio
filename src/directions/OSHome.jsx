import { useEffect, useRef, useState } from 'react'
import { Search, Layers, FlaskConical, ArrowUpRight, Compass, Lightbulb, MousePointerClick, TrendingUp } from 'lucide-react'
import { hero, heroImages, credibility, featured, principles, stats, currently, footer, about, process, coreSkills, experience } from '../data'
import Reveal from '../components/Reveal'
import { usePointerArea } from '../lib/motion'
import { useTilt } from '../hooks/useTilt'
import Artifact from '../components/artifacts'
import ProjectImage from '../components/ProjectImage'
import CompanyLogo from '../components/CompanyLogo'
import CommandPalette from '../components/CommandPalette'
import { Link } from '../lib/router'

// DIRECTION 2 — PRODUCT OPERATING SYSTEM
// Dark, software-grade, precise. Functional command palette, glassy cards, glow.
// References: Linear, Raycast, Arc, Stripe Sessions.

// Expertise themes + skills mapped to the case studies they're evidenced by.
const themes = [
  { label: 'Enterprise fintech', cases: [0, 1] },
  { label: 'Payments & compliance', cases: [1] },
  { label: 'Design systems', cases: [0, 2] },
  { label: 'Digital transformation', cases: [0] },
  { label: 'Platform & scale', cases: [2] },
]
const skills = [
  { label: 'Strategic thinking', cases: [0, 1, 2] },
  { label: 'Systems thinking', cases: [1, 2] },
  { label: 'Stakeholder alignment', cases: [0, 1] },
  { label: 'Product leadership', cases: [0, 1, 2] },
  { label: 'Enterprise scale', cases: [1, 2] },
  { label: 'AI-augmented workflow', cases: [] },
]

const LIGHT_IMAGE_CARDS = new Set(['03', '04'])
const CARD_IMAGE_WHITE = { backgroundColor: '#ffffff' }

function Kbd({ children }) {
  return (
    <span className="inline-flex h-5 min-w-[20px] items-center justify-center rounded border border-white/15 bg-white/5 px-1.5 font-mono text-[11px] text-white/60">
      {children}
    </span>
  )
}

function AmbientGlow() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    let pendingX = window.innerWidth / 2
    let pendingY = window.innerHeight / 2

    const apply = () => {
      raf = 0
      document.documentElement.style.setProperty('--x', `${pendingX}px`)
      document.documentElement.style.setProperty('--y', `${pendingY}px`)
    }

    const onMove = (e) => {
      pendingX = e.clientX
      pendingY = e.clientY
      if (!raf) raf = requestAnimationFrame(apply)
    }

    apply()
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="ambient-glow" aria-hidden>
      <div className="cursor-glow" />
      <div className="ambient-glow__drift" />
    </div>
  )
}

function TopBar({ onOpen }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#08080A]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 md:px-10">
        <div className="flex items-center gap-2.5">
          <span className="h-5 w-5 rounded-md bg-gradient-to-br from-indigo-400 to-fuchsia-500" />
          <span className="font-display text-[14px] font-medium tracking-tight text-white">
            Andrea Sanz Rojas
          </span>
        </div>
        <nav className="hidden items-center gap-7 text-[13px] text-white/55 md:flex">
          <a href="#selected-work" className="hover:text-white">Work</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <button
            onClick={onOpen}
            aria-label="Open command menu"
            className="flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-white/40 transition-colors hover:border-white/20 hover:text-white/70"
          >
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </button>
        </nav>
        <button onClick={onOpen} className="text-white/60 md:hidden" aria-label="Search">
          ⌕
        </button>
      </div>
    </header>
  )
}

function useMarqueeActiveIndex(clipRef, slideElsRef, total) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const clip = clipRef.current
    if (!clip) return

    let raf = 0
    const tick = () => {
      const clipRect = clip.getBoundingClientRect()
      const centerX = clipRect.left + clipRect.width / 2
      let bestSlide = 0
      let bestDist = Infinity

      slideElsRef.current.forEach((el, i) => {
        if (!el) return
        const r = el.getBoundingClientRect()
        if (r.right < clipRect.left || r.left > clipRect.right) return
        const dist = Math.abs(r.left + r.width / 2 - centerX)
        if (dist < bestDist) {
          bestDist = dist
          bestSlide = i % total
        }
      })

      setActiveIndex((prev) => (prev === bestSlide ? prev : bestSlide))
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [clipRef, slideElsRef, total])

  return activeIndex
}

function MarqueeStrip() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [hoveredCard, setHoveredCard] = useState(null)
  const clipRef = useRef(null)
  const slideElsRef = useRef([])
  const track = [...heroImages, ...heroImages]
  const total = heroImages.length
  const currentSlide = useMarqueeActiveIndex(clipRef, slideElsRef, total)
  const isAnimating = isPlaying && hoveredCard === null

  return (
    <div className="relative left-1/2 mt-6 w-screen max-w-[100vw] -translate-x-1/2 md:mt-8">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div ref={clipRef} className="hero-marquee-outer marquee-mask">
          <div className="hero-marquee-inner">
            <div
              className={`hero-marquee-track${isAnimating ? '' : ' is-paused'}`}
              style={{ animationPlayState: isAnimating ? 'running' : 'paused' }}
            >
              {track.map((img, i) => (
                <Link
                  key={`${img.href}-${i}`}
                  ref={(el) => {
                    slideElsRef.current[i] = el
                  }}
                  to={img.href ?? '#'}
                  className={`hero-marquee-item${
                    hoveredCard === img.href ? ' hero-marquee-item--active' : ''
                  }${
                    hoveredCard !== null && hoveredCard !== img.href ? ' hero-marquee-item--dimmed' : ''
                  }`}
                  style={{ background: img.bg || '#111' }}
                  aria-label={img.projectName}
                  onMouseEnter={() => setHoveredCard(img.href)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onFocus={() => setHoveredCard(img.href)}
                  onBlur={() => setHoveredCard(null)}
                >
                  <img src={img.src} alt={img.alt} draggable={false} loading="eager" />
                  <div className="hero-card-overlay">
                    <span className="hero-card-label">{img.projectName}</span>
                    <span className="hero-card-cta">View project →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-controls">
          <button
            type="button"
            className="hero-pause-btn"
            onClick={() => setIsPlaying((p) => !p)}
            aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
          >
            {isPlaying ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden>
                <rect x="2" y="1" width="4" height="12" rx="1" />
                <rect x="8" y="1" width="4" height="12" rx="1" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden>
                <path d="M3 1.5L12.5 7 3 12.5V1.5Z" />
              </svg>
            )}
          </button>
          <span className="hero-counter" aria-live="polite">
            {String(currentSlide + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  )
}

function CommandPill({ onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label="Open command menu"
      className="fixed bottom-6 left-1/2 z-50 hidden -translate-x-1/2 items-center gap-2.5 rounded-full border border-white/10 bg-[#121214]/90 px-4 py-2.5 text-[13px] text-white/55 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.8)] backdrop-blur-md transition-colors duration-300 hover:border-white/20 hover:text-white/80 md:flex"
    >
      <span className="font-mono text-[12px] text-white/40">⌘K</span>
      <span>Search</span>
    </button>
  )
}

function Hero() {
  const areaRef = usePointerArea()
  const [portraitFailed, setPortraitFailed] = useState(false)
  return (
    <section id="top" ref={areaRef} className="relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-grid-dark absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]" />
        <div
          className="ambient-drift-alt absolute right-[6%] top-[26%] h-[280px] w-[420px] opacity-20"
          style={{ background: 'radial-gradient(closest-side, rgba(40,180,200,0.05), transparent)' }}
        />
        <div
          className="absolute inset-0 opacity-30 transition-opacity duration-500"
          style={{
            background:
              'radial-gradient(340px circle at var(--mx,50%) var(--my,30%), rgba(150,120,255,0.02), transparent 65%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-6 text-center md:px-10 md:pt-24 md:pb-8">
        <Reveal>
          <div className="flex flex-col items-center gap-2 text-center">
            <div
              className="h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full border border-white/10 bg-[#1a1a1a]"
              aria-hidden={portraitFailed}
            >
              {!portraitFailed && (
                <img
                  src="/assets/andrea-portrait.jpg"
                  alt=""
                  className="h-full w-full object-cover grayscale transition-[filter] duration-500 hover:grayscale-0"
                  onError={() => setPortraitFailed(true)}
                />
              )}
            </div>
            <span className="font-display text-lg font-medium tracking-tight text-white/80">
              {hero.name}
            </span>
            <span className="inline-flex max-w-[calc(100vw-3rem)] flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] leading-snug tracking-tight text-white/65 sm:max-w-none sm:gap-2 sm:px-3.5 sm:text-[12px]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              {hero.eyebrow}
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mx-auto mt-6 max-w-[16ch] text-center font-display text-[clamp(1.875rem,7.2vw,2.75rem)] font-semibold leading-[1.08] text-white md:max-w-none md:text-display md:leading-[1.03]">
            <span className="bg-gradient-to-br from-indigo-200 to-white bg-clip-text text-transparent">
              Leading
            </span>{' '}
            complex product design at global scale.
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p className="mx-auto mt-5 max-w-3xl text-balance text-lead text-white/60">
            {hero.sub}
          </p>
        </Reveal>

        <Reveal delay={280}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {hero.ctas.map((c) =>
              c.style === 'primary' ? (
                <a
                  key={c.label}
                  href={`#${c.anchor}`}
                  className="inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-[13px] font-medium tracking-tight text-[#08080A] transition-colors duration-300 hover:bg-white"
                >
                  {c.label}
                </a>
              ) : (
                <a
                  key={c.label}
                  href={`#${c.anchor}`}
                  className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-[13px] font-medium tracking-tight text-white/80 transition-colors duration-300 hover:border-white/30 hover:text-white"
                >
                  {c.label}
                </a>
              ),
            )}
          </div>
        </Reveal>
      </div>

      <Reveal delay={320}>
        <MarqueeStrip />
      </Reveal>
    </section>
  )
}

function Credibility() {
  return (
    <section className="relative border-y border-white/[0.06] bg-white/[0.02]">
      {/* faint top edge highlight for depth */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <span className="font-mono text-eyebrow uppercase text-white/30">Trusted across</span>
          <div className="trusted-logos">
            <CompanyLogo name="huge" />
            <CompanyLogo name="google" />
            <CompanyLogo name="mastercard" />
            <CompanyLogo name="bancobogota" />
            <CompanyLogo name="imaginamos" />
          </div>
          <span className="hidden font-mono text-meta text-white/30 lg:block">{credibility.meta}</span>
        </div>
        <div className="mt-5 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
          <span className="font-mono text-meta text-white/45">{currently}</span>
        </div>
      </div>
    </section>
  )
}

function CardChrome({ item }) {
  if (item && LIGHT_IMAGE_CARDS.has(item.index)) return null

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      style={{
        background:
          'radial-gradient(320px circle at var(--gx,30%) var(--gy,0%), rgba(140,110,255,0.02), transparent 70%)',
      }}
    />
  )
}

function projectHref(item) {
  return item.link || item.cta?.href || '#'
}

function CardMeta({ item }) {
  return (
    <span className="font-mono text-[11px] tabular-nums text-white/35">{item.index}</span>
  )
}

function CardMetric({ children }) {
  return (
    <p className="mt-4 font-mono text-[13px] font-semibold tracking-tight text-white/85">
      {children}
    </p>
  )
}

function CardFooter({ item }) {
  const tags = item.tags ?? item.tag?.split(' · ').filter(Boolean) ?? []

  return (
    <footer className="mt-6 border-t border-white/[0.07] pt-4">
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <span className="text-meta text-white/50">{item.company}</span>
        {tags.map((tag) => (
          <span key={tag} className="project-tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-3 flex justify-start">
        <span className="text-[13px] text-white/60 opacity-60 transition-opacity duration-300 group-hover:opacity-100">
          View project →
        </span>
      </div>
    </footer>
  )
}

function useCardState(pos, focus) {
  const focused = Array.isArray(focus) && focus.includes(pos)
  const dimmed = Array.isArray(focus) && !focused
  return {
    className: `${dimmed ? 'opacity-40' : 'opacity-100'} ${focused ? 'border-indigo-400/60' : 'border-white/[0.08]'}`,
    style: focused
      ? { boxShadow: '0 0 0 1px rgba(150,120,255,0.22), 0 28px 56px -22px rgba(0,0,0,0.75)' }
      : undefined,
  }
}

const CARD_BASE =
  'work-card work-card-tilt group relative overflow-visible rounded-2xl border border-white/[0.08] bg-gradient-to-b shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]'
const CARD_BASE_FEATURED =
  'work-card work-card-tilt group relative overflow-visible rounded-2xl border border-white/[0.08] bg-[#111111] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]'
const CARD_SURFACE = 'from-white/[0.045] to-white/[0.015]'

function cardImageContainerClass(item, extra = '') {
  if (item.id === 'monoma') {
    return `tilt-layer overflow-hidden rounded-lg border border-white/[0.08] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)] ${extra}`.trim()
  }
  const light = LIGHT_IMAGE_CARDS.has(item.index)
  return `tilt-layer overflow-hidden rounded-lg border border-white/[0.08] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)] ${light ? 'image-bg-light' : 'bg-[#111]'} ${extra}`.trim()
}

function cardImageContainerStyle(item) {
  if (item.id === 'monoma') return { '--tz': '22px' }
  const light = LIGHT_IMAGE_CARDS.has(item.index)
  return light ? { ...CARD_IMAGE_WHITE, '--tz': '22px' } : { '--tz': '22px' }
}

// Project photo when available; falls back to SVG artifact if missing or loading.
function CardVisual({ item }) {
  const [useArtifact, setUseArtifact] = useState(!item.image)
  const [imgReady, setImgReady] = useState(false)
  const light = LIGHT_IMAGE_CARDS.has(item.index)

  if (item.id === 'monoma') {
    return (
      <div className="card-phone-halo">
        <div className="card-halo-glow" aria-hidden />
        <div className="card-phone-mockup">
          <img src="/assets/projects/monoma/android-1.png" alt="Monoma digital banking" />
        </div>
      </div>
    )
  }

  if (useArtifact) {
    return <Artifact index={item.index} variant="os" />
  }

  if (light) {
    return (
      <div className="w-full" style={CARD_IMAGE_WHITE}>
        {!imgReady && (
          <div
            className="min-h-[180px] w-full"
            style={{ ...CARD_IMAGE_WHITE, padding: '12px', borderRadius: '8px' }}
            aria-hidden="true"
          />
        )}
        <ProjectImage
          src={item.image}
          variant="card-light"
          className={imgReady ? 'block w-full max-h-[280px] rounded-[inherit]' : 'hidden'}
          onLoad={() => setImgReady(true)}
          onError={() => setUseArtifact(true)}
        />
      </div>
    )
  }

  return (
    <>
      {!imgReady && <Artifact index={item.index} variant="os" />}
      <ProjectImage
        src={item.image}
        variant="card"
        className={
          imgReady
            ? 'block w-full max-h-[280px] rounded-[inherit]'
            : 'hidden'
        }
        onLoad={() => setImgReady(true)}
        onError={() => setUseArtifact(true)}
      />
    </>
  )
}

function CardConfidentialNote({ item }) {
  if (!item.confidentialNote) return null
  return <p className="mt-1 text-[11px] text-white/35">{item.confidentialNote}</p>
}

function FeaturedWorkCard({ item, pos, focus }) {
  const tiltRef = useTilt({ max: 8 })
  const state = useCardState(pos, focus)
  return (
    <Reveal variant="scale">
      <Link to={projectHref(item)} className="work-card-link group relative block">
        <article ref={tiltRef} className={`${CARD_BASE_FEATURED} p-5 pb-12 md:p-7 md:pb-12 ${state.className}`} style={state.style}>
          <CardChrome item={item} />
          <div className="relative grid items-center gap-7 md:grid-cols-2 md:gap-10">
            <div
              className="tilt-layer order-1 overflow-hidden rounded-lg border border-white/[0.08] bg-[#111] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)] md:order-2"
              style={{ '--tz': '22px' }}
            >
              <CardVisual item={item} />
            </div>
            <div className="order-2 md:order-1">
              <CardMeta item={item} />
              <h3 className="mt-5 font-display text-h2 font-semibold text-white">{item.title}</h3>
              {item.subtitle ? (
                <p className="mt-1 text-[13px] text-white/45">{item.subtitle}</p>
              ) : null}
              <CardConfidentialNote item={item} />
              <p className="mt-3 max-w-prose text-body text-white/60">{item.framing}</p>
              <CardMetric>{item.metric}</CardMetric>
              <CardFooter item={item} />
            </div>
          </div>
        </article>
      </Link>
    </Reveal>
  )
}

function WorkCard({ item, pos, focus }) {
  const tiltRef = useTilt({ max: 8 })
  const state = useCardState(pos, focus)
  return (
    <Reveal variant="scale">
      <Link to={projectHref(item)} className="work-card-link group relative block">
        <article ref={tiltRef} className={`${CARD_BASE} ${CARD_SURFACE} p-5 pb-12 ${state.className}`} style={state.style}>
          <CardChrome item={item} />
          <div className="relative">
            <div className="mb-5">
              <CardMeta item={item} />
            </div>

            <div className={cardImageContainerClass(item, 'mb-6')} style={cardImageContainerStyle(item)}>
              <CardVisual item={item} />
            </div>

            <h3 className="font-display text-h3 font-medium text-white">{item.title}</h3>
            {item.subtitle ? (
              <p className="mt-1 text-[12px] text-white/45">{item.subtitle}</p>
            ) : null}
            <CardConfidentialNote item={item} />
            <p className="mt-2.5 text-body-sm text-white/55">{item.framing}</p>
            <CardMetric>{item.metric}</CardMetric>

            <CardFooter item={item} />
          </div>
        </article>
      </Link>
    </Reveal>
  )
}

function Featured({ focus }) {
  const [heroItem, ...gridItems] = featured
  const count = String(featured.length).padStart(2, '0')
  return (
    <section id="selected-work" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-28 md:px-10 md:py-36">
      <Reveal>
        <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between md:mb-14">
          <h2 className="font-display text-h2 font-semibold text-white">Selected work — 2021–2025</h2>
          <span className="font-mono text-meta tabular-nums text-white/30">
            {count} / {count}
          </span>
        </div>
      </Reveal>
      <div className="space-y-5 md:space-y-6">
        <FeaturedWorkCard item={heroItem} pos={0} focus={focus} />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {gridItems.map((item, i) => (
            <WorkCard key={item.index} item={item} pos={i + 1} focus={focus} />
          ))}
        </div>
      </div>
    </section>
  )
}

function languageLevelTone(level = '') {
  const normalized = level.toLowerCase()
  if (normalized === 'aspirational') return 'aspirational'
  if (normalized === 'learning') return 'learning'
  return 'fluent'
}

function languageStatusLabel(status) {
  if (status === 'learning') return 'LEARNING'
  if (status === 'aspirational') return 'ASPIRATIONAL'
  return null
}

function AboutTeaser() {
  return (
    <section id="about" className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
        <Reveal>
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-12">
            <img
              src="/assets/andrea-portrait.jpg"
              alt="Andrea Sanz Rojas"
              className="bio-portrait w-[min(100%,300px)] shrink-0 rounded-xl border border-white/10 object-cover shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_8px_32px_-12px_rgba(0,0,0,0.55)] md:w-[300px]"
              width={300}
              height={300}
            />
            <div className="flex min-w-0 flex-col items-center justify-center text-center md:items-start md:text-left">
              <h2 className="max-w-4xl text-balance font-display text-h2 font-semibold text-white">{about.headline}</h2>
              <div className="mt-3 max-w-3xl space-y-3 text-pretty text-sm leading-relaxed text-white/60">
                {about.subcopy.split('\n\n').map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-2 md:justify-start">
                {about.languages.map((lang) => {
                  const name = lang.name ?? lang.label
                  const level = lang.level ?? languageStatusLabel(lang.status) ?? ''
                  const tone = languageLevelTone(level || lang.status || '')
                  return (
                    <span
                      key={name}
                      className={`inline-flex items-center rounded-full border px-3 py-1 text-[12px] tracking-tight ${
                        tone === 'aspirational'
                          ? 'border-white/[0.06] bg-white/[0.02] text-white/40'
                          : tone === 'learning'
                            ? 'border-white/10 bg-white/[0.03] text-white/55'
                            : 'border-white/10 bg-[#111] text-white/75'
                      }`}
                    >
                      {name}
                      {level ? (
                        <span className="ml-1.5 font-mono text-[10px] uppercase text-white/35">{level}</span>
                      ) : null}
                    </span>
                  )
                })}
              </div>
              <p className="mt-4 inline-flex items-center gap-2 text-[13px] text-white/50">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" aria-hidden />
                {about.availability}
              </p>
              <a
                href={about.cta.href}
                className="mt-6 inline-block text-body-sm text-white/60 transition-colors duration-300 hover:text-white"
              >
                {about.cta.label}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function FlipCard({ number, title, description, variant = 'work' }) {
  const [flipped, setFlipped] = useState(false)
  const touchDevice = useRef(false)

  useEffect(() => {
    const mq = window.matchMedia('(hover: none)')
    const sync = () => {
      touchDevice.current = mq.matches
    }
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const toggle = () => setFlipped((f) => !f)

  const handleToggleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle()
    }
  }

  const surface =
    'bg-gradient-to-b from-white/[0.045] to-white/[0.015] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]'
  const border =
    variant === 'think'
      ? 'rounded-2xl border border-white/[0.08] border-l-indigo-400/50'
      : 'rounded-2xl border border-white/[0.08]'
  const titleClass =
    variant === 'think'
      ? 'font-display text-h3 font-semibold leading-snug text-white'
      : 'font-display text-h3 font-medium text-white'

  return (
    <article
      className={`flip-card group h-[280px] w-full md:h-[300px] ${border} ${flipped ? 'flipped' : ''}`}
      aria-label={`Click to reveal: ${title}`}
      onClick={() => {
        if (touchDevice.current) toggle()
      }}
    >
      <button
        type="button"
        role="button"
        className="flip-card-toggle absolute right-4 top-4 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] font-mono text-[15px] leading-none text-white/45 hover:border-white/20 hover:text-white/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60"
        aria-label={`Reveal: ${title}`}
        aria-pressed={flipped}
        onClick={(e) => {
          e.stopPropagation()
          toggle()
        }}
        onKeyDown={handleToggleKeyDown}
      >
        +
      </button>
      <div className="flip-card-inner h-full w-full">
        <div className={`flip-card-face flip-card-front ${surface}`}>
          <span className="font-mono text-[11px] tabular-nums text-white/35">{number}</span>
          <h3 className={titleClass}>{title}</h3>
        </div>
        <div className={`flip-card-face flip-card-back ${surface}`}>
          <p className="text-center text-body-sm text-white/55">{description}</p>
        </div>
      </div>
    </article>
  )
}

function HowIThink() {
  return (
    <section id="how-i-think" className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl scroll-mt-20 px-6 py-28 md:px-10 md:py-36">
        <Reveal>
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between md:mb-14">
            <h2 className="font-display text-h2 font-semibold text-white">How I think</h2>
            <span className="font-mono text-meta tabular-nums text-white/30">
              {String(principles.length).padStart(2, '0')}
            </span>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {principles.map((p, i) => (
            <Reveal key={p.number} variant="scale" delay={i * 80}>
              <FlipCard
                number={p.number}
                title={p.statement}
                description={p.description}
                variant="think"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatsStrip() {
  return (
    <section className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10 md:py-16">
        <Reveal>
          <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-y-0 md:divide-x md:divide-white/[0.08]">
            {stats.map((s, i) => (
              <div key={s.label} className={`md:px-8 ${i === 0 ? 'md:pl-0' : ''}`}>
                <div className="font-display text-[clamp(3rem,10vw,5rem)] font-bold leading-none tabular-nums text-white">
                  {s.value}
                </div>
                <div className="mt-2 text-meta text-white/45">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Capabilities() {
  return (
    <section id="how-i-work" className="border-t border-white/[0.06] bg-white/[0.01]">
      <div className="mx-auto max-w-6xl scroll-mt-20 px-6 py-28 md:px-10 md:py-36">
        <Reveal>
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between md:mb-14">
            <h2 className="font-display text-h2 font-semibold text-white">How I work</h2>
            <span className="font-mono text-meta tabular-nums text-white/30">04</span>
          </div>
          <p className="section-intro">
            My process adapts to the project. The discipline behind it doesn&apos;t.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <div className="process-steps">
            <div className="process-step">
              <span className="process-step-num">01</span>
              <div className="process-step-icon">
                <Search size={20} strokeWidth={1.5} />
              </div>
              <h4>Discover &amp; Define</h4>
              <p>
                User research, competitive analysis, and stakeholder alignment. I use Design Thinking
                to frame the right problem before designing any solution.
              </p>
            </div>
            <div className="process-step">
              <span className="process-step-num">02</span>
              <div className="process-step-icon">
                <Layers size={20} strokeWidth={1.5} />
              </div>
              <h4>Design &amp; Prototype</h4>
              <p>
                Rapid iteration across flows, components, and edge cases. I work in Figma and FigJam
                — moving fast without losing precision.
              </p>
            </div>
            <div className="process-step">
              <span className="process-step-num">03</span>
              <div className="process-step-icon">
                <FlaskConical size={20} strokeWidth={1.5} />
              </div>
              <h4>Test &amp; Validate</h4>
              <p>
                Usability testing, structured feedback loops, and data-informed refinement. The Double
                Diamond doesn&apos;t end at delivery — it closes with evidence.
              </p>
            </div>
            <div className="process-step">
              <span className="process-step-num">04</span>
              <div className="process-step-icon">
                <ArrowUpRight size={20} strokeWidth={1.5} />
              </div>
              <h4>Deliver &amp; Scale</h4>
              <p>
                Handoff with documented specs, design tokens, and component annotations. Built for the
                engineers, not just the presentation deck.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

const PROCESS_STEP_ICONS = [Compass, Lightbulb, MousePointerClick, TrendingUp]

function ProcessFlow() {
  return (
    <section id="process" className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl scroll-mt-20 px-6 py-28 md:px-10 md:py-36">
        <Reveal>
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between md:mb-14">
            <div>
              <h2 className="font-display text-h2 font-semibold text-white">How I move from problem to product</h2>
              <p className="mt-2 max-w-xl text-sm text-white/45">{process.label}</p>
            </div>
            <span className="font-mono text-meta tabular-nums text-white/30">
              {String(process.steps.length).padStart(2, '0')}
            </span>
          </div>
          <p className="process-methodology">
            Built on the Double Diamond — a proven framework that structures every
            project in 2 phases: first diverge to understand the real problem, then
            converge to define the right solution. I adapted it with a 4th stage
            focused on measurable impact, because good design doesn&apos;t end at launch — it
            ends when you can prove what changed.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <div className="process-flow">
            {process.steps.map((step, i) => {
              const StepIcon = PROCESS_STEP_ICONS[i]
              return (
              <div key={step.label} className="process-flow__segment">
                <div className="process-flow__node">
                  <span className="process-flow__index font-mono text-[11px] tabular-nums text-white/35">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="dd-step-icon">
                    <StepIcon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="process-flow__label font-display text-h3 font-medium text-white">{step.label}</h3>
                  <p className="process-flow__desc text-body-sm text-white/55">{step.description}</p>
                </div>
                {i < process.steps.length - 1 ? (
                  <div className="process-flow__connector" aria-hidden="true">
                    <span className="process-flow__arrow">→</span>
                  </div>
                ) : null}
              </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function CoreSkills() {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  return (
    <section id="core-skills" className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl scroll-mt-20 px-6 py-28 md:px-10 md:py-36">
        <Reveal>
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between md:mb-14">
            <h2 className="font-display text-h2 font-semibold text-white">Core skills</h2>
            <span className="font-mono text-meta tabular-nums text-white/30">
              {String(coreSkills.length).padStart(2, '0')}
            </span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="flex flex-wrap gap-[0.6rem]">
            {coreSkills.map((skill, i) => (
              <div
                key={skill.label}
                className="skill-pill"
                onMouseEnter={() => setHoveredSkill(i)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <span className="skill-pill-label">{skill.label}</span>
                {hoveredSkill === i && skill.description && (
                  <span className="skill-pill-desc"> · {skill.description}</span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl scroll-mt-20 px-6 py-28 md:px-10 md:py-36">
        <Reveal>
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between md:mb-14">
            <h2 className="font-display text-h2 font-semibold text-white">Experience</h2>
            <span className="font-mono text-meta tabular-nums text-white/30">
              {String(experience.length).padStart(2, '0')}
            </span>
          </div>
        </Reveal>
        <div>
          {experience.map((item, i) => {
            const dates = item.dates ?? item.period
            const context = item.context ?? item.description
            const methods = item.methods ?? (item.tags?.length ? `Methods: ${item.tags.join(' · ')}` : null)

            return (
            <Reveal key={item.company} delay={i * 60}>
              <article className="experience-item py-12">
                <div className="experience-header">
                  {item.logoKey ? <CompanyLogo name={item.logoKey} markOnly /> : null}
                  <div className="experience-meta">
                    <h3 className="font-display text-h3 font-medium text-white">{item.company}</h3>
                    <span>
                      {item.role} · {dates}
                      {item.location ? ` · ${item.location}` : ''}
                    </span>
                  </div>
                </div>
                {methods ? (
                  <p className="mt-2 text-[12px] text-white/40">{methods}</p>
                ) : null}
                <p className="mt-4 max-w-3xl text-body-sm leading-relaxed text-white/60">
                  {context}
                </p>
              </article>
              <hr className="experience-divider" aria-hidden="true" />
            </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="shrink-0 opacity-70"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  )
}

function MiniFooter() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
        <Reveal>
          <h2 className="max-w-[18ch] text-balance font-display text-h2 font-semibold text-white">
            {footer.cta}
          </h2>
          <p className="mt-4 max-w-[40ch] text-balance text-lead text-white/55">{footer.line}</p>
          <div className="mt-8 flex flex-col gap-2">
            {footer.contact.map((c, i) => (
              <span key={c.label} className="contents">
                <a
                  href={c.href}
                  className="break-all text-[15px] text-white/80 transition-colors duration-300 hover:text-white sm:break-normal md:text-base"
                >
                  {c.label}
                </a>
                {i === 0 && (
                  <a
                    href="/andrea-cv.pdf"
                    download="Andrea_Sanz_Rojas_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-1.5 text-[14px] text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    <DownloadIcon />
                    Download CV
                  </a>
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </footer>
  )
}

export default function OSHome() {
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [focus, setFocus] = useState(null)
  const focusTimer = useRef(null)

  // ⌘K / Ctrl+K toggles the command menu.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPaletteOpen((o) => !o)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => () => clearTimeout(focusTimer.current), [])

  const applyFocus = (arr) => {
    clearTimeout(focusTimer.current)
    setFocus(arr)
    focusTimer.current = setTimeout(() => setFocus(null), 2800)
  }
  const scrollSel = (sel) =>
    document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const goWorkFocus = (arr) => {
    scrollSel('#selected-work')
    if (arr.length) applyFocus(arr)
  }
  const goCase = (i) => {
    const cards = document.querySelectorAll('#selected-work article')
    cards[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    applyFocus([i])
  }

  const groups = [
    {
      heading: 'Case studies',
      items: featured.map((f, i) => ({
        id: `case-${i}`,
        label: f.title,
        hint: f.company.split(' ')[0],
        glyph: f.index,
        keywords: `${f.tag} ${f.company} case study project`,
        run: () => goCase(i),
      })),
    },
    {
      heading: 'Expertise',
      items: themes.map((t, i) => ({
        id: `theme-${i}`,
        label: t.label,
        hint: `${t.cases.length} ${t.cases.length === 1 ? 'project' : 'projects'}`,
        glyph: '#',
        keywords: `theme expertise ${t.label}`,
        run: () => goWorkFocus(t.cases),
      })),
    },
    {
      heading: 'Skills',
      items: skills.map((s, i) => ({
        id: `skill-${i}`,
        label: s.label,
        glyph: '◇',
        keywords: `skill capability ${s.label}`,
        run: () => (s.cases.length ? goWorkFocus(s.cases) : scrollSel('#selected-work')),
      })),
    },
    {
      heading: 'Navigation',
      items: [
        { id: 'nav-top', label: 'Top', glyph: '⌂', hint: 'Home', keywords: 'home hero top', run: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
        { id: 'nav-work', label: 'Selected work', glyph: '▦', hint: 'Work', keywords: 'projects work case studies', run: () => scrollSel('#selected-work') },
        { id: 'nav-experience', label: 'Experience', glyph: '◷', hint: 'Career', keywords: 'experience work history roles', run: () => scrollSel('#experience') },
        { id: 'nav-contact', label: 'Get in touch', glyph: '✉', hint: 'Contact', keywords: 'contact hire reach', run: () => scrollSel('#contact') },
        { id: 'nav-email', label: 'Email Andrea', glyph: '@', hint: 'mailto', keywords: 'email mail message', run: () => { window.location.href = 'mailto:andreasanzrojas@gmail.com' } },
        { id: 'nav-resume', label: 'Download résumé', glyph: '⤓', hint: 'PDF', keywords: 'resume cv', run: () => {} },
      ],
    },
  ]

  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-[#08080A] font-sans text-white selection:bg-indigo-500/30">
      <AmbientGlow />
      <TopBar onOpen={() => setPaletteOpen(true)} />
      <Hero />
      <Credibility />
      <StatsStrip />
      <AboutTeaser />
      <Featured focus={focus} />
      <HowIThink />
      <Capabilities />
      <ProcessFlow />
      <CoreSkills />
      <Experience />
      <MiniFooter />
      <CommandPill onOpen={() => setPaletteOpen(true)} />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} groups={groups} />
    </div>
  )
}
