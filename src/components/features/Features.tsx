'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { features } from '@/data/features';
import { BentoGrid } from './BentoGrid';
import { Accordion } from './Accordion';

/**
 * Features — Controller component.
 *
 * Single source of truth: activeFeature state shared between
 * BentoGrid (desktop) and Accordion (mobile).
 *
 * Context persistence: hover on desktop → resize to mobile →
 * that accordion opens automatically.
 */
export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);
  const isMobile = useMediaQuery('(max-width: 1023px)');
  const sectionRef = useRef<HTMLElement>(null);

  // Resize synchronization: ensure accordion reflects activeFeature
  // when switching from desktop to mobile
  useEffect(() => {
    if (isMobile && sectionRef.current) {
      const panels = sectionRef.current.querySelectorAll('[data-panel]');
      panels.forEach((panel, i) => {
        if (i === activeFeature) {
          panel.setAttribute('data-open', 'true');
        } else {
          panel.removeAttribute('data-open');
        }
      });
    }
  }, [isMobile, activeFeature]);

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative py-20 sm:py-28"
      ref={sectionRef}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Everything You Need to Automate
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            Powerful features built for modern data teams. No code required.
          </p>
        </div>

        {/* Desktop: 2×2 Bento Grid */}
        <div className="hidden lg:block">
          <BentoGrid
            features={features}
            activeIndex={activeFeature}
            onHover={setActiveFeature}
          />
        </div>

        {/* Mobile/Tablet: Accordion */}
        <div className="lg:hidden">
          <Accordion
            features={features}
            activeIndex={activeFeature}
            onChange={setActiveFeature}
          />
        </div>
      </div>
    </section>
  );
}
