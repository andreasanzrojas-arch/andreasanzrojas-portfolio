const LINKEDIN_URL = 'https://linkedin.com/in/andrea-sanz-rojas-66329a106'

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#08080A] font-sans text-white">
      <div className="mx-auto max-w-2xl px-6 pt-32 pb-24 md:px-10 md:pt-40 md:pb-32">
        <p className="font-mono text-[11px] uppercase tracking-widest text-white/30">
          Contact
        </p>

        <h1 className="mt-4 font-display text-h2 font-semibold leading-tight text-white">
          Let&apos;s work together.
        </h1>

        <p className="mt-6 max-w-[48ch] text-balance text-lead leading-relaxed text-white/60">
          I&apos;m a Senior Product Designer with 8+ years across fintech, banking, and global digital
          products — open to Lead Product Designer roles where design operates at the intersection of
          strategy, systems, and product.
        </p>

        <div className="mt-12 border-t border-white/[0.08]" />

        <div className="mt-10 flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <span className="mt-0.5 w-16 shrink-0 font-mono text-[11px] uppercase tracking-widest text-white/30">
              Email
            </span>
            <a
              href="mailto:andreasanzrojas@gmail.com"
              className="text-[15px] text-white/70 transition-colors hover:text-white"
            >
              andreasanzrojas@gmail.com
            </a>
          </div>

          <div className="flex items-start gap-4">
            <span className="mt-0.5 w-16 shrink-0 font-mono text-[11px] uppercase tracking-widest text-white/30">
              LinkedIn
            </span>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] text-white/70 transition-colors hover:text-white"
            >
              linkedin.com/in/andrea-sanz-rojas-66329a106 ↗
            </a>
          </div>

          <div className="flex items-start gap-4">
            <span className="mt-0.5 w-16 shrink-0 font-mono text-[11px] uppercase tracking-widest text-white/30">
              Based in
            </span>
            <span className="text-[15px] text-white/55">
              Colombia · Open to remote and hybrid
            </span>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.08]" />

        <div className="mt-10 flex items-center gap-3">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400/80" />
          <p className="text-[13px] text-white/40">
            Currently open to Lead Product Designer opportunities
          </p>
        </div>
      </div>
    </div>
  )
}
