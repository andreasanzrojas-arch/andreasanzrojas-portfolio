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
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[13px] tracking-tight text-white/75">
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

function StudyImage({ src, alt, className = 'aspect-[16/9] w-full' }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) {
    return <ImagePlaceholder label="Image" className={className} />
  }
  return (
    <ProjectImage
      src={src}
      alt={alt}
      className={`rounded-xl border border-white/[0.08] shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)] ${className}`}
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
          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-indigo-300/60" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function ImageGrid({ images, className = '', imageClassName = 'aspect-[9/16] w-full' }) {
  if (!images?.length) return null
  return (
    <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${className}`}>
      {images.map((image) => (
        <StudyImage
          key={image.src}
          src={image.src}
          alt={image.alt}
          className={image.className || imageClassName}
        />
      ))}
    </div>
  )
}

function Decision({ num, title, children }) {
  return (
    <article className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.045] to-white/[0.015] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] md:p-7">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[13px] tabular-nums text-indigo-300/70">{num}</span>
        <h3 className="font-display text-h3 font-medium text-white">{title}</h3>
      </div>
      <p className="mt-3 text-body text-white/60">{children}</p>
    </article>
  )
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

function NextProject({ title, href }) {
  if (!title || !href) return null
  return (
    <section className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
        <Link
          to={href}
          className="group block rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.015] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-colors hover:border-white/[0.16] md:p-8"
        >
          <span className="font-mono text-eyebrow uppercase text-white/35">Next</span>
          <div className="mt-3 flex items-center justify-between gap-4">
            <span className="font-display text-h3 font-medium text-white">{title}</span>
            <span className="text-white/40 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
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
  signal,
  influence,
  influenceBullets = [],
  researchImages = [],
  artifact,
  decisions = [],
  decisionImages = [],
  iteration,
  galleryImages = [],
  outcomes = [],
  prototype,
  artifactImages = true,
  nextProject,
}) {
  const showArtifactPlaceholders =
    artifactImages && !decisionImages.length && !galleryImages.length && !decisions.length

  return (
    <div className="min-h-screen bg-[#08080A] font-sans text-white selection:bg-indigo-500/30">
      <BackBar />

      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]" />
        <div
          className="ambient-drift pointer-events-none absolute left-1/2 top-[-12%] h-[420px] w-[760px] -translate-x-1/2 opacity-50"
          style={{ background: 'radial-gradient(closest-side, rgba(120,90,255,0.22), transparent)' }}
        />
        <div className="relative mx-auto max-w-4xl px-6 pt-16 pb-12 md:px-10 md:pt-24 md:pb-16">
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
            <h1 className="mt-6 max-w-[20ch] text-balance font-display text-display font-semibold text-white">
              {title}
            </h1>
          </Reveal>
          {summary && (
            <Reveal delay={200}>
              <p className="mt-7 max-w-[48ch] text-balance text-lead text-white/60">{summary}</p>
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
        </div>
        <div className="relative mx-auto max-w-4xl px-6 pb-16 md:px-10 md:pb-20">
          <Reveal delay={120} variant="scale">
            {heroVariant === 'monoma' ? (
              <MonomaHeroPhone alt={heroAlt} />
            ) : (
              <HeroImage src={heroImage} alt={heroAlt} />
            )}
          </Reveal>
        </div>
      </section>

      <Section label="Context">
        <SectionBody content={context} />
      </Section>

      <Section label="Signal">
        <SectionBody content={signal} />
      </Section>

      <Section label="Influence">
        <SectionBody content={influence} />
        <BulletList items={influenceBullets} />
        {researchImages.length > 0 && (
          <div className="mt-8">
            <ImageGrid images={researchImages} imageClassName="aspect-[16/9] w-full" />
          </div>
        )}
      </Section>

      <Section label="Artifact">
        {artifact && <SectionBody content={artifact} />}
        {decisions.length > 0 && (
          <div className="mt-6 space-y-4">
            {decisions.map((decision) => (
              <Decision key={decision.num} num={decision.num} title={decision.title}>
                {decision.body}
              </Decision>
            ))}
          </div>
        )}
        {decisionImages.length > 0 && (
          <div className="mt-8">
            <ImageGrid images={decisionImages} />
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
              <ImageGrid images={iteration.images} className="mt-6 sm:grid-cols-2" />
            )}
          </div>
        )}
        {galleryImages.length > 0 && (
          <div className="mt-8">
            <ImageGrid
              images={galleryImages}
              className="sm:grid-cols-2 lg:grid-cols-3"
              imageClassName="aspect-[9/16] w-full"
            />
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

      <NextProject title={nextProject?.title} href={nextProject?.href} />
    </div>
  )
}
