import { useState } from 'react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import ProjectImage from '../components/ProjectImage'
import { BackBar } from '../components/CaseStudyCSIA'
import { Link } from '../lib/router'

function SectionLabel({ children }) {
  return <span className="font-mono text-eyebrow uppercase text-indigo-300/70">{children}</span>
}

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[13px] tracking-tight text-white/75">
      {children}
    </span>
  )
}

function StudyImage({ src, alt, caption, className = 'aspect-[16/9] w-full' }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) {
    return (
      <div className={`relative flex items-center justify-center overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.03] ${className}`}>
        <span className="font-mono text-meta uppercase tracking-[0.14em] text-white/30">Image</span>
      </div>
    )
  }
  return (
    <figure className="space-y-3">
      <ProjectImage
        src={src}
        alt={alt}
        variant="screen"
        className={`rounded-xl border border-white/[0.08] shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)] ${className}`}
        style={{ borderRadius: '12px' }}
        onError={() => setFailed(true)}
      />
      {caption && <figcaption className="font-mono text-[11px] text-white/35">{caption}</figcaption>}
    </figure>
  )
}

function Section({ id, label, children, className = '' }) {
  return (
    <section id={id} className={`border-t border-white/[0.06] ${className}`}>
      <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-24">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-[140px_1fr] md:gap-10">
            <div className="md:pt-1">
              <SectionLabel>{label}</SectionLabel>
            </div>
            <div className="min-w-0">{children}</div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

const findings = [
  {
    title: 'Discoverability',
    body: '108+ apps with sort-only navigation. Users could reorder the catalog—but not narrow it.',
  },
  {
    title: 'Information architecture',
    body: 'The page was organized around what Google offered, not around who arrived or what they needed to do.',
  },
  {
    title: 'Content clarity',
    body: 'Integration labels were technically accurate and operationally opaque—so most visitors could not filter by them.',
  },
  {
    title: 'Navigation',
    body: 'No above-the-fold paths for different intents. Every stakeholder entered the same undifferentiated flow.',
  },
]

const decisions = [
  {
    num: '01',
    title: 'Lead with self-identification',
    body: 'Instead of opening into a catalog, the landing asks who you are and what you need. Parallel entry points reduce the search space before options appear.',
    img: {
      src: '/assets/projects/huge/screen-audiences.png',
      alt: 'App Hub entry points for administrators, educators, and developers',
      caption: 'Why it mattered — intent before inventory',
    },
  },
  {
    num: '02',
    title: 'Teach before filtering',
    body: 'Filters only work if people understand the labels. Explainer cards turn technical integration types into concrete outcomes—then the catalog becomes usable.',
    img: {
      src: '/assets/projects/huge/screen-integrations.png',
      alt: 'Integration type cards explaining Classroom Add-ons, SIS, and licensing',
      caption: 'Why it mattered — comprehension before action',
    },
  },
  {
    num: '03',
    title: 'Pair filters with editorial discovery',
    body: 'Filters assume intent. Many visitors arrive without it. Editorial curation sits beside the taxonomy so exploration and precision can coexist.',
    img: {
      src: '/assets/projects/huge/screen-trailblazing.png',
      alt: 'Discover trailblazing apps editorial curation section',
      caption: 'Why it mattered — a path when intent is still forming',
    },
  },
  {
    num: '04',
    title: 'Order taxonomy by decision priority',
    body: 'Integration type, institution, subject, category, language—ordered by how buyers and educators evaluate apps. Pagination replaced endless scroll.',
    img: {
      src: '/assets/projects/huge/screen-filters.png',
      alt: 'App Hub filter bar and catalog results',
      caption: 'Why it mattered — decision order, not alphabetical noise',
    },
  },
]

export default function CaseStudyHuge() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#08080A] font-sans text-white selection:bg-indigo-500/30">
      <SEO
        title="Rebuilding Discovery Across Google's Education Ecosystem"
        description="Redesigning App Hub—Google for Education's discovery platform—for institutions, administrators, educators, and integration partners. Designed at Huge."
        image="/assets/projects/huge/hub-hero.png"
        url="https://andreasanzrojas.com/work/huge"
      />

      <BackBar />

      {/* 1. Hero */}
      <header className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]" />
        <div
          className="ambient-drift pointer-events-none absolute left-1/2 top-[-12%] h-[420px] w-[760px] -translate-x-1/2 opacity-50"
          style={{ background: 'radial-gradient(closest-side, rgba(120,90,255,0.22), transparent)' }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl px-6 pt-10 pb-8 sm:pt-16 md:px-10 md:pt-24">
          <Reveal>
            <SectionLabel>Education · Platform · Discovery</SectionLabel>
          </Reveal>
          <Reveal delay={60}>
            <p className="mt-4 text-body text-white/55">
              Google for Education
              <span className="mt-1 block text-[13px] text-white/35">Designed at Huge · 2025</span>
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 max-w-full text-balance font-display text-display font-semibold text-white sm:max-w-[18ch]">
              Rebuilding Discovery Across Google&apos;s Education Ecosystem
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-full text-balance text-lead text-white/60 sm:max-w-[48ch]">
              Redesigning App Hub—Google for Education&apos;s discovery platform—so institutions, administrators, educators, and integration partners could navigate a growing catalog of tools and integrations.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              <Chip>Product Designer</Chip>
              <Chip>UX Strategy · Information Architecture · Interaction Design</Chip>
            </div>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-7">
              <a
                href="https://edu.google.com/intl/ALL_us/resources/get-started/apps/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition-all hover:scale-[1.02] hover:bg-white/90"
              >
                Explore the live experience
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative mx-auto max-w-4xl px-6 pb-16 md:px-10 md:pb-20">
          <Reveal delay={120} variant="scale">
            <StudyImage
              src="/assets/projects/huge/hero.png"
              alt="Google for Education App Hub — live discovery experience"
              caption="Live at edu.google.com"
            />
          </Reveal>
        </div>
      </header>

      {/* 2. The Challenge */}
      <Section id="challenge" label="The Challenge">
        <h2 className="font-display text-h2 font-medium text-white">A catalog that no longer scaled as a product.</h2>
        <div className="mt-5 space-y-5 text-body text-white/70 md:text-lead">
          <p>
            App Hub is the central place to discover educational applications and integrations across Google for Education—used by institutional buyers, IT leaders, educators, and partners to extend Classroom, administration, and learning workflows.
          </p>
          <p>
            As the library grew past 100 integrations, discovery stopped being a content problem and became a product problem: one URL, competing intents, and no system for finding the right path.
          </p>
        </div>
        <div className="mt-10">
          <StudyImage
            src="/assets/projects/huge/before-hero.png"
            alt="Previous App Hub experience with undifferentiated entry"
            caption="Before — one entry, no audience paths"
          />
        </div>
      </Section>

      {/* 3. Diagnosis */}
      <Section id="diagnosis" label="Diagnosis">
        <h2 className="font-display text-h2 font-medium text-white">Start with evidence, not screens.</h2>
        <p className="mt-5 max-w-[48ch] text-body text-white/70 md:text-lead">
          A heuristic audit of the live experience surfaced 20+ structural issues. The work began by naming the failure modes that made scale feel broken.
        </p>

        <div className="apphub-findings mt-10">
          {findings.map((item) => (
            <article key={item.title} className="apphub-finding">
              <h3 className="font-display text-[17px] font-medium text-white">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/60">{item.body}</p>
            </article>
          ))}
        </div>

        <div className="apphub-audit-excerpt mt-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/35">
            Heuristic audit · excerpt
          </p>
          <p className="mt-2 max-w-[48ch] text-[14px] leading-relaxed text-white/40">
            Two surfaces from the live experience, documented during review. The full audit logged 20+ issues across hero, catalog, labeling, and navigation.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <figure className="apphub-audit-proof">
              <ProjectImage
                src="/assets/projects/huge/before-hero.png"
                alt="Live App Hub hero reviewed during the heuristic audit"
                variant="screen"
                className="rounded-t-xl border border-white/[0.08] border-b-0 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]"
                style={{ borderRadius: '12px 12px 0 0' }}
              />
              <figcaption className="apphub-audit-proof-notes">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-indigo-300/60">Documented finding</p>
                <p className="mt-2 text-[13px] leading-relaxed text-white/65">
                  No above-the-fold path by role—administrators, educators, and partners entered the same undifferentiated flow.
                </p>
              </figcaption>
            </figure>

            <figure className="apphub-audit-proof">
              <ProjectImage
                src="/assets/projects/huge/before-catalog.png"
                alt="Live App Hub catalog reviewed during the heuristic audit"
                variant="screen"
                className="rounded-t-xl border border-white/[0.08] border-b-0 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]"
                style={{ borderRadius: '12px 12px 0 0' }}
              />
              <figcaption className="apphub-audit-proof-notes">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-indigo-300/60">Documented finding</p>
                <p className="mt-2 text-[13px] leading-relaxed text-white/65">
                  Sort-only controls across 108+ apps—users could reorder the list, but not narrow it by need.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </Section>

      {/* 4. Reframing */}
      <Section id="reframe" label="Reframing the Problem">
        <h2 className="font-display text-h2 font-medium text-white">From page asks to a discovery system.</h2>
        <p className="mt-5 max-w-[48ch] text-body text-white/70 md:text-lead">
          Stakeholder requests arrived as page-level asks. The useful question was different: what structure would discovery need at this scale—for everyone arriving?
        </p>

        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.14em] text-white/35">
          Editorial synthesis
        </p>
        <p className="mt-2 max-w-[48ch] text-[14px] leading-relaxed text-white/40">
          Written for this portfolio to make the reframing easier to follow—not a document produced during the project.
        </p>
        <div className="apphub-reframe mt-5" aria-label="Editorial comparison of how the problem was reframed">
          <div className="apphub-reframe-col">
            <p className="text-[13px] font-medium text-white/50">The ask sounded like</p>
            <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-white/60">
              <li>Page-level stakeholder requests</li>
              <li>An existing catalog to improve</li>
              <li>Labels and sections to rearrange</li>
            </ul>
          </div>
          <div className="apphub-reframe-arrow" aria-hidden>
            →
          </div>
          <div className="apphub-reframe-col">
            <p className="text-[13px] font-medium text-white/70">The work became</p>
            <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-white/70">
              <li>Who arrives, and with what intent?</li>
              <li>What job must each path complete?</li>
              <li>What must scale as apps are added?</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 5. One Platform. Multiple Stakeholders. */}
      <Section id="audiences" label="Product Tension">
        <h2 className="font-display text-h2 font-medium text-white">
          One platform.
          <span className="mt-1 block"> Multiple stakeholders.</span>
        </h2>
        <p className="mt-5 max-w-[48ch] text-body text-white/70 md:text-lead">
          Institutional buyers, administrators, IT leaders, educators, and partners all arrive with different jobs—through one shared discovery experience.
        </p>

        <div className="apphub-audiences mt-10">
          <article className="apphub-audience">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/35">Institutions</p>
            <h3 className="mt-3 font-display text-[18px] font-medium text-white">Buyers, admins &amp; IT</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-white/60">
              Evaluate fit, governance, and provisioning across schools and districts.
            </p>
          </article>
          <article className="apphub-audience">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/35">Classrooms</p>
            <h3 className="mt-3 font-display text-[18px] font-medium text-white">Educators</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-white/60">
              Find tools that fit Classroom and day-to-day teaching workflows.
            </p>
          </article>
          <article className="apphub-audience">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/35">Partners</p>
            <h3 className="mt-3 font-display text-[18px] font-medium text-white">Developers &amp; integrators</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-white/60">
              Understand requirements and publish integrations into the ecosystem.
            </p>
          </article>
        </div>

        <p className="mt-8 max-w-[48ch] text-[15px] leading-relaxed text-white/45">
          Different goals. One coherent discovery experience—held together by product information architecture.
        </p>
      </Section>

      {/* 6. From Exploration to Resolution */}
      <Section id="resolution" label="Exploration → Resolution">
        <h2 className="font-display text-h2 font-medium text-white">What changed—and what survived.</h2>
        <p className="mt-5 max-w-[48ch] text-body text-white/70 md:text-lead">
          An early assumption was that better sorting would unlock discovery. The audit showed the deeper failure was missing filters and unclear audience paths—so the architecture shifted before screens were redesigned. Constraints shaped what survived: Google&apos;s design system, one shared URL, and the need for every stakeholder to self-route.
        </p>

        <div className="mt-12 space-y-14">
          {decisions.map((decision) => (
            <Reveal key={decision.num}>
              <article className="apphub-decision">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[13px] tabular-nums text-indigo-300/70">{decision.num}</span>
                  <h3 className="font-display text-h3 font-medium text-white">{decision.title}</h3>
                </div>
                <p className="mt-3 max-w-[52ch] text-body text-white/60">{decision.body}</p>
                <div className="mt-6">
                  <StudyImage
                    src={decision.img.src}
                    alt={decision.img.alt}
                    caption={decision.img.caption}
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 7. Final Experience */}
      <Section id="final" label="Final Experience">
        <h2 className="font-display text-h2 font-medium text-white">The shipped discovery experience.</h2>
        <p className="mt-5 max-w-[44ch] text-body text-white/70 md:text-lead">
          Landing, stakeholder paths, and catalog interaction—one continuous system.
        </p>

        <div className="mt-10 space-y-8">
          <StudyImage
            src="/assets/projects/huge/hub-hero.png"
            alt="Final App Hub landing page"
            caption="Landing — orientation before the catalog"
          />
          <StudyImage
            src="/assets/projects/huge/hub-audience.png"
            alt="Final audience segmentation for administrators, educators, and developers"
            caption="Stakeholder paths — institutional, classroom, and partner intents"
          />
          <StudyImage
            src="/assets/projects/huge/hub-catalog.png"
            alt="Final app catalog and filter experience"
            caption="Catalog — filters that match how people actually decide"
          />
        </div>
      </Section>

      {/* 8. Delivery & Collaboration */}
      <Section id="delivery" label="Delivery & Collaboration">
        <h2 className="font-display text-h2 font-medium text-white">What shipped.</h2>

        <div className="apphub-delivery mt-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/35">Shipped</p>
            <ul className="mt-4 space-y-2.5 text-body text-white/70">
              <li>App Hub landing page</li>
              <li>App details and discovery experience</li>
              <li>Product information architecture</li>
              <li>Filter taxonomy and entry paths</li>
              <li>Partner onboarding into the ecosystem</li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/35">My contribution</p>
            <ul className="mt-4 space-y-2.5 text-body text-white/70">
              <li>Product Design</li>
              <li>UX Strategy</li>
              <li>Information Architecture</li>
              <li>Interaction Design</li>
              <li>High-fidelity Design</li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/35">Collaboration</p>
            <ul className="mt-4 space-y-2.5 text-body text-white/70">
              <li>Product Management</li>
              <li>Engineering</li>
              <li>Visual Design</li>
              <li>Content Strategy</li>
              <li>Google stakeholders</li>
            </ul>
          </div>
        </div>

        <p className="mt-8 max-w-[48ch] text-body text-white/60">
          Embedded with Google product and marketing stakeholders to align audience priorities and content hierarchy. After UX handoff, engineering and visual design implemented the experience within Google&apos;s design system.
        </p>

        <p className="mt-10 max-w-[48ch] border-l border-white/10 pl-5 text-body text-white/55">
          Recently launched. Long-term metrics are not yet available; the current signal is structural—the live architecture reflects the diagnosis and decisions above.
        </p>
      </Section>

      {/* 9. Reflection */}
      <Section id="reflection" label="Reflection">
        <ul className="space-y-5 text-body text-white/70 md:text-lead">
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300/70" aria-hidden />
            <span>The hardest part was resisting page redesigns until the product tension was named clearly.</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300/70" aria-hidden />
            <span>Ambiguous briefs become workable when stakeholders, jobs, and constraints are made explicit early.</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300/70" aria-hidden />
            <span>Next: deepen post-launch learning so taxonomy and curation keep pace with catalog growth.</span>
          </li>
        </ul>
      </Section>

      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
          <Link
            to="/work/banco-de-bogota"
            className="group block rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.015] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-colors hover:border-white/[0.16] md:p-8"
          >
            <span className="font-mono text-eyebrow uppercase text-white/35">Next</span>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-white/30">02</p>
            <p className="mt-1 text-[13px] font-medium uppercase tracking-wider text-white/40">Banco de Bogotá</p>
            <div className="mt-3 flex items-center justify-between gap-4">
              <span className="font-display text-h3 font-medium text-white">
                Designing the Digital Onboarding Experience for Colombia&apos;s Largest Bank
              </span>
              <span className="shrink-0 text-white/40 transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                →
              </span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
