'use client';

import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/shared/Button';
import { ArrowRightIcon } from '@/components/shared/Icons';
import { BRAND } from '@/constants';
import HeroMetrics from './HeroMetrics';
import WorkflowAnimation from './WorkflowAnimation';

/**
 * Hero — Primary landing section.
 *
 * Communicates: Problem → Solution → Result.
 * Entry animation: fadeInUp ≤500ms.
 */
export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Trigger entry animations via data-visible
    if (heroRef.current) {
      const animatedElements = heroRef.current.querySelectorAll('[data-animate]');
      animatedElements.forEach((el, i) => {
        setTimeout(() => {
          el.setAttribute('data-visible', 'true');
        }, i * 80); // stagger
      });
    }
  }, []);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-[90vh] flex items-center overflow-hidden pt-20"
      ref={heroRef}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-violet-600/5 to-transparent"
        aria-hidden="true"
      />
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden="true"
      />
      {/* Radial glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust badge */}
          <div
            data-animate
            className="opacity-0 translate-y-5 data-[visible]:opacity-100 data-[visible]:translate-y-0 transition-[opacity,transform] duration-500 ease-out inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
            Trusted by 500+ teams worldwide
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            data-animate
            className="opacity-0 translate-y-5 data-[visible]:opacity-100 data-[visible]:translate-y-0 transition-[opacity,transform] duration-500 ease-out text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            {BRAND.tagline.split('Data Pipeline').map((part, i) =>
              i === 0 ? (
                <React.Fragment key={i}>
                  {part}
                  <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    Data Pipeline
                  </span>
                </React.Fragment>
              ) : (
                <React.Fragment key={i}>{part}</React.Fragment>
              )
            )}
          </h1>

          {/* Subheadline */}
          <p
            data-animate
            className="opacity-0 translate-y-5 data-[visible]:opacity-100 data-[visible]:translate-y-0 transition-[opacity,transform] duration-500 ease-out text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Connect spreadsheets, CRMs, APIs and databases in minutes.
            AI-powered automation for faster decisions with fewer errors.
          </p>

          {/* CTAs */}
          <div
            data-animate
            className="opacity-0 translate-y-5 data-[visible]:opacity-100 data-[visible]:translate-y-0 transition-[opacity,transform] duration-500 ease-out flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button size="lg" id="cta-start-trial">
              Start Free Trial
            </Button>
            <Button variant="secondary" size="lg" id="cta-watch-demo">
              Watch Demo
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Metrics */}
          <div
            data-animate
            className="opacity-0 translate-y-5 data-[visible]:opacity-100 data-[visible]:translate-y-0 transition-[opacity,transform] duration-500 ease-out"
          >
            <HeroMetrics />
          </div>

          {/* Workflow Animation */}
          <div
            data-animate
            className="opacity-0 translate-y-5 data-[visible]:opacity-100 data-[visible]:translate-y-0 transition-[opacity,transform] duration-500 ease-out mt-16"
          >
            <WorkflowAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
