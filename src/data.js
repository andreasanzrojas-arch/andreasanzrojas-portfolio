// Placeholder content for the design prototype.
// Copy, metrics and imagery are PROVISIONAL — the goal is to evaluate
// hierarchy, layout, rhythm and perceived seniority, not final wording.

export const nav = {
  name: 'Andrea Sanz Rojas',
  links: [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],
  resume: { label: 'Resume', href: '#' },
}

export const hero = {
  eyebrow: 'Product Experience Designer · Fintech · AI-Native',
  name: 'Andrea Sanz Rojas',
  portrait: '/assets/andrea-portrait.jpg',
  // Leadership positioning statement (placeholder)
  headline: 'Leading complex product design at global scale.',
  sub: 'I help ambitious teams turn complex product problems into clear, scalable digital experiences — aligning design, systems and business goals.',
  ctas: [
    { label: 'See selected work', anchor: 'selected-work', style: 'primary' },
    { label: 'Get in touch', anchor: 'contact', style: 'secondary' },
  ],
}

export const marquee = [
  '/assets/banco-cdt/hero.jpg',
  '/assets/mastercard/hero.jpg',
  '/assets/monoma/hero.jpg',
  '/assets/travel/hero.jpg',
]

export const credibility = {
  brands: ['Huge — Google for Education', 'Mastercard', 'Banco de Bogotá'],
  meta: 'Fintech · Banking · Global Education',
}

export const currently = 'Currently at Huge · Google for Education'

export const principles = [
  {
    number: '01',
    statement: 'Clarity before craft.',
    description:
      "A beautiful interface that doesn't reduce friction is decoration. I work backward from decisions, not forward from aesthetics.",
  },
  {
    number: '02',
    statement: 'Great design creates shared language.',
    description:
      "The most durable output isn't a screen — it's a pattern, a component, or a decision framework a team can use without asking me.",
  },
  {
    number: '03',
    statement: 'The best decisions leave visible reasoning.',
    description:
      'I document trade-offs, not just outcomes. Design at lead level means the rationale travels with the work.',
  },
]

export const about = {
  headline:
    'Cali-born. Portuguese citizen. 5 languages, 8 years of enterprise product design.',
  cta: { label: 'Get in touch ↓', href: '#contact' },
}

export const stats = [
  { value: '8+', label: 'Years in enterprise product' },
  { value: '3', label: 'Global organizations' },
  { value: '4', label: 'Design systems shipped' },
  { value: '30+', label: 'Brand systems adapted · Mastercard' },
]

export const featured = [
  {
    id: 'banco-de-bogota',
    index: '01',
    tag: 'Fintech · Colombia',
    title: 'Rebuilding Digital Investing at Colombia’s Largest Bank',
    framing:
      'Led the design transformation of an analog investment product into a digital flow — aligning brand, risk and product stakeholders across a national banking institution.',
    metric: '+30% digital CDT openings',
    metricLabel: '',
    company: 'Banco de Bogotá',
    accent: 'from-[#1B3A57] to-[#2B5278]',
    image: '/assets/banco-cdt/hero.jpg',
    cta: { label: 'View case study →', href: '/work/banco-de-bogota' },
  },
  {
    id: 'mastercard',
    index: '02',
    tag: 'Fintech · Enterprise · Global Payments',
    title: 'Simplifying Merchant Payment Adoption at Global Scale',
    framing:
      'Designed the onboarding experience for a global payment platform — reducing merchant activation friction across multiple markets and compliance environments.',
    metric: 'Merchant onboarding · Global scale',
    metricLabel: '',
    company: 'Mastercard',
    accent: 'from-[#3A2E2A] to-[#6B4F3A]',
    image: '/assets/mastercard/hero.jpg',
    cta: { label: 'View case study →', href: '/work/mastercard' },
  },
  {
    id: 'huge',
    index: '03',
    tag: 'Enterprise UX · Strategy · Global Education',
    title: 'Designing Strategic Digital Experiences for Global Education',
    framing:
      'Translating complex business, content and product requirements into clear enterprise journeys for Google for Education — across global audiences and platforms.',
    metric: 'Enterprise UX · Strategic design · Global scale',
    metricLabel: '',
    company: 'Huge · Google for Education',
    accent: 'from-[#1E3A34] to-[#3C6E62]',
    image: '/assets/huge/hero.jpg',
    cta: { label: 'View case study →', href: '/work/huge' },
  },
  {
    id: 'travel-adventures',
    index: '04',
    tag: 'UX Design · Mobile · Travel',
    title: 'Designing Complex Itinerary Flows for Decision-Heavy Booking',
    framing:
      'Translated complex multi-stop travel planning into a mobile-first experience — reducing decision friction across booking, itinerary and confirmation flows.',
    metric: 'End-to-end UX · Mobile',
    metricLabel: '',
    company: 'Personal project',
    accent: 'from-[#2A3A4A] to-[#4A5A6A]',
    image: '/assets/travel/hero.jpg',
    cta: { label: 'View case study →', href: '/work/travel-adventures' },
  },
]

export const capabilities = [
  {
    label: 'Product Strategy',
    body: 'Translating ambiguous business problems into focused product decisions — with clear trade-offs, documented rationale, and stakeholder alignment.',
  },
  {
    label: 'Design Systems & Scale',
    body: 'At Mastercard, I adapted a shared component library across 30+ client brands — applying brand tokens, typography and component variants while maintaining system consistency across global markets.',
  },
  {
    label: 'AI-Augmented Workflows',
    body: 'Using Claude, ChatGPT and Cursor as daily tools — to compress research cycles, sharpen decisions, and move faster without losing quality.',
  },
]

export const focus = {
  statement:
    'I design for the level of the business and the org — framing the problem, aligning the room, and setting a direction teams can scale.',
  stats: [
    { value: '8+', label: 'Years leading product design' },
    { value: '3', label: 'Global organizations' },
    { value: 'Fintech', label: 'Banking & payments domains' },
  ],
}

export const pov = {
  label: 'How I lead',
  body: [
    'I start with the hardest question, not the first screen — what is actually worth solving, and why does it matter to the business?',
    'From there I align stakeholders around a clear direction, design the system rather than the page, and stay accountable to outcomes long after launch.',
  ],
}

export const secondary = {
  label: 'More work',
  items: [
    {
      title: 'Monoma — Mobile Banking',
      note: 'Anonymized enterprise product work',
      href: '#',
    },
  ],
}

export const footer = {
  cta: 'Let’s work on something that matters.',
  line: 'Open to Lead and Senior Product Designer roles and strategic collaborations.',
  email: 'andreasanzrojas@gmail.com',
  links: [
    { label: 'Email', href: 'mailto:andreasanzrojas@gmail.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/andrea-sanz-rojas-66329a106' },
  ],
  contact: [
    { label: 'andreasanzrojas@gmail.com', href: 'mailto:andreasanzrojas@gmail.com' },
    {
      label: 'linkedin.com/in/andrea-sanz-rojas-66329a106',
      href: 'https://linkedin.com/in/andrea-sanz-rojas-66329a106',
    },
  ],
  human: 'Off the clock: jewelry design, travel, and the future of fintech.',
}
