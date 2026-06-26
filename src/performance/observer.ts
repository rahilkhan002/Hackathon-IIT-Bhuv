// ============================================================
// DataFlow AI — IntersectionObserver Factory
// ============================================================
// Creates observers for scroll-triggered animations.
// No scroll event listeners — zero jank.

export interface ObserverOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

const defaultOptions: ObserverOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -60px 0px',
  once: true,
};

/**
 * Creates an IntersectionObserver that adds 'data-visible' attribute
 * to elements when they enter the viewport.
 */
export function createScrollObserver(
  options: ObserverOptions = {}
): IntersectionObserver | null {
  if (typeof window === 'undefined') return null;

  const config = { ...defaultOptions, ...options };

  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-visible', 'true');
          if (config.once) {
            observer?.unobserve(entry.target);
          }
        } else if (!config.once) {
          entry.target.removeAttribute('data-visible');
        }
      });
    },
    {
      threshold: config.threshold,
      rootMargin: config.rootMargin,
    }
  );

  // Store reference for cleanup within the once check
  let observer: IntersectionObserver | null = null;
}

/**
 * Utility to observe multiple elements at once.
 */
export function observeElements(
  observer: IntersectionObserver | null,
  selector: string,
  container?: HTMLElement
): () => void {
  if (!observer) return () => {};

  const root = container || document;
  const elements = root.querySelectorAll(selector);
  elements.forEach((el) => observer.observe(el));

  return () => {
    elements.forEach((el) => observer.unobserve(el));
  };
}
