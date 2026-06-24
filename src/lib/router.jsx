import { createContext, useCallback, useContext, useEffect, useState } from 'react'

// Minimal client-side router (History API). No dependency, SPA-fallback friendly.
// Keeps the homepage's in-page anchor links (#work, #contact) untouched —
// routing is driven by pathname, not hash.
const RouterContext = createContext(null)

export function RouterProvider({ children }) {
  const [path, setPath] = useState(() => window.location.pathname)

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = useCallback((to) => {
    if (to !== window.location.pathname) {
      window.history.pushState({}, '', to)
      setPath(to)
    }
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  return <RouterContext.Provider value={{ path, navigate }}>{children}</RouterContext.Provider>
}

export function useRouter() {
  return useContext(RouterContext)
}

// Accessible internal link: real href for SEO/keyboard, intercepts to client-nav.
export function Link({ to, className = '', children, ...rest }) {
  const { navigate } = useRouter()
  const onClick = (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return
    e.preventDefault()
    navigate(to)
  }
  return (
    <a href={to} onClick={onClick} className={className} {...rest}>
      {children}
    </a>
  )
}
