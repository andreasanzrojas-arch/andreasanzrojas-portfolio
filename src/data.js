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
  { image: '/assets/banco-cdt/hero.jpg', link: '/work/banco-de-bogota' },
  { image: '/assets/mastercard/hero.jpg', link: '/work/mastercard' },
  { image: '/assets/projects/monoma/mobile-3.png', link: '/work/monoma' },
  { image: '/assets/travel/hero.jpg', link: '/work/travel-adventures' },
]

export const credibility = {
  brands: ['huge', 'google', 'mastercard', 'bancobogota', 'imaginamos'],
  meta: 'Fintech · Banking · Global Education',
}

export const currently = 'Currently at Huge · Google for Education'

export const principles = [
  {
    number: '01',
    statement: 'Clarity before craft.',
    description:
      'On the Banco de Bogotá CDT project, I mapped a 12-step analog process before opening Figma. Research revealed 70% abandonment at document upload — which completely reframed the design brief. The clarity came before the first wireframe.',
  },
  {
    number: '02',
    statement: 'Great design creates shared language.',
    description:
      'At Mastercard, the component library I built across 30+ client brands became the alignment tool between UX, engineering, and brand teams. When everyone references the same system, decisions get faster and debates get shorter.',
  },
  {
    number: '03',
    statement: 'The best decisions leave visible reasoning.',
    description:
      'During the GlobalPayments merchant onboarding, I documented every design trade-off in a shared decision log. When scope changed mid-project, the team traced back rationale without losing momentum — no re-explaining, no regression.',
  },
]

export const about = {
  headline:
    'Colombian roots, European horizon — I design products where trust is earned, not assumed.',
  subcopy:
    "I'm Andrea. I grew up in Cali, built my career in Bogotá's banking halls and Mastercard's global corridors, and now design for Google for Education from a life split between continents.\n\nI believe the best digital products are both beautiful and inevitable — designed with enough precision that the right next step feels obvious. Eight years across fintech and banking sharpened my conviction that clarity, craft, and aesthetics aren't in tension. They're the same thing done well.\n\nI work across Product and Visual Design — which means I hold the strategy conversation in the morning and deliver pixel-perfect components by afternoon. My process runs on Design Thinking and Scrum. My tools: Figma, Cursor, Claude, Jitter. I use AI not as a shortcut, but to think faster and test more before committing to direction.",
  languages: [
    { label: 'Français', status: 'fluent' },
    { label: 'English', status: 'fluent' },
    { label: 'Italiano', status: 'fluent' },
    { label: 'Español', status: 'fluent' },
    { label: 'Português', status: 'learning' },
    { label: 'Deutsch', status: 'aspirational' },
    { label: 'Русский', status: 'aspirational' },
  ],
  availability: 'Open to remote roles · Relocation to Europe',
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
    bg: '#ffffff',
    cta: { label: 'View case study →', href: '/work/banco-de-bogota' },
  },
  {
    id: 'mastercard',
    index: '02',
    tag: 'Fintech · Enterprise · Global Payments',
    title: 'Simplifying Merchant Payment Adoption at Global Scale',
    framing:
      'Designed the onboarding experience for a global payment platform — reducing merchant activation friction across multiple markets and compliance environments.',
    metric: 'Merchant activation reduced from days to minutes',
    metricLabel: '',
    company: 'Mastercard',
    accent: 'from-[#3A2E2A] to-[#6B4F3A]',
    image: '/assets/mastercard/hero.jpg',
    bg: '#f5f5f5',
    cta: { label: 'View case study →', href: '/work/mastercard' },
  },
  {
    id: 'monoma',
    index: '03',
    tag: 'Fintech · Banking · Design System',
    title: 'Monoma Banco Nacional',
    framing:
      'Redesigned the digital banking experience for one of Latin America\'s largest banks, driving adoption and reducing friction across key financial products.',
    metric: '+20% satisfaction post-iteration',
    metricLabel: '',
    company: 'Banco Nacional',
    accent: 'from-[#1A3D2F] to-[#2D5E48]',
    image: '/assets/projects/monoma/mobile-3.png',
    bg: '#ffffff',
    cta: { label: 'View case study →', href: '/work/monoma' },
  },
  {
    id: 'travel-adventures',
    index: '04',
    tag: 'UX Design · Mobile · Travel',
    title: 'Designing Complex Itinerary Flows for Decision-Heavy Booking',
    framing:
      'Translated complex multi-stop travel planning into a mobile-first experience — reducing decision friction across booking, itinerary and confirmation flows.',
    metric: 'End-to-end UX · Mobile · AI',
    metricLabel: '',
    company: 'Personal project',
    accent: 'from-[#2A3A4A] to-[#4A5A6A]',
    image: '/assets/projects/travel-adventures/hero.png',
    bg: '#f5f5f5',
    cta: { label: 'View case study →', href: '/work/travel-adventures' },
  },
]

export const capabilities = [
  {
    label: 'Product Strategy',
    body: "At Huge, I led the redesign of Google for Education's Contact Sales flow starting from TEI study data and business conversion goals — not UI patterns. The brief was about revenue, and the design had to reflect that.",
  },
  {
    label: 'Systems & Components',
    body: 'Built a design system from scratch at Banco de Bogotá — tokens, components, and documentation that outlived the project. At Mastercard, adapted and scaled existing systems across 30+ brand variants without forking core components.',
  },
  {
    label: 'AI-Augmented Workflows',
    body: 'I use Claude for research synthesis, Cursor for rapid prototyping, and ChatGPT for content strategy. What used to take 2 weeks of discovery now takes 3 days — without cutting corners on quality.',
  },
]

export const process = {
  label: 'From brief to outcome',
  steps: [
    {
      label: 'Context',
      description: 'Map the real problem — stakeholders, constraints, user behavior, and what success actually means.',
    },
    {
      label: 'Strategy',
      description: 'Frame decisions before pixels. Align the room on direction, trade-offs, and what not to build.',
    },
    {
      label: 'Interaction',
      description: 'Design flows, systems, and prototypes that teams can test, ship, and scale without losing intent.',
    },
    {
      label: 'Impact',
      description: 'Measure what changed — adoption, conversion, satisfaction — and document the reasoning for what comes next.',
    },
  ],
}

export const coreSkills = [
  { label: 'Product Strategy', description: 'Defining product direction and priorities' },
  { label: 'UX Research', description: 'Interviews, heatmaps, journey mapping' },
  { label: 'Interaction Design', description: 'Flows, micro-interactions, prototyping' },
  { label: 'Systems & Components', description: 'Component libraries, tokens, and scalable Figma systems' },
  { label: 'Figma', description: 'High-fidelity design and prototyping' },
  { label: 'Prototyping', description: 'Clickable flows and interaction specs' },
  { label: 'Design Thinking', description: 'Double Diamond, problem framing' },
  { label: 'Google Sprints', description: '5-day sprint facilitation' },
  { label: 'Stakeholder Management', description: 'Alignment across product, tech and business' },
  { label: 'Cross-functional Collaboration', description: 'Partnering with engineering and product' },
  { label: 'Accessibility', description: 'WCAG, aria, inclusive design' },
  { label: 'AI-Assisted Workflows', description: 'Claude, ChatGPT, Cursor as daily tools' },
  { label: 'Mobile', description: 'iOS and Android native patterns' },
  { label: 'Web', description: 'Responsive web product design' },
  { label: 'Fintech', description: '8+ years in financial products' },
  { label: 'Banking', description: 'Retail and enterprise banking UX' },
]

export const experience = [
  {
    company: 'Huge — Google for Education',
    role: 'Senior Product Designer',
    dates: 'March 2025–Present',
    context:
      'Leading product design for Google for Education — defining end-to-end UX for content discoverability, user acquisition, and value communication at global scale. Led complex flows (Contact Sales, strategic landing pages), integrated AI-native tools (Cursor, Claude, ChatGPT) to accelerate prototyping and research synthesis, and collaborated cross-functionally with PMs, Engineering, Visual Design, Content, QA and Google stakeholders to deliver scalable, production-ready solutions.',
  },
  {
    company: 'Mastercard',
    role: 'Senior Product Designer',
    dates: 'April 2022–January 2025',
    context:
      'Led design strategy for payment products across LATAM and Europe, impacting 90M+ cardholders. Adapted brand systems for 30+ enterprise clients, designed intuitive payment flows improving user satisfaction, and led cross-functional Design Sprints connecting UX, business, and engineering teams on global market solutions.',
    methods: 'Methods: Design Thinking · Design Sprints · Cross-functional alignment',
  },
  {
    company: 'Banco de Bogotá',
    role: 'Product Designer',
    dates: 'June 2017–April 2022',
    context:
      "Drove digital transformation for one of Colombia's largest banks. Redesigned onboarding flows for key financial products — reducing drop-off and increasing digital product openings by 30%. Applied Design Thinking to align stakeholder goals with user needs across complex regulatory constraints.",
    methods: 'Methods: Design Thinking · Scrum · Sprint-based delivery',
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
  items: [],
}

export const footer = {
  cta: 'Let’s work on something that matters.',
  line: 'Open to Lead and Senior Product Designer roles — remote worldwide, relocation to Europe.',
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
