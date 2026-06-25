const LOGO_LABELS = {
  huge: 'Huge',
  google: 'Google',
  mastercard: 'Mastercard',
  bancobogota: 'Banco de Bogotá',
  imaginamos: 'Imaginamos',
}

/** Huge — X mark from hugeinc.com (brand symbol, not wordmark) */
function HugeMark({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="m14.938 16-8.47-8.47L7.53 6.47 16 14.94l8.47-8.47 1.06 1.06L17.06 16l8.47 8.47-1.06 1.06-8.47-8.47-8.47 8.47-1.06-1.06 8.47-8.47Z"
      />
    </svg>
  )
}

/** Google — official multicolor G */
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

/** Mastercard — overlapping red and yellow circles */
function MastercardMark({ className = '' }) {
  return (
    <svg viewBox="0 0 50 32" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="19" cy="16" r="14" fill="#EB001B" />
      <circle cx="31" cy="16" r="14" fill="#F79E1B" />
      <path d="M25 5.27a14 14 0 0 1 0 21.46A14 14 0 0 1 25 5.27z" fill="#FF5F00" />
    </svg>
  )
}

/** Banco de Bogotá — official isotipo (press room) */
function BancoBogotaMark({ className = '' }) {
  return (
    <img
      src="/assets/logos/banco-bogota-isotipo.png"
      alt=""
      className={className}
      width={28}
      height={28}
      loading="lazy"
      decoding="async"
    />
  )
}

/** Imaginamos — diagonal arrows from imaginamos.com (#FF007A + #00B4D8) */
function ImaginamosMark({ className = '' }) {
  return (
    <svg viewBox="0 0 30 30" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M3.17647 13.4547L13.4453 3.04436C13.5595 2.92931 13.714 2.86475 13.875 2.86475C14.036 2.86475 14.1904 2.92931 14.3046 3.04436L16.4677 5.23728C16.5811 5.35272 16.6447 5.50898 16.6447 5.67188C16.6447 5.83477 16.5811 5.99103 16.4677 6.10647L8.09064 14.5991C8.02944 14.6612 7.95585 14.7093 7.87479 14.7403C7.79374 14.7712 7.70708 14.7843 7.62066 14.7785L3.56583 14.5034C3.44967 14.4952 3.33826 14.4535 3.24485 14.383C3.15144 14.3125 3.07997 14.2163 3.03895 14.1058C2.99793 13.9954 2.98909 13.8753 3.01347 13.7598C3.03785 13.6444 3.09443 13.5385 3.17647 13.4547Z"
        fill="#00B4D8"
      />
      <path
        d="M16.0962 26.8116L26.3571 16.4012C26.4706 16.2854 26.5343 16.1288 26.5343 15.9656C26.5343 15.8024 26.4706 15.6458 26.3571 15.53L24.194 13.3371C24.0798 13.222 23.9254 13.1575 23.7644 13.1575C23.6034 13.1575 23.4489 13.222 23.3347 13.3371L14.9576 21.8297C14.8963 21.8917 14.8488 21.9663 14.8183 22.0485C14.7878 22.1307 14.7749 22.2185 14.7806 22.3061L15.052 26.4168C15.0583 26.5367 15.099 26.652 15.1691 26.7487C15.2391 26.8454 15.3356 26.9192 15.4465 26.9612C15.5574 27.0031 15.6779 27.0113 15.7933 26.9847C15.9088 26.9581 16.014 26.8979 16.0962 26.8116Z"
        fill="#FF007A"
      />
      <path
        d="M12.7688 13.5544L23.9972 2.1811C24.0533 2.12371 24.1201 2.07817 24.1937 2.04709C24.2673 2.016 24.3462 2 24.4259 2C24.5056 2 24.5845 2.016 24.6581 2.04709C24.7317 2.07817 24.7984 2.12371 24.8546 2.1811L26.996 4.35209C27.0527 4.40916 27.0977 4.47702 27.1284 4.55178C27.159 4.62654 27.1748 4.70671 27.1748 4.78768C27.1748 4.86865 27.159 4.94883 27.1284 5.02358C27.0977 5.09834 27.0527 5.16621 26.996 5.22328L15.9092 16.465C15.7942 16.5795 15.6397 16.6439 15.4785 16.6444H13.2073C13.0461 16.6444 12.8916 16.5795 12.7776 16.464C12.6637 16.3485 12.5996 16.1918 12.5996 16.0284V13.989C12.5984 13.8274 12.659 13.6716 12.7688 13.5544Z"
        fill="#FF007A"
      />
    </svg>
  )
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
