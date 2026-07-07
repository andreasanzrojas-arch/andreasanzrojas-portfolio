const images = [
  { src: '/assets/projects/huge/hub-hero.png', alt: 'App Hub hero — animated app cards' },
  { src: '/assets/projects/huge/hub-audience.png', alt: 'App Hub — audience segmentation' },
  { src: '/assets/projects/huge/hub-integrations.png', alt: 'App Hub — integration type cards' },
  { src: '/assets/projects/huge/hub-catalog.png', alt: 'App Hub — filter catalog' },
  { src: '/assets/projects/huge/hub-filters.png', alt: 'App Hub — horizontal filter bar' },
  { src: '/assets/projects/huge/before-catalog.png', alt: 'App Hub — before redesign' },
]

const track = [...images, ...images]

export default function AppHubMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#08080A] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#08080A] to-transparent" />

      <div className="app-hub-marquee-track flex gap-4">
        {track.map((img, i) => (
          <div
            key={i}
            className="shrink-0 overflow-hidden rounded-xl border border-white/[0.08]"
            style={{ width: '480px', height: '300px' }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
