import { useEffect } from 'react'

export default function SEO({ title, description, image, url }) {
  const siteName = 'Andrea Sanz Rojas'
  const fullTitle = title ? `${title} · ${siteName}` : `${siteName} — Senior Product Designer`
  const defaultImage = '/og-default.png'

  useEffect(() => {
    document.title = fullTitle

    const setMeta = (selector, attr, value) => {
      if (!value) return
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        const [attrName, attrValue] = attr.split('=')
        el.setAttribute(attrName.trim(), attrValue?.replace(/"/g, '').trim() || attrName.trim())
        document.head.appendChild(el)
      }
      el.setAttribute('content', value)
    }

    setMeta('meta[name="description"]', 'name="description"', description)
    setMeta('meta[property="og:title"]', 'property="og:title"', fullTitle)
    setMeta('meta[property="og:description"]', 'property="og:description"', description)
    setMeta('meta[property="og:image"]', 'property="og:image"', image || defaultImage)
    setMeta('meta[property="og:type"]', 'property="og:type"', 'website')
    setMeta('meta[name="twitter:card"]', 'name="twitter:card"', 'summary_large_image')
    setMeta('meta[name="twitter:title"]', 'name="twitter:title"', fullTitle)
    setMeta('meta[name="twitter:description"]', 'name="twitter:description"', description)
    setMeta('meta[name="twitter:image"]', 'name="twitter:image"', image || defaultImage)
    if (url) setMeta('meta[property="og:url"]', 'property="og:url"', url)

    return () => {
      document.title = `${siteName} — Senior Product Designer`
    }
  }, [fullTitle, description, image, url])

  return null
}
