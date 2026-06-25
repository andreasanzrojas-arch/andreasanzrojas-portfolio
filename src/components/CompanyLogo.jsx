import { useState } from 'react'

const companies = {
  huge: {
    img: null,
    svg: (
      <svg viewBox="0 0 56 22" width="56" height="22" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <text
          x="0"
          y="17"
          fontFamily="'Helvetica Neue', Arial, sans-serif"
          fontWeight="800"
          fontSize="20"
          fill="currentColor"
          letterSpacing="-0.5"
        >
          HUGE
        </text>
      </svg>
    ),
  },
  google: {
    img: null,
    svg: (
      <svg viewBox="0 0 74 24" width="74" height="24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path
          d="M29.11 11.75c0 5.81-4.54 10.1-10.12 10.1C13.41 21.85 9 17.34 9 11.75S13.41 1.65 18.99 1.65c2.87 0 4.96 1.12 6.51 2.61l-1.83 1.83c-.89-.84-2.1-1.49-4.68-1.49-3.83 0-6.82 3.08-6.82 6.9s2.99 6.9 6.82 6.9c4.39 0 6.03-3.15 6.29-4.78h-6.29V9.75h10.49c.1.56.13 1.09.13 1.99v.01z"
          fill="#4285F4"
        />
        <path
          d="M38.85 8.35v2.3h-2.3v2.3h-2.3v-2.3h-2.3v-2.3h2.3V6.05h2.3v2.3z"
          fill="#34A853"
        />
        <text
          x="43"
          y="17"
          fontFamily="'Google Sans', 'Helvetica Neue', Arial, sans-serif"
          fontWeight="400"
          fontSize="14"
          fill="currentColor"
        >
          Google
        </text>
      </svg>
    ),
  },
  mastercard: {
    img: null,
    svg: (
      <svg viewBox="0 0 50 32" width="50" height="32" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="19" cy="16" r="14" fill="#EB001B" />
        <circle cx="31" cy="16" r="14" fill="#F79E1B" />
        <path d="M25 5.27a14 14 0 0 1 0 21.46A14 14 0 0 1 25 5.27z" fill="#FF5F00" />
      </svg>
    ),
  },
  bancobogota: {
    img: null,
    svg: (
      <svg viewBox="0 0 130 22" width="130" height="22" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="0" y="3" width="16" height="16" rx="2" fill="#C8102E" />
        <text
          x="22"
          y="16"
          fontFamily="'Helvetica Neue', Arial, sans-serif"
          fontWeight="600"
          fontSize="12"
          fill="currentColor"
        >
          Banco de Bogotá
        </text>
      </svg>
    ),
  },
  imaginamos: {
    img: '/assets/logos/imaginamos.svg',
    svg: (
      <svg viewBox="0 0 100 22" width="100" height="22" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="8" cy="11" r="6" fill="#FF6B35" />
        <text
          x="20"
          y="16"
          fontFamily="'Helvetica Neue', Arial, sans-serif"
          fontWeight="600"
          fontSize="12"
          fill="currentColor"
        >
          Imaginamos
        </text>
      </svg>
    ),
  },
}

const LOGO_LABELS = {
  huge: 'Huge',
  google: 'Google',
  mastercard: 'Mastercard',
  bancobogota: 'Banco de Bogotá',
  imaginamos: 'Imaginamos',
}

export default function CompanyLogo({ name }) {
  const company = companies[name]
  const [imgFailed, setImgFailed] = useState(false)

  if (!company) return null

  const label = LOGO_LABELS[name] ?? name
  const showImg = company.img && !imgFailed

  return (
    <div className="company-logo-item group text-white/75 transition-colors duration-300 hover:text-white" title={label}>
      {showImg ? (
        <img
          src={company.img}
          alt={label}
          className="company-logo-item__img"
          onError={() => setImgFailed(true)}
        />
      ) : (
        company.svg
      )}
    </div>
  )
}

export { LOGO_LABELS }
