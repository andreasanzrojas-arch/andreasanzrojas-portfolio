import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://andreasanzrojas.com'
const SITE_NAME = 'Andrea Sanz Rojas'
const DEFAULT_IMAGE = '/og-default.png'

function absoluteUrl(path) {
  if (!path) return `${SITE_URL}${DEFAULT_IMAGE}`
  if (path.startsWith('http')) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export default function SEO({ title, description, image, url }) {
  const fullTitle = title ? `${title} · ${SITE_NAME}` : SITE_NAME
  const imageUrl = absoluteUrl(image)
  const pageUrl = url || SITE_URL

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={pageUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  )
}
