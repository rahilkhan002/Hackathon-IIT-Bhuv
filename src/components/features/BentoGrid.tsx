import React from 'react';
import type { Feature } from '@/types';

interface BentoGridProps {
  features: Feature[];
  activeIndex: number;
  onHover: (index: number) => void;
}

/**
 * BentoGrid — Desktop 2×2 feature grid.
 *
 * Active card gets subtle scale + shadow.
 * onMouseEnter syncs with Accordion via shared activeFeature state.
 */
export function BentoGrid({ features, activeIndex, onHover }: BentoGridProps) {
  return (
    <div className="grid grid-cols-2 gap-6">
      {features.map((feature, index) => {
        const isActive = index === activeIndex;
        const Icon = feature.icon;

        return (
          <div
            key={feature.id}
            onMouseEnter={() => onHover(index)}
            className={`group relative p-8 rounded-2xl border cursor-default transition-[transform,opacity,box-shadow] duration-[180ms] ease-out ${
              isActive
                ? 'border-white/20 bg-white/10 shadow-xl shadow-blue-500/5 scale-[1.02]'
                : 'border-white/10 bg-white/5 hover:border-white/15'
            }`}
            style={{ willChange: isActive ? 'transform' : 'auto' }}
          >
            {/* Gradient accent */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-[180ms] ease-out ${
                isActive ? 'opacity-[0.06]' : 'group-hover:opacity-[0.03]'
              }`}
              aria-hidden="true"
            />

            <div className="relative">
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} mb-5`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
