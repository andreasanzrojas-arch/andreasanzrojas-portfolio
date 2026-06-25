const HugeMark = () => (
  <svg viewBox="0 0 80 36" width="80" height="36" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <text
      x="2"
      y="28"
      fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
      fontWeight="300"
      fontSize="30"
      fill="currentColor"
    >
      Huge
    </text>
  </svg>
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
  <svg width="48" height="30" viewBox="0 0 50 32" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <circle cx="19" cy="16" r="14" fill="#EB001B" />
    <circle cx="31" cy="16" r="14" fill="#F79E1B" />
    <path d="M25 5.27a14 14 0 0 1 0 21.46A14 14 0 0 1 25 5.27z" fill="#FF5F00" />
  </svg>
)

const BancoBogotaMark = () => (
  <svg viewBox="0 0 40 40" width="40" height="40" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <clipPath id="bdb-clip">
        <circle cx="20" cy="20" r="19.5" />
      </clipPath>
    </defs>
    <circle cx="20" cy="20" r="20" fill="#1B3A8C" />
    <path
      d="M20,2 A18,18 0,1,0 20,38 A11,11 0,1,1 20,2"
      fill="#C8102E"
      clipPath="url(#bdb-clip)"
    />
    <path
      d="M22,11 C30,10 35,15 34,21 C30,16 24,16 22,18.5 Z"
      fill="#F4A01C"
      clipPath="url(#bdb-clip)"
    />
    <path
      d="M22,29 C30,30 35,25 34,19 C30,24 24,24 22,21.5 Z"
      fill="#F4A01C"
      clipPath="url(#bdb-clip)"
    />
  </svg>
)

const ImaginamosMark = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path
      d="M3.17647 13.4547L13.4453 3.04436C13.5595 2.92931 13.714 2.86475 13.875 2.86475C14.036 2.86475 14.1904 2.92931 14.3046 3.04436L16.4677 5.23728C16.5811 5.35272 16.6447 5.50898 16.6447 5.67188C16.6447 5.83477 16.5811 5.99103 16.4677 6.10647L8.09064 14.5991C8.02944 14.6612 7.95585 14.7093 7.87479 14.7403C7.79374 14.7712 7.70708 14.7843 7.62066 14.7785L3.56583 14.5034C3.44967 14.4952 3.33826 14.4535 3.24485 14.383C3.15144 14.3125 3.07997 14.2163 3.03895 14.1058C2.99793 13.9954 2.98909 13.8753 3.01347 13.7598C3.03785 13.6444 3.09443 13.5385 3.17647 13.4547Z"
      fill="#FF007A"
    />
    <path
      d="M16.0962 26.8116L26.3571 16.4012C26.4706 16.2854 26.5343 16.1288 26.5343 15.9656C26.5343 15.8024 26.4706 15.6458 26.3571 15.53L24.194 13.3371C24.0798 13.222 23.9254 13.1575 23.7644 13.1575C23.6034 13.1575 23.4489 13.222 23.3347 13.3371L14.9576 21.8297C14.8963 21.8917 14.8488 21.9663 14.8183 22.0485C14.787 22.1308 14.774 22.2188 14.7802 22.3064L15.0522 26.4172C15.0603 26.5349 15.1013 26.6477 15.171 26.7422C15.2406 26.8367 15.3357 26.9089 15.4449 26.9503C15.554 26.9917 15.6727 27.0006 15.7868 26.9759C15.9009 26.9511 16.0054 26.894 16.0887 26.8116H16.0962Z"
      fill="#00B4D8"
    />
  </svg>
)

const companies = {
  huge: { mark: <HugeMark />, name: 'Huge' },
  google: { mark: <GoogleMark />, name: 'Google for Education' },
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

export default function CompanyLogo({ name }) {
  const company = companies[name]
  if (!company) return null

  return (
    <div className="company-logo-item">
      <div className="company-logo-mark">{company.mark}</div>
      <span className="company-logo-name">{company.name}</span>
    </div>
  )
}
