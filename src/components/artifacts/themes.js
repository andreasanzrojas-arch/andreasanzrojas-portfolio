// Theme tokens so the same artifacts adapt to each art direction.
const GRID_DARK =
  'linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)'
const gridLight = (a) =>
  `linear-gradient(rgba(26,25,21,${a}) 1px,transparent 1px),linear-gradient(90deg,rgba(26,25,21,${a}) 1px,transparent 1px)`

export const artifactThemes = {
  os: {
    mode: 'dark',
    ink: '#E7E7EC',
    sub: 'rgba(231,231,236,0.6)',
    text: 'rgba(231,231,236,0.45)',
    faint: 'rgba(255,255,255,0.22)',
    faint2: 'rgba(255,255,255,0.07)',
    surface: 'rgba(255,255,255,0.05)',
    accent: '#9B87FF',
    accent2: '#34D0C4',
    onAccent: '#0A0A0A',
    grid: GRID_DARK,
  },
  systems: {
    mode: 'light',
    ink: '#1A1915',
    sub: 'rgba(26,25,21,0.65)',
    text: 'rgba(26,25,21,0.5)',
    faint: 'rgba(26,25,21,0.28)',
    faint2: 'rgba(26,25,21,0.08)',
    surface: '#F0EEE6',
    accent: '#C15F3C',
    accent2: '#1A1915',
    onAccent: '#FFFFFF',
    grid: gridLight(0.06),
  },
  editorial: {
    mode: 'light',
    ink: '#16130E',
    sub: 'rgba(22,19,14,0.65)',
    text: 'rgba(22,19,14,0.5)',
    faint: 'rgba(22,19,14,0.26)',
    faint2: 'rgba(22,19,14,0.07)',
    surface: '#F6F2EA',
    accent: '#8C2F1E',
    accent2: '#16130E',
    onAccent: '#FFFFFF',
    grid: gridLight(0.05),
  },
}
