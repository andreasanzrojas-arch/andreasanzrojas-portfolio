import { pov } from '../data'
import Reveal from './Reveal'

export default function LeadershipPOV() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="shell py-section">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <p className="eyebrow">{pov.label}</p>
          </Reveal>

          <div className="lg:col-span-8 lg:col-start-5">
            {pov.body.map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <p className="mb-6 font-display text-h3 font-normal leading-snug tracking-tight text-ink last:mb-0">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
