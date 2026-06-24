import { featured } from '../data'
import Reveal from './Reveal'

function VisualPanel({ accent }) {
  return (
    <div className="group/panel relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-hairline bg-white shadow-panel transition-all duration-500 ease-out-soft group-hover:-translate-y-1 group-hover:shadow-panel-hover">
      {/* Tinted gradient field (placeholder for real case imagery) */}
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-90`} />
      <div className="grain absolute inset-0 opacity-[0.12] mix-blend-overlay" />

      {/* Faux floating UI to suggest product craft */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="w-full max-w-[78%] translate-y-2 rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm transition-transform duration-500 ease-out-soft group-hover:translate-y-0">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/40" />
            <span className="h-2 w-2 rounded-full bg-white/30" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
          </div>
          <div className="space-y-2">
            <div className="h-2.5 w-2/3 rounded-full bg-white/55" />
            <div className="h-2.5 w-full rounded-full bg-white/25" />
            <div className="h-2.5 w-4/5 rounded-full bg-white/25" />
          </div>
          <div className="mt-4 flex gap-2">
            <div className="h-7 w-20 rounded-md bg-white/70" />
            <div className="h-7 w-14 rounded-md bg-white/20" />
          </div>
        </div>
      </div>

      <span className="absolute left-4 top-4 rounded-full bg-black/20 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-white/80 backdrop-blur-sm">
        Placeholder
      </span>
    </div>
  )
}

function FeaturedRow({ item, flip }) {
  return (
    <article className="group grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
      {/* Text column */}
      <div className={`lg:col-span-5 ${flip ? 'lg:order-2 lg:col-start-8' : ''}`}>
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="font-display text-sm font-medium text-muted-soft">{item.index}</span>
            <span className="eyebrow text-muted">{item.tag}</span>
          </div>

          <h3 className="mt-5 font-display text-h3 font-medium text-ink">{item.title}</h3>

          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">{item.framing}</p>

          <div className="mt-7 flex items-end gap-3">
            <span className="font-display text-[2.5rem] font-semibold leading-none tracking-tight text-ink">
              {item.metric}
            </span>
            <span className="mb-1 text-[13px] text-muted">{item.metricLabel}</span>
          </div>

          <div className="mt-7 flex items-center gap-3">
            <span className="text-[13px] font-medium tracking-wide text-ink">{item.company}</span>
            <span className="h-px w-8 bg-hairline-strong" />
            <a
              href="#work"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink opacity-0 transition-all duration-300 ease-out-soft group-hover:opacity-100"
            >
              View case study <span aria-hidden>→</span>
            </a>
          </div>
        </Reveal>
      </div>

      {/* Visual column */}
      <div className={`lg:col-span-7 ${flip ? 'lg:order-1 lg:col-start-1' : ''}`}>
        <Reveal delay={120}>
          <VisualPanel accent={item.accent} />
        </Reveal>
      </div>
    </article>
  )
}

export default function FeaturedWork() {
  return (
    <section id="work" className="scroll-mt-24">
      <div className="shell py-section">
        <Reveal>
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="eyebrow mb-4">Selected work</p>
              <h2 className="font-display text-h2 font-medium text-ink">
                Initiatives led, not screens made.
              </h2>
            </div>
            <span className="hidden text-[13px] text-muted md:block">03 case studies</span>
          </div>
        </Reveal>

        <div className="space-y-24 lg:space-y-32">
          {featured.map((item, i) => (
            <FeaturedRow key={item.index} item={item} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
