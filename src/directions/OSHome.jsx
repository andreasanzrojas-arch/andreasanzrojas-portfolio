import { useEffect, useRef, useState } from 'react'
import { hero, marquee, credibility, featured, capabilities, principles, stats, currently, footer, about } from '../data'
import Reveal from '../components/Reveal'
import { useTilt, usePointerArea } from '../lib/motion'
import Artifact from '../components/artifacts'
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

function Kbd({ children }) {
  return (
    <span className="inline-flex h-5 min-w-[20px] items-center justify-center rounded border border-white/15 bg-white/5 px-1.5 font-mono text-[11px] text-white/60">
      {children}
    </span>
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

function MarqueeStrip() {
  const track = [...marquee, ...marquee]
  return (
    <div
      aria-hidden
      className="marquee-mask relative left-1/2 mt-6 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden py-4 md:mt-8"
    >
      <div className="marquee-track flex w-max gap-4">
        {track.map((src, i) => (
          <img
            key={`${src}-${i}`}
            src={src}
            alt=""
            className="h-[160px] w-[280px] shrink-0 rounded-lg object-cover opacity-75"
            draggable={false}
            loading="eager"
          />
        ))}
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
          className="ambient-drift absolute left-1/2 top-[-12%] h-[460px] w-[820px] -translate-x-1/2 opacity-55"
          style={{ background: 'radial-gradient(closest-side, rgba(120,90,255,0.24), transparent)' }}
        />
        <div
          className="ambient-drift-alt absolute right-[6%] top-[26%] h-[280px] w-[420px] opacity-45"
          style={{ background: 'radial-gradient(closest-side, rgba(40,180,200,0.14), transparent)' }}
        />
        <div
          className="absolute inset-0 opacity-70 transition-opacity duration-500"
          style={{
            background:
              'radial-gradient(340px circle at var(--mx,50%) var(--my,30%), rgba(150,120,255,0.10), transparent 65%)',
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
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-2.5 pr-3.5 text-[12px] tracking-tight text-white/65">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              {hero.eyebrow}
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mx-auto mt-6 text-center font-display text-display font-semibold text-white">
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
          <div className="mt-6 flex items-center justify-center gap-3">
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
          <div className="flex flex-wrap items-center justify-start gap-x-7 gap-y-3">
            {credibility.brands.map((b, i) => (
              <span key={b} className="flex items-center gap-7">
                <span className="font-display text-[15px] font-medium tracking-tight text-white/75 transition-colors duration-300 hover:text-white">
                  {b}
                </span>
                {i < credibility.brands.length - 1 && (
                  <span className="hidden h-3.5 w-px bg-white/12 md:inline-block" />
                )}
              </span>
            ))}
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
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      style={{
        background:
          'radial-gradient(320px circle at var(--gx,30%) var(--gy,0%), rgba(140,110,255,0.13), transparent 70%)',
      }}
    />
  )
}

function CardCta({ item }) {
  if (!item.cta) return null
  return (
    <Link
      to={item.cta.href}
      className="relative z-30 mt-4 inline-block text-left text-body-sm text-white/60 transition-colors duration-300 hover:text-white"
    >
      {item.cta.label}
    </Link>
  )
}

function CardMeta({ item }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[11px] tabular-nums text-white/35">{item.index}</span>
      <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-white/50">
        {item.tag}
      </span>
    </div>
  )
}

function CardFooter({ item }) {
  return (
    <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/[0.07] pt-4">
      <span className="text-meta text-white/50">{item.company}</span>
      <span className="whitespace-nowrap font-display text-[15px] font-semibold tabular-nums text-white">
        {item.metric}
      </span>
    </div>
  )
}

function useCardState(pos, focus) {
  const focused = Array.isArray(focus) && focus.includes(pos)
  const dimmed = Array.isArray(focus) && !focused
  return {
    className: `${dimmed ? 'opacity-40' : 'opacity-100'} ${focused ? 'border-indigo-400/60' : 'border-white/[0.08]'}`,
    style: focused
      ? { boxShadow: '0 0 0 1px rgba(150,120,255,0.55), 0 28px 56px -22px rgba(0,0,0,0.75)' }
      : undefined,
  }
}

const CARD_BASE =
  'tilt group relative overflow-hidden rounded-2xl border bg-gradient-to-b shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-white/[0.16] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_28px_56px_-22px_rgba(0,0,0,0.75)]'
// Standard cards vs. the featured card (1–2 steps lighter to reinforce hierarchy).
const CARD_SURFACE = 'from-white/[0.045] to-white/[0.015]'
const CARD_SURFACE_FEATURED = 'from-white/[0.07] to-white/[0.03]'

// Project photo when available; falls back to SVG artifact if missing or loading.
function CardVisual({ item }) {
  const [useArtifact, setUseArtifact] = useState(!item.image)
  const [imgReady, setImgReady] = useState(false)

  if (useArtifact) {
    return <Artifact index={item.index} variant="os" />
  }

  return (
    <>
      {!imgReady && <Artifact index={item.index} variant="os" />}
      <img
        src={item.image}
        alt=""
        className={
          imgReady
            ? 'block w-full max-h-[280px] object-cover object-top'
            : 'hidden'
        }
        onLoad={() => setImgReady(true)}
        onError={() => setUseArtifact(true)}
      />
    </>
  )
}

function FeaturedWorkCard({ item, pos, focus }) {
  const tiltRef = useTilt({ max: 4, lift: -5 })
  const state = useCardState(pos, focus)
  return (
    <Reveal variant="scale">
      <article ref={tiltRef} className={`${CARD_BASE} ${CARD_SURFACE_FEATURED} p-5 md:p-7 ${state.className}`} style={state.style}>
        <CardChrome item={item} />
        <div className="relative grid items-center gap-7 md:grid-cols-2 md:gap-10">
          <div
            className="tilt-layer order-1 overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.02] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)] md:order-2"
            style={{ '--tz': '22px' }}
          >
            <CardVisual item={item} />
          </div>
          <div className="order-2 md:order-1">
            <CardMeta item={item} />
            <h3 className="mt-5 font-display text-h2 font-semibold text-white">{item.title}</h3>
            <p className="mt-3 max-w-prose text-body text-white/60">{item.framing}</p>
            <CardFooter item={item} />
            <CardCta item={item} />
          </div>
        </div>
      </article>
    </Reveal>
  )
}

function WorkCard({ item, pos, focus }) {
  const tiltRef = useTilt({ max: 4, lift: -5 })
  const state = useCardState(pos, focus)
  return (
    <Reveal variant="scale">
      <article ref={tiltRef} className={`${CARD_BASE} ${CARD_SURFACE} p-5 ${state.className}`} style={state.style}>
        <CardChrome item={item} />
        <div className="relative">
          <div className="mb-5">
            <CardMeta item={item} />
          </div>

          {/* Visual proof artifact — lifted on Z for depth */}
          <div className="tilt-layer mb-6 overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.02] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)]" style={{ '--tz': '22px' }}>
            <CardVisual item={item} />
          </div>

          <h3 className="font-display text-h3 font-medium text-white">{item.title}</h3>
          <p className="mt-2.5 text-body-sm text-white/55">{item.framing}</p>

          <CardFooter item={item} />
          <CardCta item={item} />
        </div>
      </article>
    </Reveal>
  )
}

function Featured({ focus }) {
  const primary = featured.slice(0, 3)
  const additional = featured[3]
  return (
    <section id="selected-work" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-28 md:px-10 md:py-36">
      <Reveal>
        <div className="mb-10 flex items-end justify-between md:mb-14">
          <h2 className="font-display text-h2 font-semibold text-white">Selected work — 2021–2025</h2>
          <span className="font-mono text-meta tabular-nums text-white/30">03 / 03</span>
        </div>
      </Reveal>
      <div className="space-y-5 md:space-y-6">
        <FeaturedWorkCard item={primary[0]} pos={0} focus={focus} />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {primary.slice(1).map((item, i) => (
            <WorkCard key={item.index} item={item} pos={i + 1} focus={focus} />
          ))}
        </div>
      </div>

      {additional && (
        <div className="mt-16 md:mt-20">
          <Reveal>
            <h3 className="mb-8 font-mono text-eyebrow uppercase text-white/35">Additional work</h3>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <WorkCard item={additional} pos={3} focus={focus} />
          </div>
        </div>
      )}
    </section>
  )
}

function AboutTeaser() {
  return (
    <section className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
        <Reveal>
          <h2 className="max-w-4xl font-display text-h2 font-semibold text-white">{about.headline}</h2>
          <a
            href={about.cta.href}
            className="mt-6 inline-block text-body-sm text-white/60 transition-colors duration-300 hover:text-white"
          >
            {about.cta.label}
          </a>
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
      className={`flip-card group h-[300px] w-full ${border} ${flipped ? 'flipped' : ''}`}
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
          <div className="mb-10 flex items-end justify-between md:mb-14">
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
                <div className="font-display text-display-sm font-semibold tabular-nums text-white">
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
          <div className="mb-10 flex items-end justify-between md:mb-14">
            <h2 className="font-display text-h2 font-semibold text-white">How I work</h2>
            <span className="font-mono text-meta tabular-nums text-white/30">03</span>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {capabilities.map((c, i) => (
            <Reveal key={c.label} variant="scale" delay={i * 80}>
              <FlipCard
                number={String(i + 1).padStart(2, '0')}
                title={c.label}
                description={c.body}
                variant="work"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
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
          <p className="mt-4 max-w-[40ch] text-lead text-white/55">{footer.line}</p>
          <nav className="mt-8 flex flex-wrap items-center text-[14px] text-white/70">
            {footer.links.map((l, i) => (
              <span key={l.label} className="flex items-center">
                {i > 0 && <span className="mx-3 text-white/20">·</span>}
                <a href={l.href} className="transition-colors duration-300 hover:text-white">
                  {l.label}
                </a>
              </span>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-2">
            {footer.contact.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="text-[15px] text-white/80 transition-colors duration-300 hover:text-white md:text-base"
              >
                {c.label}
              </a>
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
        { id: 'nav-contact', label: 'Get in touch', glyph: '✉', hint: 'Contact', keywords: 'contact hire reach', run: () => scrollSel('#contact') },
        { id: 'nav-email', label: 'Email Andrea', glyph: '@', hint: 'mailto', keywords: 'email mail message', run: () => { window.location.href = 'mailto:andreasanzrojas@gmail.com' } },
        { id: 'nav-resume', label: 'Download résumé', glyph: '⤓', hint: 'PDF', keywords: 'resume cv', run: () => {} },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#08080A] font-sans text-white selection:bg-indigo-500/30">
      <TopBar onOpen={() => setPaletteOpen(true)} />
      <Hero />
      <Credibility />
      <StatsStrip />
      <AboutTeaser />
      <Featured focus={focus} />
      <HowIThink />
      <Capabilities />
      <MiniFooter />
      <CommandPill onOpen={() => setPaletteOpen(true)} />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} groups={groups} />
    </div>
  )
}
