import { useEffect, useRef, useState } from 'react'
import { Mail, Download, Pause, Play } from 'lucide-react'
import { hero, heroImages, featured, footer, about, coreCapabilities, experience, tools, methods } from '../data'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import ParticleCanvas from '../components/ParticleCanvas'
import { usePointerArea } from '../lib/motion'
import { useTilt } from '../hooks/useTilt'
import Artifact from '../components/artifacts'
import ProjectImage from '../components/ProjectImage'
import CompanyLogo, { CompanyMark } from '../components/CompanyLogo'
import CommandPalette from '../components/CommandPalette'
import { Link, useRouter } from '../lib/router'

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

const LIGHT_IMAGE_CARDS = new Set()

// Full-page product screenshots that should top-crop (cover) in the carousel
// rather than letterbox (contain). Google/Banco keep their existing contain fit.
const CAROUSEL_COVER_BRANDS = new Set(['globalpayments', 'monoma', 'travel'])
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
    <header className="os-nav sticky top-0 z-40 border-b border-white/[0.06] bg-[#08080A]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 md:px-10">
        <div className="flex items-center gap-2.5">
          <span className="h-5 w-5 rounded-md bg-gradient-to-br from-indigo-400 to-fuchsia-500" />
          <span className="font-display text-[14px] font-medium tracking-tight text-white">
            Andrea Sanz Rojas
          </span>
        </div>
        <nav className="os-nav__links flex items-center gap-4 text-[13px] text-white/55 md:gap-7" aria-label="Primary">
          <a
            href="#selected-work"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md px-2 transition-colors hover:text-white"
          >
            Work
          </a>
          <button
            onClick={onOpen}
            aria-label="Open command menu"
            className="hidden sm:inline-flex min-h-11 items-center gap-1 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-white/40 transition-colors hover:border-white/20 hover:text-white/70"
          >
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </button>
        </nav>
        <button
          onClick={onOpen}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-white/60 md:hidden"
          aria-label="Search"
        >
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
  const [manualX, setManualX] = useState(null)
  const clipRef = useRef(null)
  const trackRef = useRef(null)
  const slideElsRef = useRef([])
  const track = [...heroImages, ...heroImages]
  const total = heroImages.length
  const currentSlide = useMarqueeActiveIndex(clipRef, slideElsRef, total)
  const isAnimating = isPlaying && hoveredCard === null && manualX === null

  const captureTrackX = () => {
    const el = trackRef.current
    if (!el) return 0
    if (manualX !== null) return manualX
    return new DOMMatrixReadOnly(getComputedStyle(el).transform).m41 || 0
  }

  const togglePlay = () => {
    setIsPlaying((playing) => {
      if (playing) {
        setManualX(captureTrackX())
        return false
      }
      setManualX(null)
      return true
    })
  }

  return (
    <div className="relative left-1/2 mt-3 w-screen max-w-[100vw] -translate-x-1/2 md:mt-8">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div ref={clipRef} className="hero-marquee hero-marquee-outer marquee-mask">
          <div className="hero-marquee-inner">
            <div
              ref={trackRef}
              className={`hero-marquee-track${isAnimating ? '' : ' is-paused'}`}
              style={
                manualX !== null
                  ? { animation: 'none', transform: `translateX(${manualX}px)` }
                  : { animationPlayState: isAnimating ? 'running' : 'paused' }
              }
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
                  tabIndex={i >= total ? -1 : undefined}
                  aria-hidden={i >= total ? true : undefined}
                  onMouseEnter={() => setHoveredCard(img.href)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onFocus={() => setHoveredCard(img.href)}
                  onBlur={() => setHoveredCard(null)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    draggable={false}
                    loading="eager"
                    className={
                      CAROUSEL_COVER_BRANDS.has(img.brand) ? 'hero-marquee-item__img--cover' : ''
                    }
                  />
                  <div className="hero-card-overlay">
                    <span className="hero-card-label">{img.projectName}</span>
                    <span className="hero-card-cta">View project →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Shared controls — pause/play + counter only, same on every breakpoint */}
        <div className="hero-controls" role="group" aria-label="Carousel controls">
          <div className="hero-controls__cluster">
            <button
              type="button"
              className="hero-ctrl-btn"
              onClick={togglePlay}
              aria-label={isPlaying && manualX === null ? 'Pause carousel' : 'Play carousel'}
              aria-pressed={!(isPlaying && manualX === null)}
            >
              {isPlaying && manualX === null ? (
                <Pause className="hero-ctrl-btn__icon" strokeWidth={1.75} aria-hidden />
              ) : (
                <Play className="hero-ctrl-btn__icon" strokeWidth={1.75} aria-hidden />
              )}
            </button>
            <span className="hero-counter" aria-live="polite">
              {String(currentSlide + 1).padStart(2, '0')}
              <span className="hero-counter__sep" aria-hidden>
                {' '}
                /{' '}
              </span>
              {String(total).padStart(2, '0')}
            </span>
          </div>
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
    <section id="top" ref={areaRef} className="hero-section relative">
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

      <div className="hero-text relative mx-auto max-w-6xl px-6 pt-10 pb-4 text-center md:px-10 md:pt-14 md:pb-6">
        <Reveal>
          <div className="flex flex-col items-center gap-1 text-center md:gap-1.5">
            <div
              className="h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white/10 bg-[#1a1a1a]"
              aria-hidden="true"
            >
              {!portraitFailed && (
                <img
                  src="/assets/aa-avatar.webp"
                  alt=""
                  width={56}
                  height={56}
                  className="h-full w-full object-cover object-center grayscale transition-[filter] duration-500 hover:grayscale-0"
                  onError={() => setPortraitFailed(true)}
                />
              )}
            </div>
            <span className="font-display text-[15px] font-normal tracking-tight text-white/70">
              Andrea <span className="whitespace-nowrap">Sanz Rojas</span>
            </span>
            <span className="hero-eyebrow-pill inline-flex items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] leading-none tracking-tight text-white/65 whitespace-nowrap md:gap-2 md:px-3.5 md:py-1.5 md:text-[12px] md:leading-snug">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              <span className="md:hidden">{hero.eyebrowMobile}</span>
              <span className="hidden md:inline">{hero.eyebrow}</span>
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="hero-headline mx-auto mt-4 max-w-[16ch] text-center font-display text-[clamp(1.875rem,7.2vw,2.75rem)] font-light tracking-tight leading-[1.08] text-white md:mt-6 md:max-w-none md:text-display md:leading-[1.03]">
            <span className="bg-gradient-to-br from-indigo-200 to-white bg-clip-text text-transparent">
              Leading
            </span>{' '}
            complex product design at global scale.
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p className="mx-auto mt-3 max-w-2xl text-balance text-lead text-white/60 md:mt-4 md:hidden">
            {about.introMobile}
          </p>
          <p className="mx-auto mt-3 hidden max-w-2xl text-balance text-lead text-white/60 md:mt-4 md:block">
            {about.intro}
          </p>
        </Reveal>

        <Reveal delay={280}>
          <div className="hero-actions mt-6 flex flex-wrap items-center justify-center gap-3 md:mt-6">
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
  const brands = [
    { key: 'huge', label: 'Huge' },
    { key: 'google', label: 'Google' },
    { key: 'mastercard', label: 'Mastercard' },
    { key: 'bancobogota', label: 'Banco de Bogotá' },
    { key: 'imaginamos', label: 'Imaginamos' },
  ]

  return (
    <section className="credibility-section relative border-y border-white/[0.06]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10 md:py-16">
        <Reveal>
          <div className="trusted-header">
            <p className="trusted-label font-mono text-eyebrow uppercase tracking-[0.2em]">
              Trusted across
            </p>
          </div>
          <ul className="trusted-logos" aria-label="Companies I've worked with">
            {brands.map((brand) => (
              <li key={brand.key} className="trusted-logo-item">
                <div className="trusted-logo-mark" aria-hidden>
                  <CompanyMark name={brand.key} />
                </div>
                <span className="trusted-logo-name">{brand.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
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
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
      <span className="font-mono text-[11px] tabular-nums text-white/35" aria-hidden="true">
        {item.index}
      </span>
      {item.company ? (
        <span className="text-meta text-white/55">{item.company}</span>
      ) : null}
    </div>
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
  const ctaLabel = item.cta?.label || 'View case study →'

  return (
    <footer className="mt-6 border-t border-white/[0.07] pt-4">
      {tags.length > 0 ? (
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      ) : null}
      <div className={`flex justify-start ${tags.length > 0 ? 'mt-3' : ''}`}>
        <span className="text-[13px] text-white/60 opacity-60 transition-opacity duration-300 group-hover:opacity-100">
          {ctaLabel}
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
// Featured card shares the exact same tokens as the grid cards (border, radius,
// gradient surface, shadow, hover) — it reads as "featured" only by scale/layout.
const CARD_BASE_FEATURED = CARD_BASE
const CARD_SURFACE = 'from-white/[0.045] to-white/[0.015]'

function cardImageContainerClass(item, extra = '') {
  const light = LIGHT_IMAGE_CARDS.has(item.index)
  return `tilt-layer overflow-hidden rounded-lg border border-white/[0.08] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)] ${light ? 'image-bg-light' : 'bg-[#111]'} ${extra}`.trim()
}

function cardImageContainerStyle(item) {
  const light = LIGHT_IMAGE_CARDS.has(item.index)
  return light ? { ...CARD_IMAGE_WHITE, '--tz': '22px' } : { '--tz': '22px' }
}

// Project photo when available; falls back to SVG artifact if missing or loading.
// `fill` locks the media to its parent height so standard grid cards share one rhythm.
function CardVisual({ item, fill = false }) {
  const [useArtifact, setUseArtifact] = useState(!item.image)
  const [imgReady, setImgReady] = useState(false)
  const light = LIGHT_IMAGE_CARDS.has(item.index)
  const sizeClass = fill
    ? 'block h-full w-full rounded-[inherit]'
    : 'block w-full max-h-[280px] rounded-[inherit]'

  if (useArtifact) {
    return <Artifact index={item.index} variant="os" />
  }

  if (light) {
    return (
      <div className={fill ? 'h-full w-full' : 'w-full'} style={CARD_IMAGE_WHITE}>
        {!imgReady && (
          <div
            className={fill ? 'h-full w-full' : 'min-h-[180px] w-full'}
            style={{ ...CARD_IMAGE_WHITE, padding: '12px', borderRadius: '8px' }}
            aria-hidden="true"
          />
        )}
        <ProjectImage
          src={item.image}
          alt=""
          variant="card-light"
          className={imgReady ? sizeClass : 'hidden'}
          imgClassName={fill ? 'h-full' : ''}
          loading="lazy"
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
        alt=""
        variant="card"
        className={imgReady ? sizeClass : 'hidden'}
        imgClassName={fill ? 'h-full' : ''}
        loading="lazy"
        onLoad={() => setImgReady(true)}
        onError={() => setUseArtifact(true)}
      />
    </>
  )
}

function CardConfidentialNote({ item }) {
  if (!item.confidentialNote) return null
  return <p className="mt-1 text-[11px] text-white/55">{item.confidentialNote}</p>
}

function FeaturedWorkCard({ item, pos, focus }) {
  const tiltRef = useTilt({ max: 8 })
  const state = useCardState(pos, focus)
  return (
    <Reveal variant="scale">
      <Link to={projectHref(item)} className="work-card-link group relative block">
        <article ref={tiltRef} className={`${CARD_BASE_FEATURED} ${CARD_SURFACE} p-5 pb-12 md:p-7 md:pb-12 ${state.className}`} style={state.style}>
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
    <Reveal variant="scale" className="h-full">
      <Link to={projectHref(item)} className="work-card-link group relative block h-full">
        <article ref={tiltRef} className={`${CARD_BASE} ${CARD_SURFACE} flex h-full flex-col p-5 pb-12 ${state.className}`} style={state.style}>
          <CardChrome item={item} />
          <div className="relative flex flex-1 flex-col">
            <div className="mb-5">
              <CardMeta item={item} />
            </div>

            <div
              className={cardImageContainerClass(
                item,
                'relative mb-6 h-[200px] min-h-[200px] max-h-[200px] md:h-[220px] md:min-h-[220px] md:max-h-[220px]',
              )}
              style={cardImageContainerStyle(item)}
            >
              <div className="absolute inset-0">
                <CardVisual item={item} fill />
              </div>
            </div>

            <h3 className="font-display text-h3 font-medium text-white">{item.title}</h3>
            <CardConfidentialNote item={item} />
            <p className="mt-2.5 text-body-sm text-white/55">{item.framing}</p>
            {/* spacer keeps metric + footer bottom-aligned so all cards read at equal height */}
            <div className="flex-1" aria-hidden />
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
  return (
    <section id="selected-work" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-28 md:px-10 md:py-36">
      <Reveal>
        <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between md:mb-14">
          <h2 className="font-display text-h2 font-semibold text-white">Selected work — 2021–2025</h2>
        </div>
      </Reveal>
      <div className="space-y-5 md:space-y-6">
        <FeaturedWorkCard item={heroItem} pos={0} focus={focus} />
        <div className="projects-grid grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {gridItems.map((item, i) => (
            <WorkCard key={item.index} item={item} pos={i + 1} focus={focus} />
          ))}
        </div>
      </div>
    </section>
  )
}

function HowIThink() {
  return (
    <section id="how-i-think" className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-4xl scroll-mt-20 px-6 py-24 md:px-10 md:py-32">
        <h2 className="max-w-full text-balance font-display text-h2 font-semibold text-white sm:max-w-[22ch]">
          I don&apos;t design screens. I design the logic that screens execute.
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {[
            {
              num: '01',
              title: 'Research before architecture',
              body: 'Every structural decision follows research that surfaces the real problem — not the stated one. Journey maps and interviews locate where users fail, so the architecture solves that failure — not a stakeholder assumption.',
            },
            {
              num: '02',
              title: 'Systems over screens',
              body: 'I design information architecture and interaction logic before visual design. The screen is where those decisions become visible — sequence, priority, and state — not where the work begins.',
            },
            {
              num: '03',
              title: 'Constraint as design material',
              body: "Compliance, technical debt, and business timelines aren't obstacles — they define the design space. I work with constraints explicitly, not around them.",
            },
            {
              num: '04',
              title: 'AI-native from the start',
              body: 'AI is embedded from the first brief—accelerating research synthesis, exploration, iteration, and prototyping. Claude, Cursor, and ChatGPT shorten the path from insight to execution, while product decisions and design quality remain human.',
            },
          ].map((card) => (
            <article
              key={card.num}
              className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.015] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] md:p-7"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[12px] tabular-nums text-indigo-300/50" aria-hidden="true">
                  {card.num}
                </span>
                <h3 className="font-display text-[17px] font-medium leading-snug text-white">{card.title}</h3>
              </div>
              <p className="mt-3 text-pretty text-[14px] leading-relaxed text-white/55">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CoreSkills() {
  return (
    <section id="core-skills" className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between md:mb-14">
            <h2 className="font-display text-h2 font-semibold text-white">Core skills</h2>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="core-skills-grid grid gap-x-10 gap-y-10 sm:grid-cols-2 md:gap-y-12">
            {coreCapabilities.map((cap, i) => (
              <div key={cap.label} className="flex gap-4">
                <span className="mt-1 font-mono text-[12px] tabular-nums text-indigo-300/50" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-[17px] font-medium leading-snug text-white">
                    {cap.label}
                  </h3>
                  <p className="mt-1.5 text-pretty text-[14px] leading-relaxed text-white/55">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="tools-section mt-14">
            <div className="tools-groups">
              <div className="tools-group" role="group" aria-labelledby="core-skills-tools-label">
                <p id="core-skills-tools-label" className="section-label tools-group__label">
                  Tools
                </p>
                <ul className="tools-row tool-badges">
                  {tools.map((tool) => (
                    <li key={tool}>
                      <span className="tool-badge">{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tools-group" role="group" aria-labelledby="core-skills-methods-label">
                <p id="core-skills-methods-label" className="section-label tools-group__label">
                  Methods
                </p>
                <ul className="tools-row tool-badges tools-row--methods">
                  {methods.map((method) => (
                    <li key={method}>
                      <span className="tool-badge tool-badge--method">{method}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between md:mb-14">
            <h2 className="font-display text-h2 font-semibold text-white">Experience</h2>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="experience-list">
            {experience.map((item) => {
              const dates = item.dates ?? item.period
              return (
                <article
                  key={item.company}
                  className={`experience-item${item.current ? ' experience-item--current' : ''}`}
                >
                  {item.logoKey ? (
                    <div className="experience-item__logo" aria-hidden="true">
                      <CompanyLogo name={item.logoKey} markOnly />
                    </div>
                  ) : (
                    <div className="experience-item__logo" aria-hidden="true" />
                  )}
                  <div className="experience-item__body">
                    <div className="experience-item__meta">
                      <span
                        className={`font-display font-medium text-white ${
                          item.current ? 'text-[18px]' : 'text-[15px]'
                        }`}
                      >
                        {item.company}
                      </span>
                      {item.current ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-300/90">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                          Current
                        </span>
                      ) : null}
                      <span className="font-mono text-[12px] tracking-tight text-white/40">
                        {item.role} · {dates}
                      </span>
                    </div>
                    <p
                      className={`mt-1.5 max-w-2xl text-[14px] leading-relaxed ${
                        item.current ? 'text-white/70' : 'text-white/50'
                      }`}
                    >
                      {item.impact}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function LinkedInIcon({ size = 20, strokeWidth = 1.5 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-12h4v2" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function MiniFooter() {
  return (
    <footer id="contact" className="contact-section scroll-mt-20 border-t border-white/[0.06]">
      <ParticleCanvas />
      <div className="contact-section__content mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
        <Reveal>
          <h2 className="contact-headline max-w-[18ch] text-balance font-display text-h2 font-semibold text-white">
            {footer.cta}
          </h2>
          <p className="mt-4 max-w-[42ch] text-balance text-sm leading-relaxed text-white/60">{footer.line}</p>
          <div className="contact-links-row">
            <a
              href="mailto:andreasanzrojas@gmail.com"
              className="contact-icon-link"
              aria-label="Email"
            >
              <Mail size={22} strokeWidth={1.5} aria-hidden />
            </a>
            <a
              href="https://linkedin.com/in/andrea-sanz-rojas-66329a106"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon-link"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={22} strokeWidth={1.5} />
            </a>
            <a
              href="/Andrea-Sanz-Rojas-Resume.pdf?v=20260829"
              download="Andrea-Sanz-Rojas-Resume.pdf"
              className="contact-icon-link cv-link"
              aria-label="Download CV"
            >
              <Download size={20} strokeWidth={1.5} aria-hidden />
              <span className="cv-label">CV</span>
            </a>
          </div>
          <p className="contact-name-stamp font-display" aria-hidden>
            <span className="contact-name-stamp__line">Andrea</span>
            <span className="contact-name-stamp__line">Sanz Rojas</span>
          </p>
        </Reveal>
      </div>
    </footer>
  )
}

export default function OSHome() {
  const { navigate } = useRouter()
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
        { id: 'nav-contact', label: 'Get in touch', glyph: '✉', hint: 'Contact', keywords: 'contact hire reach', run: () => navigate('/contact') },
        { id: 'nav-email', label: 'Email Andrea', glyph: '@', hint: 'mailto', keywords: 'email mail message', run: () => { window.location.href = 'mailto:andreasanzrojas@gmail.com' } },
        { id: 'nav-resume', label: 'Download résumé', glyph: '⤓', hint: 'PDF', keywords: 'resume cv', run: () => {
          const a = document.createElement('a')
          a.href = '/Andrea-Sanz-Rojas-Resume.pdf?v=20260829'
          a.download = 'Andrea-Sanz-Rojas-Resume.pdf'
          document.body.appendChild(a)
          a.click()
          a.remove()
        } },
      ],
    },
  ]

  return (
    <div className="os-home relative isolate min-h-screen overflow-x-hidden bg-[#08080A] font-sans text-white selection:bg-indigo-500/30">
      <SEO
        title="Senior Product Designer"
        description="Andrea Sanz Rojas — Senior Product Designer with 8+ years in fintech, banking, and global digital products. Huge (Google Education), Mastercard, Banco de Bogotá."
        image="/og-default.png"
        url="https://andreasanzrojas.com"
      />
      <AmbientGlow />
      <TopBar onOpen={() => setPaletteOpen(true)} />
      <main id="main">
        <Hero />
        <Credibility />
        <Featured focus={focus} />
        <HowIThink />
        <CoreSkills />
        <Experience />
      </main>
      <MiniFooter />
      <CommandPill onOpen={() => setPaletteOpen(true)} />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} groups={groups} />
    </div>
  )
}
