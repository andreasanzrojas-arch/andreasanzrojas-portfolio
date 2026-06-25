import { useState } from 'react'

// Dark container for project mockups — consistent framing without darkening the image.
export default function ProjectImage({
  src,
  alt = '',
  className = '',
  imgClassName = '',
  onError,
  onLoad,
  loading,
  draggable,
}) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) return null

  return (
    <div className={`project-image relative overflow-hidden bg-[#111] ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`project-image__img h-full w-full object-cover object-top ${imgClassName}`}
        onLoad={onLoad}
        onError={() => {
          setFailed(true)
          onError?.()
        }}
        loading={loading}
        draggable={draggable}
      />
    </div>
  )
}
