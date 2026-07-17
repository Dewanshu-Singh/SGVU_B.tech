export function hexToRgba(hex, alpha = 1) {
  const clean = hex.replace('#', '')
  const bigint = parseInt(clean, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

// Subtle, curated accent palette — used sparingly for wayfinding (per
// specialization/lab/pillar), not as decoration. Kept desaturated enough to
// stay premium rather than playful-neon; lime/violet remain reserved for
// CTAs and core brand marks.
export const accents = {
  violet: '#7B5CFF',
  sky: '#5EA8E0',
  rose: '#E07A9E',
  teal: '#4FB8AE',
  amber: '#D9A94E',
  green: '#7CB88F',
}

// Ordered list for cycling through the palette by index (e.g. accentAt(i)).
export const accentList = Object.values(accents)

export function accentAt(index) {
  return accentList[index % accentList.length]
}
