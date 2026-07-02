import { useState } from 'react'

const WHITE_BG = { backgroundColor: '#ffffff' }

// Dark container for project mockups — consistent framing without darkening the image.
export default function ProjectImage({
    src,
    alt = '',
    className = '',
    imgClassName = '',
    variant,
    style,
    onError,
    onLoad,
    loading,
    draggable,
}) {
    const [failed, setFailed] = useState(false)

  if (!src || failed) return null

  const isLightCard = variant === 'card-light'
    const cardClass =
          variant === 'card' ? 'project-image--card' : variant === 'card-light' ? 'project-image--card-light' : ''

  if (isLightCard) {
        return (
                <div className="card-image-light-wrap" style={{ ...WHITE_BG, padding: '12px', borderRadius: '8px' }}>
                          <div
                                      className={`project-image project-image--card-light relative overflow-hidden ${className}`}
                                      style={WHITE_BG}
                                    >
                                    <img
                                                  src={src}
                                                  alt={alt}
                                                  className={`project-image__img project-image__img--light block w-full object-contain object-top ${imgClassName}`}
                                                  style={WHITE_BG}
                                                  onLoad={onLoad}
                                                  onError={() => {
                                                                  setFailed(true)
                                                                                  onError?.()
                                                  }}
                                                  loading={loading}
                                                  draggable={draggable}
                                                />
                          </div>
                </div>
              )
  }
  
    return (
          <div
                  className={`project-image relative overflow-hidden ${isLightCard ? 'bg-white' : 'bg-[#111]'} ${cardClass} ${className}`}
                  style={style}
                >
                <img
                          src={src
                          alt={alt}
                          className={`project-image__img block w-full object-cover object-top ${isLightCard ? 'bg-white' : ''} ${imgClassName}`}
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
