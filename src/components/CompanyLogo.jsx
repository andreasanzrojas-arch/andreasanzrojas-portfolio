import { useState } from 'react'

const LOGO_LABELS = {
  huge: 'Huge',
  google: 'Google',
  mastercard: 'Mastercard',
  bancobogota: 'Banco de Bogotá',
  imaginamos: 'Imaginamos',
}

function HugeMark({ className = '' }) {
  return (
    <svg viewBox="0 0 56 22" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
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
  )
}

function GoogleMark({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

function MastercardMark({ className = '' }) {
  return (
    <svg viewBox="0 0 50 32" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="19" cy="16" r="14" fill="#EB001B" />
      <circle cx="31" cy="16" r="14" fill="#F79E1B" />
      <path d="M25 5.27a14 14 0 0 1 0 21.46A14 14 0 0 1 25 5.27z" fill="#FF5F00" />
    </svg>
  )
}

function BancoBogotaMark({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="24" height="24" rx="4" fill="#C8102E" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontWeight="700"
        fontSize="13"
        fill="#ffffff"
      >
        B
      </text>
    </svg>
  )
}

function ImaginamosMarkFallback({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="12" cy="12" r="10" fill="#FF6B35" />
      <path
        d="M8 12 L12 8 L16 12 L12 16 Z"
        fill="#ffffff"
        fillOpacity="0.9"
      />
    </svg>
  )
}

function ImaginamosMark({ className = '' }) {
  const [imgFailed, setImgFailed] = useState(false)

  if (!imgFailed) {
    return (
      <img
        src="/assets/logos/imaginamos.svg"
        alt=""
        className={className}
        onError={() => setImgFailed(true)}
      />
    )
  }

  return <ImaginamosMarkFallback className={className} />
}

function InitialsMark({ children, className = '' }) {
  return (
    <span className={`brand-mark-initials ${className}`.trim()} aria-hidden>
      {children}
    </span>
  )
}

const MARKS = {
  huge: HugeMark,
  google: GoogleMark,
  mastercard: MastercardMark,
  bancobogota: BancoBogotaMark,
  imaginamos: ImaginamosMark,
}

export function CompanyMark({ name, size = 'md' }) {
  const Mark = MARKS[name]
  if (!Mark) return null

  const sizeClass = size === 'sm' ? 'company-mark company-mark--sm' : 'company-mark'

  return (
    <span className={sizeClass}>
      <Mark className="company-mark__svg" />
    </span>
  )
}

export function HeroBrandMark({ mark }) {
  if (!mark) return null

  if (mark.type === 'initials') {
    return (
      <span className="hero-marquee-item__brand" aria-hidden>
        <InitialsMark className="hero-marquee-item__brand-initials">{mark.value}</InitialsMark>
      </span>
    )
  }

  return (
    <span className="hero-marquee-item__brand" aria-hidden>
      <CompanyMark name={mark.type} size="sm" />
    </span>
  )
}

export const HERO_BRAND_MARKS = {
  'banco-de-bogota': { type: 'bancobogota' },
  mastercard: { type: 'initials', value: 'GP' },
  monoma: { type: 'initials', value: 'MN' },
  'travel-adventures': { type: 'initials', value: 'TA' },
}

export default function CompanyLogo({ name }) {
  const label = LOGO_LABELS[name]
  if (!label) return null

  return (
    <div className="company-logo-item group" title={label}>
      <div className="company-logo-item__mark">
        <CompanyMark name={name} />
      </div>
      <span className="company-logo-item__label">{label}</span>
    </div>
  )
}

export { LOGO_LABELS }
