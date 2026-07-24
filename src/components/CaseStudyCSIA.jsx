import { useState } from 'react'
import Reveal from './Reveal'
import { Link } from '../lib/router'
import ProjectImage from './ProjectImage'

export function BackBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#08080A]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-4xl items-center px-6 md:px-10">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-[13px] text-white/55 transition-colors hover:text-white"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-0.5">←</span>
          Work
        </Link>
      </div>
    </header>
  )
}

function SectionLabel({ children }) {
  return (
    <span className="font-mono text-eyebrow uppercase text-indigo-300/70">{children}</span>
  )
}

function Section({ label, children, className = '' }) {
  return (
    <section className={`border-t border-white/[0.06] ${className}`}>
      <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-[140px_1fr] md:gap-10">
            <div className="md:pt-1">
              <SectionLabel>{label}</SectionLabel>
            </div>
            <div>{children}</div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Chip({ children }) {
  return (
    <span className="inline-flex max-w-full items-center rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-left text-[13px] leading-snug tracking-tight text-white/75 whitespace-normal">
      {children}
    </span>
  )
}

function ImagePlaceholder({ label, className = '' }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-b from-white/[0.045] to-white/[0.01] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ${className}`}
    >
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-40" />
      <span className="relative font-mono text-meta uppercase tracking-[0.14em] text-white/30">
        {label}
      </span>
    </div>
  )
}

function StudyImage({ src, alt, className = 'aspect-[16/9] w-full', variant, imgClassName }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) {
    return <ImagePlaceholder label="Image" className={className} />
  }
  return (
    <ProjectImage
      src={src}
      alt={alt}
      variant={variant}
      className={`rounded-xl border border-white/[0.08] shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)] ${className}`}
      imgClassName={imgClassName}
      style={{ borderRadius: '12px' }}
      onError={() => setFailed(true)}
    />
  )
}

function HeroImage({ src, alt = '' }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) {
    return <ImagePlaceholder label="Hero image" className="aspect-[16/9] w-full" />
  }
  return (
    <ProjectImage
      src={src}
      alt={alt}
      className="aspect-[16/9] w-full rounded-xl border border-white/[0.08] shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]"
      style={{ borderRadius: '12px' }}
      onError={() => setFailed(true)}
    />
  )
}

function MonomaHeroPhone({ alt = 'Monoma Banco Nacional' }) {
  return (
    <div className="cs-hero-monoma">
      <div className="cs-hero-halo" aria-hidden />
      <div className="cs-hero-phone">
        <img src="/assets/projects/monoma/android-1.png" alt={alt} />
      </div>
    </div>
  )
}

function TravelAdventuresHeroPhone({ alt = 'Travel Adventures mobile app' }) {
  return (
    <div className="cs-hero-travel-adventures">
      <div className="cs-hero-halo" aria-hidden />
      <div className="cs-hero-phone">
        <img
          src="/assets/projects/travel-adventures/ta-d01-days.png"
          alt={alt}
        />
      </div>
    </div>
  )
}

function Pending() {
  return (
    <p className="rounded-xl border border-dashed border-white/15 bg-white/[0.02] px-5 py-4 font-mono text-meta italic text-white/40">
      PENDIENTE — Andrea to fill
    </p>
  )
}

function SectionBody({ content, children }) {
  if (children) {
    return <div className="space-y-5 text-body text-white/70">{children}</div>
  }
  if (!content || (typeof content === 'string' && content.includes('PENDIENTE'))) return <Pending />
  return <p className="text-body text-white/70 md:text-lead md:text-white/70">{content}</p>
}

function BulletList({ items }) {
  if (!items?.length) return null
  return (
    <ul className="mt-5 space-y-3 text-body text-white/70">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-[0.35em] shrink-0 font-mono text-[13px] text-white/30">—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function ImageGrid({ images, className = '', imageClassName = 'aspect-[9/16] w-full', variant }) {
  if (!images?.length) return null
  return (
    <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${className}`}>
      {images.map((image) => (
        <StudyImage
          key={image.src}
          src={image.src}
          alt={image.alt}
          variant={variant}
          className={image.className || imageClassName}
        />
      ))}
    </div>
  )
}

function PhoneInline({ src, alt }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="flex w-[148px] shrink-0 items-center justify-center border-r border-white/[0.06] bg-[#08080A] p-4">
      <div className="relative w-full">
        {/* Phone shell */}
        <div className="relative overflow-hidden rounded-[2rem] border-[5px] border-white/[0.12] bg-black shadow-[0_20px_40px_-10px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.08)]">
          {/* Camera pill */}
          <div className="absolute left-1/2 top-0 z-10 h-[14px] w-[44px] -translate-x-1/2 rounded-b-lg bg-black" />
          {/* Screen */}
          <div className="aspect-[9/19.5] overflow-hidden">
            {!src || failed ? (
              <div className="flex h-full w-full items-center justify-center bg-white/[0.04]">
                <span className="font-mono text-[8px] uppercase tracking-widest text-white/20">Screen</span>
              </div>
            ) : (
              <img
                src={src}
                alt={alt}
                className="h-full w-full object-cover object-top"
                onError={() => setFailed(true)}
              />
            )}
          </div>
        </div>
        {/* Reflection */}
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/[0.04] to-transparent" />
      </div>
    </div>
  )
}

function PhoneFloat({ src, alt }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="relative w-[120px] shrink-0 self-center md:w-[128px]">
      {/* Phone shell */}
      <div className="relative overflow-hidden rounded-[2.2rem] border-[5px] border-white/[0.12] bg-black shadow-[0_32px_64px_-16px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.08)]">
        {/* Camera pill */}
        <div className="absolute left-1/2 top-0 z-10 h-[16px] w-[52px] -translate-x-1/2 rounded-b-xl bg-black" />
        {/* Screen */}
        <div className="aspect-[9/19.5] overflow-hidden">
          {!src || failed ? (
            <div className="flex h-full w-full items-center justify-center bg-white/[0.04]">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">Screen</span>
            </div>
          ) : (
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-cover object-top"
              onError={() => setFailed(true)}
            />
          )}
        </div>
      </div>
      {/* Reflection */}
      <div className="pointer-events-none absolute inset-0 rounded-[2.2rem] bg-gradient-to-b from-white/[0.04] to-transparent" />
    </div>
  )
}

function PhoneFrame({ src, alt }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="flex justify-center border-t border-white/[0.06] bg-[#08080A] py-10">
      <div className="relative w-[160px] md:w-[168px]">
        {/* Phone shell */}
        <div className="relative overflow-hidden rounded-[2.2rem] border-[5px] border-white/[0.12] bg-black shadow-[0_32px_64px_-16px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.08)]">
          {/* Camera pill */}
          <div className="absolute left-1/2 top-0 z-10 h-[16px] w-[52px] -translate-x-1/2 rounded-b-xl bg-black" />
          {/* Screen */}
          <div className="aspect-[9/19.5] overflow-hidden">
            {!src || failed ? (
              <div className="flex h-full w-full items-center justify-center bg-white/[0.04]">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">Screen</span>
              </div>
            ) : (
              <img
                src={src}
                alt={alt}
                className="h-full w-full object-cover object-top"
                onError={() => setFailed(true)}
              />
            )}
          </div>
        </div>
        {/* Reflection */}
        <div className="pointer-events-none absolute inset-0 rounded-[2.2rem] bg-gradient-to-b from-white/[0.04] to-transparent" />
      </div>
    </div>
  )
}

function DecisionFrame({ frame, size = 'hero', fill = false }) {
  // Full-frame only: never crop with object-cover / fixed phone aspect.
  // Support stays narrower; heroes and equal peers fill their grid cells.
  const widthClass = fill
    ? 'w-full'
    : size === 'equal'
      ? 'w-[min(48%,380px)] sm:w-[340px] md:w-[380px]'
      : size === 'support'
        ? 'w-[min(32%,140px)] sm:w-[130px] md:w-[140px]'
        : 'w-[min(47%,360px)] sm:w-[320px] md:w-[360px]'

  return (
    <figure className={`flex flex-col items-center gap-2 ${widthClass}`}>
      <div className="w-full overflow-hidden rounded-xl border border-white/[0.08] bg-black/25 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.8)]">
        <img
          src={frame.src}
          alt={frame.alt}
          className="h-auto w-full object-contain"
        />
      </div>
      {frame.caption && (
        <figcaption className="text-center font-mono text-[10px] uppercase tracking-widest text-white/35">
          {frame.caption}
        </figcaption>
      )}
    </figure>
  )
}

function DecisionMedia({ imageList, layout = 'default', mediaSize = 'default' }) {
  if (!imageList.length) return null

  if (layout === 'hero-pair-support' && imageList.length >= 3) {
    const [a, b, support] = imageList
    return (
      <div className="border-t border-white/[0.06] bg-black/10 px-3 py-4 sm:px-4 md:px-5 md:py-5">
        <div className="grid grid-cols-2 items-end gap-2.5 sm:gap-4 md:gap-5">
          <DecisionFrame frame={a} size="hero" fill />
          <DecisionFrame frame={b} size="hero" fill />
        </div>
        <div className="mt-4 flex justify-center md:mt-5">
          <DecisionFrame frame={support} size="support" />
        </div>
      </div>
    )
  }

  if (layout === 'equal-pair' && imageList.length >= 2) {
    const [left, right] = imageList
    return (
      <div className="border-t border-white/[0.06] bg-black/10 px-3 py-4 sm:px-4 md:px-5 md:py-5">
        <div className="grid grid-cols-2 items-start gap-2.5 sm:gap-4 md:gap-6">
          <DecisionFrame frame={left} size="equal" fill />
          <DecisionFrame frame={right} size="equal" fill />
        </div>
      </div>
    )
  }

  // Legacy multi-frame row (unchanged for other decisions)
  const largeMedia = mediaSize === 'lg' || mediaSize === 'xl'
  const xLargeMedia = mediaSize === 'xl'
  const figureWidth = xLargeMedia
    ? 'w-[min(48%,240px)] sm:w-[240px] md:w-[290px]'
    : largeMedia
      ? imageList.length === 2
        ? 'w-[min(48%,230px)] sm:w-[230px] md:w-[260px]'
        : 'w-[min(48%,220px)] sm:w-[230px] md:w-[280px]'
      : imageList.length >= 3
        ? 'w-[min(46%,180px)] sm:w-[168px] md:w-[200px]'
        : 'w-[min(46%,200px)] sm:w-[210px] md:w-[240px]'
  const mediaMaxHeight = xLargeMedia ? 580 : largeMedia ? 560 : null

  return (
    <div
      className={`flex flex-wrap items-end justify-center gap-3 border-t border-white/[0.06] px-3 sm:gap-4 sm:px-5 md:gap-5 md:px-6 ${
        largeMedia ? 'bg-black/20 py-5' : 'bg-black/40 py-6'
      }`}
    >
      {imageList.map((frame) => (
        <figure key={frame.src} className={`flex flex-col items-center gap-2 ${figureWidth}`}>
          <div
            className={`flex w-full items-center justify-center overflow-hidden rounded-xl border border-white/[0.08] shadow-[0_12px_40px_-16px_rgba(0,0,0,0.8)] ${
              largeMedia ? 'bg-transparent' : 'bg-black/30'
            }`}
            style={
              largeMedia
                ? { maxHeight: `${mediaMaxHeight}px` }
                : { height: imageList.length >= 3 ? '420px' : '520px' }
            }
          >
            <img
              src={frame.src}
              alt={frame.alt}
              className={
                largeMedia ? 'h-auto w-full object-contain' : 'max-h-full max-w-full object-contain'
              }
              style={largeMedia ? { maxHeight: `${mediaMaxHeight}px` } : undefined}
            />
          </div>
          {frame.caption && (
            <figcaption className="text-center font-mono text-[10px] uppercase tracking-widest text-white/35">
              {frame.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  )
}

function Decision({ num, title, img, imgs, href, children, variant = 'float', mediaSize = 'default', mediaLayout = 'default' }) {
  const imageList = imgs?.length ? imgs : img ? [img] : []
  const multi = imageList.length > 1

  const textBlock = (
    <>
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[13px] tabular-nums text-indigo-300/70">{num}</span>
        <h3 className="font-display text-h3 font-medium text-white">{title}</h3>
        {href && (
          <span className="ml-auto font-mono text-[11px] uppercase tracking-wider text-indigo-300/50">
            View ↗
          </span>
        )}
      </div>
      <p className="mt-3 text-body text-white/60">{children}</p>
    </>
  )

  const media =
    imageList.length === 0 ? null : multi ? (
      <DecisionMedia imageList={imageList} layout={mediaLayout} mediaSize={mediaSize} />
    ) : variant === 'float' ? null : (
      <div className="flex items-center justify-center rounded-b-2xl border-t border-white/[0.06] bg-black py-6">
        <img
          src={imageList[0].src}
          alt={imageList[0].alt}
          className="w-auto rounded-xl object-contain"
          style={{ maxHeight: '520px', maxWidth: '260px' }}
        />
      </div>
    )

  const card =
    variant === 'float' && !multi ? (
      <article
        className={`flex-1 overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.045] to-white/[0.015] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] md:p-7 ${
          href ? 'cursor-pointer transition-colors hover:border-indigo-300/30' : ''
        }`}
      >
        {textBlock}
      </article>
    ) : (
      <article
        className={`overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.045] to-white/[0.015] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ${
          href ? 'cursor-pointer transition-colors hover:border-indigo-300/30' : ''
        }`}
      >
        <div className="p-6 md:p-7">{textBlock}</div>
        {media}
      </article>
    )

  const inner =
    imageList.length === 1 && variant === 'float' ? (
      <div className="flex items-center gap-6">
        <PhoneFloat src={imageList[0].src} alt={imageList[0].alt} />
        {card}
      </div>
    ) : (
      card
    )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="group block">
        {inner}
      </a>
    )
  }
  return inner
}

function Outcome({ children }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
      <span className="text-body text-white/70">{children}</span>
    </div>
  )
}

function PrototypeLink({ href, label = 'View prototype →' }) {
  if (!href) {
    return (
      <p className="font-mono text-meta uppercase tracking-[0.12em] text-white/45">
        Prototype available on request.
      </p>
    )
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 font-mono text-meta uppercase tracking-[0.12em] text-indigo-300/80 transition-colors hover:text-indigo-200"
    >
      {label}
    </a>
  )
}

function NextProject({ title, href, number, client }) {
  if (!title || !href) return null
  return (
    <section className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
        <Link
          to={href}
          className="group block rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.015] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-colors hover:border-white/[0.16] md:p-8"
        >
          <span className="font-mono text-eyebrow uppercase text-white/35">Next</span>
          {number && (
            <p className="mt-3 font-mono text-[11px] tracking-widest text-white/30 uppercase">{number}</p>
          )}
          {client && (
            <p className="mt-1 text-[13px] font-medium text-white/40 uppercase tracking-wider">{client}</p>
          )}
          <div className="mt-3 flex items-center justify-between gap-4">
            <span className="font-display text-h3 font-medium text-white">{title}</span>
            <span className="shrink-0 text-white/40 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default function CaseStudyCSIA({
  tag,
  title,
  summary,
  heroImage,
  heroAlt = '',
  heroVariant,
  client,
  clientDisclaimer,
  role,
  chips = [],
  context,
  myRole = '',
  signal,
  signalImages = [],
  influence,
  influenceBullets = [],
  researchImages = [],
  artifact,
  decisions = [],
  decisionImages = [],
  iteration,
  galleryImages = null,
  outcomes = [],
  prototype,
  artifactImages = true,
  decisionVariant = 'grid',
  reflection,
  nextProject,
  heroAfter,
}) {
  const showArtifactPlaceholders =
    artifactImages && !decisionImages.length && !(galleryImages?.length) && !decisions.length

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#08080A] font-sans text-white selection:bg-indigo-500/30">
      <BackBar />

      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]" />
        <div
          className="ambient-drift pointer-events-none absolute left-1/2 top-[-12%] h-[420px] w-[760px] -translate-x-1/2 opacity-50"
          style={{ background: 'radial-gradient(closest-side, rgba(120,90,255,0.22), transparent)' }}
        />
        <div className="relative mx-auto max-w-4xl px-6 pt-10 pb-10 sm:pt-16 sm:pb-12 md:px-10 md:pt-24 md:pb-16">
          <Reveal>
            <SectionLabel>{tag}</SectionLabel>
          </Reveal>
          {client && (
            <Reveal delay={50}>
              <p className="mt-4 text-body text-white/55">
                {client}
                {clientDisclaimer && (
                  <span className="mt-1 block text-[13px] text-white/35">{clientDisclaimer}</span>
                )}
              </p>
            </Reveal>
          )}
          <Reveal delay={100}>
            <h1 className="mt-6 max-w-full sm:max-w-[20ch] text-balance font-display text-display font-semibold text-white">
              {title}
            </h1>
          </Reveal>
          {summary && (
            <Reveal delay={200}>
              <p className="mt-7 max-w-full sm:max-w-[48ch] text-balance text-lead text-white/60">{summary}</p>
            </Reveal>
          )}
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              <Chip>{role}</Chip>
              {chips.map((chip) => (
                <Chip key={chip}>{chip}</Chip>
              ))}
            </div>
          </Reveal>
          {prototype && (
            <Reveal delay={400}>
              <div className="mt-6">
                <a
                  href={prototype}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition-all hover:bg-white/90 hover:scale-[1.02]"
                >
                  View Prototype
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>
            </Reveal>
          )}
        </div>
        <div className="relative mx-auto max-w-4xl px-6 pb-16 md:px-10 md:pb-20">
          <Reveal delay={120} variant="scale">
            {heroVariant === 'monoma' ? (
              <MonomaHeroPhone alt={heroAlt} />
            ) : heroVariant === 'travel-adventures' ? (
              <TravelAdventuresHeroPhone alt={heroAlt} />
            ) : (
              <HeroImage src={heroImage} alt={heroAlt} />
            )}
          </Reveal>
        </div>
      </section>

      {heroAfter}

      <Section label="Context">
        <SectionBody content={context} />
      </Section>

      {myRole && (
        <Section label="My Role">
          <SectionBody content={myRole} />
        </Section>
      )}

      <Section label="Signal">
        <SectionBody content={signal} />
        {signalImages.length > 0 && (
          <div className="mt-8">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-white/30">
              Before — documented in UX audit
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {signalImages.map((img) => (
                <div key={img.src} className="space-y-2">
                  <StudyImage
                    src={img.src}
                    alt={img.alt}
                    className="aspect-[16/9] w-full"
                    variant="screen"
                  />
                  {img.label && (
                    <p className="font-mono text-[11px] text-white/35">{img.label}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </Section>

      <Section label="Influence">
        <SectionBody content={influence} />
        <BulletList items={influenceBullets} />
        {researchImages.length > 0 && (
          <div className="mt-8 cs-screen-wrap">
            <ImageGrid images={researchImages} imageClassName="aspect-[16/9] w-full" variant="screen" />
          </div>
        )}
      </Section>

      <Section label="Artifact">
        {artifact && <SectionBody content={artifact} />}
        {galleryImages && galleryImages.length > 0 && (
          <section className="mt-16 mb-0">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {galleryImages.map((img, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="overflow-hidden rounded-2xl bg-white/5">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  {img.caption && (
                    <p className="text-center font-mono text-[10px] uppercase tracking-widest text-white/30">
                      {img.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
        {decisions.length > 0 && decisionVariant === 'inline' && (
          <div className="mt-6 space-y-6">
            {decisions.map((decision, i) => {
              const img = decisionImages[i]
              const featured = decision.featured
              return (
                <Reveal key={decision.num}>
                  <div>
                    <article
                      className={`rounded-2xl border bg-gradient-to-b from-white/[0.045] to-white/[0.015] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ${
                        featured
                          ? 'border-indigo-300/35 ring-1 ring-indigo-300/20'
                          : 'border-white/[0.08]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4 px-6 pt-6 pb-4 md:px-7 md:pt-7">
                        <div className="flex items-baseline gap-3">
                          <span className="font-mono text-[13px] tabular-nums text-indigo-300/70">{decision.num}</span>
                          <h3 className="font-display text-h3 font-medium text-white">{decision.title}</h3>
                        </div>
                        {decision.href && (
                          <a
                            href={decision.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 font-mono text-[11px] uppercase tracking-widest text-indigo-300/60 transition-colors hover:text-indigo-200"
                          >
                            View ↗
                          </a>
                        )}
                      </div>
                      {img && (
                        <div className="border-t border-white/[0.06] bg-black/20 px-6 py-6 md:px-7">
                          <div
                            className={`mx-auto ${
                              featured ? 'max-w-[300px] sm:max-w-[320px]' : 'max-w-[240px] sm:max-w-[260px]'
                            }`}
                          >
                            <StudyImage
                              src={img.src}
                              alt={img.alt}
                              className="w-full"
                              imgClassName="h-auto w-full object-contain"
                              variant="screen"
                            />
                          </div>
                        </div>
                      )}
                      <p className="px-6 pb-6 pt-6 text-body text-white/60 md:px-7 md:pb-7">{decision.body}</p>
                    </article>
                  </div>
                </Reveal>
              )
            })}
          </div>
        )}
        {decisions.length > 0 && decisionVariant !== 'inline' && (
          <div className={`mt-6 grid grid-cols-1 ${decisionVariant === 'float' ? 'gap-6' : 'gap-8'}`}>
            {decisions.map((decision, i) => (
              <Decision
                key={decision.num}
                num={decision.num}
                title={decision.title}
                img={decision.img || decisionImages[i] || null}
                imgs={decision.imgs || null}
                href={decision.href || null}
                mediaSize={decision.mediaSize || 'default'}
                mediaLayout={decision.mediaLayout || 'default'}
                variant={decisionVariant === 'float' ? 'float' : 'inline'}
              >
                {decision.body}
              </Decision>
            ))}
          </div>
        )}
        {!decisions.length && decisionImages.length > 0 && (
          <div className="mt-8 cs-screen-wrap">
            <ImageGrid images={decisionImages} variant="screen" />
          </div>
        )}
        {iteration && (
          <div className="mt-10 space-y-5">
            {iteration.title && (
              <h3 className="font-display text-h3 font-medium text-white">{iteration.title}</h3>
            )}
            {iteration.body && <p className="text-body text-white/70">{iteration.body}</p>}
            <BulletList items={iteration.bullets} />
            {iteration.images?.length > 0 && (
              <ImageGrid
                images={iteration.images}
                className="mockup-grid case-mockup mt-6 sm:grid-cols-2"
                imageClassName="w-full"
                variant="screen"
              />
            )}
          </div>
        )}
        {showArtifactPlaceholders && (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <ImagePlaceholder label="Screen 1" className="aspect-[9/16]" />
            <ImagePlaceholder label="Screen 2" className="aspect-[9/16]" />
            <ImagePlaceholder label="Screen 3" className="aspect-[9/16]" />
          </div>
        )}
        {outcomes.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {outcomes.map((item) => (
              <Outcome key={item}>{item}</Outcome>
            ))}
          </div>
        )}
        {(prototype !== undefined || prototype === null) && (
          <div className="mt-10">
            <PrototypeLink href={prototype} />
          </div>
        )}
      </Section>

      {reflection && (
        <Section label="Reflection">
          <SectionBody content={reflection} />
        </Section>
      )}

      <NextProject
        title={nextProject?.title}
        href={nextProject?.href}
        number={nextProject?.number}
        client={nextProject?.client}
      />
    </div>
  )
}
