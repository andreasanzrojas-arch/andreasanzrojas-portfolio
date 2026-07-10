const SITE_URL = 'https://andreasanzrojas.com'

export const routeSEO = {
  '/': {
    title: 'Senior Product Designer',
    description:
      'Andrea Sanz Rojas — Senior Product Designer with 8+ years in fintech, banking, and global digital products. Huge (Google Education), Mastercard, Banco de Bogotá.',
    image: '/og-default.png',
    url: SITE_URL,
  },
  '/contact': {
    title: 'Contact',
    description:
      'Andrea Sanz Rojas — Senior Product Designer open to Lead Product Designer opportunities in fintech, banking, and global digital products.',
    url: `${SITE_URL}/contact`,
  },
  '/work/banco-de-bogota': {
    title: "Rebuilding Digital Investing at Colombia's Largest Bank",
    description:
      "End-to-end redesign of Banco de Bogotá's CDT product — turning a 12-step analog process into a 3-step digital flow. Led research, UX design, visual UI, and post-launch validation.",
    image: '/assets/projects/banco-bogota/bdb-landing.png',
    url: `${SITE_URL}/work/banco-de-bogota`,
  },
  '/work/mastercard': {
    title: 'One App. Four Merchant Capabilities. Zero Branch Visits.',
    description:
      'Designed the end-to-end merchant banking platform for a major bank via Mastercard — POS acquisition, fiscal validation, online marketplace, loyalty, and biometric security in a single mobile flow.',
    image: '/assets/projects/globalpayments/screens-overview.png',
    url: `${SITE_URL}/work/mastercard`,
  },
  '/work/monoma': {
    title: "Full Mobile Banking Experience for One of Latin America's Largest Banks",
    description:
      'Designed the complete mobile banking experience for Banco Nacional — digital credit card issuance, contactless payments, card management, and real-time transactions. Led research synthesis, UX design, prototyping, and a full component system.',
    image: '/assets/projects/monoma/hero.png',
    url: `${SITE_URL}/work/monoma`,
  },
  '/work/travel-adventures': {
    title: 'Designing a Travel Platform That Resolves the Tension Between Discovery and Commerce',
    description:
      'Led product design of a B2B2C travel platform — from research and IA to a 40+ screen Figma prototype and full component system. Designed four core flows: discovery, package booking, agency marketplace, and trip planning.',
    image: '/assets/projects/travel-adventures/hero.png',
    url: `${SITE_URL}/work/travel-adventures`,
  },
  '/work/huge': {
    title: "Redesigning the UX Architecture of Google's Global App Discovery Hub",
    description:
      "Redesigned the information architecture of Google for Education's App Hub — turning a catalog of 108 apps into a guided discovery journey for three distinct user types. Led at Huge.",
    image: '/assets/projects/huge/hub-hero.png',
    url: `${SITE_URL}/work/huge`,
  },
}

export function getRouteSEO(path) {
  return routeSEO[path] ?? routeSEO['/']
}
