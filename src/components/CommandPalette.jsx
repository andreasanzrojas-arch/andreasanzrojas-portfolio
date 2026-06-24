import { useEffect, useMemo, useRef, useState } from 'react'

function Kbd({ children }) {
  return (
    <span className="inline-flex h-5 min-w-[20px] items-center justify-center rounded border border-white/15 bg-white/5 px-1.5 font-mono text-[10px] text-white/55">
      {children}
    </span>
  )
}

// Functional Raycast/Linear-style command menu.
// `groups` = [{ heading, items: [{ id, label, hint, glyph, keywords, run }] }]
export default function CommandPalette({ open, onClose, groups }) {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef(null)
  const itemRefs = useRef([])

  // Filter + flatten, preserving group structure for display.
  const { visibleGroups, flat } = useMemo(() => {
    const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
    const match = (item) => {
      if (!tokens.length) return true
      const hay = `${item.label} ${item.keywords || ''} ${item.hint || ''}`.toLowerCase()
      return tokens.every((tk) => hay.includes(tk))
    }
    const flatList = []
    const vg = groups
      .map((g) => {
        const items = g.items.filter(match).map((it) => {
          const idx = flatList.length
          flatList.push(it)
          return { ...it, _idx: idx }
        })
        return { heading: g.heading, items }
      })
      .filter((g) => g.items.length > 0)
    return { visibleGroups: vg, flat: flatList }
  }, [groups, query])

  // Reset state on open / query change.
  useEffect(() => {
    if (open) {
      setQuery('')
      setActive(0)
      const t = setTimeout(() => inputRef.current?.focus(), 20)
      return () => clearTimeout(t)
    }
  }, [open])

  useEffect(() => {
    setActive(0)
  }, [query])

  // Lock background scroll while open.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  // Keep active item in view.
  useEffect(() => {
    itemRefs.current[active]?.scrollIntoView({ block: 'nearest' })
  }, [active])

  if (!open) return null

  const run = (item) => {
    onClose()
    // let the close paint before scrolling
    requestAnimationFrame(() => item?.run?.())
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((a) => Math.min(a + 1, flat.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((a) => Math.max(a - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (flat[active]) run(flat[active])
    } else if (e.key === 'Escape') {
      e.preventDefault()
      onClose()
    } else if (e.key === 'Home') {
      setActive(0)
    } else if (e.key === 'End') {
      setActive(flat.length - 1)
    }
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-center px-4 pt-[12vh]">
      {/* backdrop */}
      <div
        className="cmdk-backdrop absolute inset-0 bg-black/55 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      {/* panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command menu"
        className="cmdk-panel relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#121214]/95 shadow-2xl backdrop-blur-2xl"
        onKeyDown={onKeyDown}
      >
        {/* search row */}
        <div className="flex items-center gap-3 border-b border-white/[0.07] px-4 py-3.5">
          <span className="text-white/35" aria-hidden>
            ⌕
          </span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, expertise, skills…"
            className="w-full bg-transparent text-[15px] text-white placeholder:text-white/35 focus:outline-none"
            spellCheck={false}
            autoComplete="off"
          />
          <button onClick={onClose} className="shrink-0">
            <Kbd>esc</Kbd>
          </button>
        </div>

        {/* results */}
        <div className="max-h-[52vh] overflow-y-auto overscroll-contain p-2">
          {flat.length === 0 && (
            <p className="px-3 py-10 text-center text-[13px] text-white/40">No matches.</p>
          )}

          {visibleGroups.map((g) => (
            <div key={g.heading} className="mb-1.5 last:mb-0">
              <p className="px-3 pb-1 pt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/30">
                {g.heading}
              </p>
              {g.items.map((item) => {
                const isActive = item._idx === active
                return (
                  <button
                    key={item.id}
                    ref={(el) => (itemRefs.current[item._idx] = el)}
                    onMouseMove={() => setActive(item._idx)}
                    onClick={() => run(item)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors duration-100 ${
                      isActive ? 'bg-white/[0.07]' : ''
                    }`}
                  >
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-[11px] font-medium ${
                        isActive
                          ? 'border-indigo-300/40 bg-indigo-400/15 text-indigo-200'
                          : 'border-white/10 bg-white/[0.04] text-white/55'
                      }`}
                    >
                      {item.glyph}
                    </span>
                    <span className={`flex-1 truncate text-[14px] ${isActive ? 'text-white' : 'text-white/70'}`}>
                      {item.label}
                    </span>
                    {item.hint && (
                      <span className="shrink-0 font-mono text-[11px] text-white/35">{item.hint}</span>
                    )}
                    {isActive && (
                      <span className="shrink-0 text-white/40" aria-hidden>
                        ↵
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          ))}
        </div>

        {/* footer hints */}
        <div className="flex items-center justify-between border-t border-white/[0.07] px-4 py-2.5">
          <div className="flex items-center gap-3 text-[11px] text-white/35">
            <span className="flex items-center gap-1.5">
              <Kbd>↑</Kbd>
              <Kbd>↓</Kbd>
              navigate
            </span>
            <span className="flex items-center gap-1.5">
              <Kbd>↵</Kbd>
              select
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/25">
            {flat.length} results
          </span>
        </div>
      </div>
    </div>
  )
}
