'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to detect if a media query matches.
 * Used for responsive behavior (Bento Grid ↔ Accordion switch).
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener('change', handler);

    return () => media.removeEventListener('change', handler);
  }, [query]);

  return matches;
}
