const HugeMark = () => (
  <img
    src="/assets/logos/huge.png"
    alt="Huge"
    width={32}
    height={32}
    style={{
      height: '32px',
      width: 'auto',
      objectFit: 'contain',
      borderRadius: '6px',
    }}
  />
)

const GoogleMark = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
)

const MastercardMark = () => (
  <svg
    width="50"
    height="32"
    viewBox="0 0 50 32"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
    focusable="false"
  >
    <circle cx="19" cy="16" r="14" fill="#EB001B" />
    <circle cx="31" cy="16" r="14" fill="#F79E1B" />
    <path d="M25 5.27a14 14 0 0 1 0 21.46A14 14 0 0 1 25 5.27z" fill="#FF5F00" />
  </svg>
)

const BancoBogotaMark = () => (
  <img
    src="/assets/logos/bancobogota.png"
    alt="Banco de Bogotá"
    width={40}
    height={36}
    style={{
      height: '36px',
      width: 'auto',
      objectFit: 'contain',
    }}
  />
)

const ImaginamosMark = () => (
  <img
    src="/assets/logos/imaginamos.svg"
    alt="Imaginamos"
    width={36}
    height={30}
    style={{
      height: '30px',
      width: 'auto',
      objectFit: 'contain',
    }}
  />
)

const companies = {
  huge: { mark: <HugeMark />, name: 'Huge' },
  google: { mark: <GoogleMark />, name: 'Google' },
  mastercard: { mark: <MastercardMark />, name: 'Mastercard' },
  bancobogota: { mark: <BancoBogotaMark />, name: 'Banco de Bogotá' },
  imaginamos: { mark: <ImaginamosMark />, name: 'Imaginamos' },
}

const MARK_COMPONENTS = {
  huge: HugeMark,
  google: GoogleMark,
  mastercard: MastercardMark,
  bancobogota: BancoBogotaMark,
  imaginamos: ImaginamosMark,
}

function InitialsMark({ children, className = '' }) {
  return (
    <span className={`brand-mark-initials ${className}`.trim()} aria-hidden>
      {children}
    </span>
  )
}

export function CompanyMark({ name, size = 'md' }) {
  const Mark = MARK_COMPONENTS[name]
  if (!Mark) return null

  const sizeClass = size === 'sm' ? 'company-mark company-mark--sm' : 'company-mark'

  return (
    <span className={sizeClass}>
      <Mark />
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

export const LOGO_LABELS = Object.fromEntries(
  Object.entries(companies).map(([key, company]) => [key, company.name]),
)

export default function CompanyLogo({ name, markOnly = false }) {
  const company = companies[name]
  if (!company) return null

  return (
    <div className="company-logo-item">
      <div className="company-logo-mark">{company.mark}</div>
      {!markOnly && !company.hideName && (
        <span className="company-logo-name">{company.name}</span>
      )}
    </div>
  )
}
