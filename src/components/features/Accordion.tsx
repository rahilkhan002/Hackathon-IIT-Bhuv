import React, { useRef } from 'react';
import { ChevronDownIcon } from '@/components/shared/Icons';
import type { Feature } from '@/types';

interface AccordionProps {
  features: Feature[];
  activeIndex: number;
  onChange: (index: number) => void;
}

/**
 * Accordion — Mobile feature view.
 *
 * Uses native <button> triggers for accessibility.
 * Full keyboard support: Enter, Space, ArrowUp/Down, Home, End.
 * Expand/collapse via grid-template-rows: 0fr → 1fr.
 */
export function Accordion({ features, activeIndex, onChange }: AccordionProps) {
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let newIndex: number | null = null;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        newIndex = (index + 1) % features.length;
        break;
      case 'ArrowUp':
        e.preventDefault();
        newIndex = (index - 1 + features.length) % features.length;
        break;
      case 'Home':
        e.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        e.preventDefault();
        newIndex = features.length - 1;
        break;
    }

    if (newIndex !== null) {
      onChange(newIndex);
      buttonsRef.current[newIndex]?.focus();
    }
  };

  return (
    <div className="space-y-3">
      {features.map((feature, index) => {
        const isOpen = index === activeIndex;
        const panelId = `feature-panel-${feature.id}`;
        const triggerId = `feature-trigger-${feature.id}`;
        const Icon = feature.icon;

        return (
          <div
            key={feature.id}
            data-panel
            data-open={isOpen || undefined}
            className={`rounded-xl border transition-[border-color] duration-[180ms] ease-out ${
              isOpen ? 'border-white/20 bg-white/10' : 'border-white/10 bg-white/5'
            }`}
          >
            {/* Trigger — native <button> */}
            <button
              ref={(el) => { buttonsRef.current[index] = el; }}
              id={triggerId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => onChange(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-full flex items-center gap-4 p-4 sm:p-5 text-left focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none rounded-xl"
            >
              <div
                className={`shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${feature.gradient}`}
              >
                <Icon className="w-5 h-5 text-white" />
              </div>
              <span className="flex-1 text-base font-semibold text-white">
                {feature.title}
              </span>
              <ChevronDownIcon
                className={`w-5 h-5 text-slate-400 transition-transform duration-[350ms] ease-in-out ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Panel — grid-template-rows animation */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className="grid transition-[grid-template-rows] duration-[350ms] ease-in-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
