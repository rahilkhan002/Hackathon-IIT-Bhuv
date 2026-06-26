// ============================================================
// DataFlow AI — Animation Configuration
// ============================================================
// Maps animation names to CSS class configurations.
// Keeps animation logic centralized and auditable.

import { TIMINGS, EASINGS } from './timings';

/**
 * CSS transition strings for common interactions.
 * Always specify exact properties — never use `transition: all`.
 */
export const TRANSITIONS = {
  hover: `transform ${TIMINGS.hover}ms ${EASINGS.hover}, opacity ${TIMINGS.hover}ms ${EASINGS.hover}, box-shadow ${TIMINGS.hover}ms ${EASINGS.hover}`,
  layout: `transform ${TIMINGS.layout}ms ${EASINGS.layout}, opacity ${TIMINGS.layout}ms ${EASINGS.layout}, grid-template-rows ${TIMINGS.layout}ms ${EASINGS.layout}`,
  accordion: `grid-template-rows ${TIMINGS.layout}ms ${EASINGS.layout}`,
} as const;

/**
 * Tailwind-compatible animation delay classes.
 * Used for staggered reveal animations.
 */
export function getStaggerDelay(index: number): string {
  return `${index * TIMINGS.stagger}ms`;
}
