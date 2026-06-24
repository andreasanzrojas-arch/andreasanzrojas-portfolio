import { useEffect } from 'react'

const OPTIONS = [
  { id: 'editorial', n: '1', label: 'Editorial' },
  { id: 'os', n: '2', label: 'Product OS' },
  { id: 'systems', n: '3', label: 'Systems' },
]

export default function DirectionSwitcher({ value, onChange }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === '1') onChange('editorial')
      if (e.key === '2') onChange('os')
      if (e.key === '3') onChange('systems')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onChange])

  return (
    <div className="fixed inset-x-0 bottom-5 z-[100] flex justify-center px-4">
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/80 p-1 shadow-2xl backdrop-blur-xl">
        <span className="px-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
          Direction
        </span>
        {OPTIONS.map((o) => {
          const active = value === o.id
          return (
            <button
              key={o.id}
              onClick={() => onChange(o.id)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-200 ${
                active ? 'bg-white text-black' : 'text-white/65 hover:text-white'
              }`}
            >
              <span
                className={`font-mono text-[10px] ${active ? 'text-black/45' : 'text-white/30'}`}
              >
                {o.n}
              </span>
              {o.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
