import React from 'react';
import { heroMetrics } from '@/data/testimonials';

/**
 * HeroMetrics — Stats cards beneath the hero CTA.
 * 500M+ Records, 99.99% Uptime, SOC 2 Certified.
 */
export default function HeroMetrics() {
  return (
    <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-lg mx-auto">
      {heroMetrics.map((metric) => (
        <div
          key={metric.label}
          className="text-center p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <div className="text-xl sm:text-2xl font-bold text-white mb-1">
            {metric.value}
          </div>
          <div className="text-xs sm:text-sm text-slate-400">{metric.label}</div>
        </div>
      ))}
    </div>
  );
}
