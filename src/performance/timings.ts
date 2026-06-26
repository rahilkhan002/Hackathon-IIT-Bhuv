// ============================================================
// DataFlow AI — Animation Timing Constants
// ============================================================
// All animation durations and easings in one place.
// Referenced by CSS custom properties and JS configs.

export const TIMINGS = {
  /** Hover interactions — fast response */
  hover: 180,
  /** Layout changes — accordion, grid transitions */
  layout: 350,
  /** Initial page load — maximum allowed */
  initialLoad: 500,
  /** Stagger delay between sequential element animations */
  stagger: 80,
} as const;

export const EASINGS = {
  /** For hover interactions */
  hover: 'ease-out',
  /** For layout/structural changes */
  layout: 'ease-in-out',
  /** For initial load animations */
  load: 'cubic-bezier(0.16, 1, 0.3, 1)',
} as const;
