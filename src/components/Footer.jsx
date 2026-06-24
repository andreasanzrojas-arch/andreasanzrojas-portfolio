import { footer } from '../data'
import Reveal from './Reveal'

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-hairline bg-canvas-soft/40">
      <div className="shell py-section">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-6 text-muted">{footer.cta}</p>
            <a
              href={`mailto:${footer.email}`}
              className="font-display text-display-sm font-medium tracking-tight text-ink underline decoration-hairline-strong underline-offset-[6px] transition-colors duration-300 hover:decoration-ink"
            >
              {footer.email}
            </a>
            <p className="mt-6 max-w-md text-[15px] text-muted">{footer.line}</p>
          </Reveal>

          <div className="lg:col-span-3 lg:col-start-10">
            <p className="eyebrow mb-6 text-muted-soft">Elsewhere</p>
            <ul className="space-y-3">
              {footer.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[15px] text-ink transition-colors duration-200 hover:text-muted"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Reveal>
          <div className="mt-20 flex flex-col gap-4 border-t border-hairline pt-8 md:flex-row md:items-center md:justify-between">
            <span className="text-[12px] text-muted-soft">{footer.human}</span>
            <span className="text-[12px] text-muted-soft">
              © {new Date().getFullYear()} Andrea Sanz Rojas · Prototype
            </span>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
