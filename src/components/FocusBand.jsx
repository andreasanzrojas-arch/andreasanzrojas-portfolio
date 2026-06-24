import { focus } from '../data'
import Reveal from './Reveal'

export default function FocusBand() {
  return (
    <section className="relative overflow-hidden bg-ink text-canvas">
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.10]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(600px circle at 78% 18%, rgba(43,82,120,0.35), transparent 60%)',
        }}
      />

      <div className="shell relative py-section-lg">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-7 text-white/45">The point</p>
            <p className="font-display text-h2 font-medium leading-tight tracking-tight text-canvas">
              {focus.statement}
            </p>
          </Reveal>

          <div className="lg:col-span-4 lg:col-start-9">
            <div className="flex flex-col divide-y divide-white/10 border-t border-white/10">
              {focus.stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 90}>
                  <div className="flex items-baseline justify-between py-5">
                    <span className="font-display text-2xl font-semibold tracking-tight text-canvas">
                      {s.value}
                    </span>
                    <span className="max-w-[60%] text-right text-[13px] leading-snug text-white/55">
                      {s.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
