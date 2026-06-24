import { credibility } from '../data'
import Reveal from './Reveal'

export default function CredibilityBar() {
  return (
    <section className="border-y border-hairline bg-canvas-soft/50">
      <div className="shell py-10">
        <Reveal>
          <p className="eyebrow mb-6 text-muted-soft">Trusted across</p>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {credibility.brands.map((b, i) => (
                <div key={b} className="flex items-center gap-8">
                  <span className="font-display text-[15px] font-medium tracking-tight text-ink/80">
                    {b}
                  </span>
                  {i < credibility.brands.length - 1 && (
                    <span className="hidden h-4 w-px bg-hairline-strong md:inline-block" />
                  )}
                </div>
              ))}
            </div>
            <p className="text-[13px] tracking-wide text-muted">{credibility.meta}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
