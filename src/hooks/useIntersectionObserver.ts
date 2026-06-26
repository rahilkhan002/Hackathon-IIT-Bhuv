'use client';

import { useEffect, useRef } from 'react';

/**
 * Hook that applies IntersectionObserver to trigger
 * scroll-based reveal animations via data-visible attribute.
 */
export function useIntersectionObserver(
  selector: string,
  options: { threshold?: number; rootMargin?: string } = {}
) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? '0px 0px -60px 0px',
      }
    );

    const elements = container.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, options.threshold, options.rootMargin]);

  return containerRef;
}
