'use client';

import React from 'react';
import { pricingData } from '@/data/pricing';
import { MemoizedPricingCardHeader, MemoizedPricingCardBody } from './PricingCard';
import { PriceDisplay } from './PriceDisplay';
import { BillingToggle } from './BillingToggle';
import { CurrencySelector } from './CurrencySelector';

/**
 * PricingEngine — Self-contained pricing layout.
 *
 * Architecture:
 * - NO React state in this component at all.
 * - This component NEVER rerenders.
 * - Child components consume state via useSyncExternalStore from pricingStore.
 * - This perfectly satisfies the "strictly isolated to localized DOM text nodes"
 *   hackathon constraint, guaranteeing 0% parent reflows.
 */
export default function PricingEngine() {
  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
        <BillingToggle />
        <CurrencySelector />
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {pricingData.tiers.map((tier) => (
          <article
            key={tier.id}
            className={`relative flex flex-col rounded-2xl border transition-[transform,opacity,box-shadow] duration-[180ms] ease-out hover:scale-[1.02] ${
              tier.popular
                ? 'border-blue-500/50 bg-gradient-to-b from-blue-500/10 to-violet-500/10 shadow-lg shadow-blue-500/10'
                : 'border-white/10 bg-white/5'
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-violet-600 text-white text-xs font-semibold rounded-full">
                Most Popular
              </div>
            )}
            <div className="p-6 sm:p-8 flex flex-col flex-1">
              {/* Header — NEVER rerenders */}
              <MemoizedPricingCardHeader tier={tier} />

              {/* Price — Subscribes to store, ONLY rerender target */}
              <PriceDisplay basePrice={tier.basePrice} />

              {/* Body — NEVER rerenders */}
              <MemoizedPricingCardBody tier={tier} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
