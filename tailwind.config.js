/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Light-primary canvas with depth — executive, not startup-dark
        canvas: '#FAFAF9',
        'canvas-soft': '#F4F4F1',
        ink: '#0A0A0A',
        'ink-soft': '#18181B',
        muted: '#6B6B6B',
        'muted-soft': '#8A8A85',
        hairline: '#E7E7E4',
        'hairline-strong': '#D9D9D4',
        // Single restrained accent — deep, serious
        accent: '#1B3A57',
        'accent-soft': '#2B5278',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        // Modular, engineered scale — major-third ramp with optical tracking.
        eyebrow: ['0.6875rem', { lineHeight: '1', letterSpacing: '0.2em' }],
        label: ['0.75rem', { lineHeight: '1.1', letterSpacing: '0.16em' }],
        meta: ['0.75rem', { lineHeight: '1.45', letterSpacing: '0.01em' }],
        display: ['clamp(2.75rem, 5.4vw, 4.75rem)', { lineHeight: '1.03', letterSpacing: '-0.035em' }],
        'display-sm': ['clamp(1.5rem, 2.4vw, 1.875rem)', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        h2: ['clamp(1.75rem, 2.6vw, 2.25rem)', { lineHeight: '1.1', letterSpacing: '-0.022em' }],
        h3: ['1.125rem', { lineHeight: '1.32', letterSpacing: '-0.012em' }],
        lead: ['clamp(1.0625rem, 1.3vw, 1.1875rem)', { lineHeight: '1.58', letterSpacing: '-0.006em' }],
        body: ['0.9375rem', { lineHeight: '1.6', letterSpacing: '-0.003em' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '-0.002em' }],
      },
      maxWidth: {
        shell: '1280px',
        prose: '40rem',
      },
      spacing: {
        section: '9rem',
        'section-lg': '11rem',
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      boxShadow: {
        panel: '0 1px 2px rgba(10,10,10,0.04), 0 12px 32px -12px rgba(10,10,10,0.12)',
        'panel-hover': '0 1px 2px rgba(10,10,10,0.06), 0 24px 48px -16px rgba(10,10,10,0.18)',
      },
    },
  },
  plugins: [],
}
