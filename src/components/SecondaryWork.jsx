import { secondary } from '../data'
import Reveal from './Reveal'

export default function SecondaryWork() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-hairline">
      <div className="shell py-16">
        <Reveal>
          <div className="flex flex-col gap-6">
            <p className="eyebrow text-muted-soft">{secondary.label}</p>
            {secondary.items.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group flex items-center justify-between border-b border-hairline pb-6 transition-colors duration-300 hover:border-ink"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-display text-h3 font-medium text-ink">{item.title}</span>
                  <span className="text-[13px] text-muted">{item.note}</span>
                </div>
                <span
                  aria-hidden
                  className="text-xl text-muted transition-all duration-300 ease-out-soft group-hover:translate-x-1 group-hover:text-ink"
                >
                  →
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
