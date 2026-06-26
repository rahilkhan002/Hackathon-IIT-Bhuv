'use client';

import React, { useSyncExternalStore } from 'react';
import { pricingStore } from '@/store/pricingStore';

/**
 * BillingToggle — Uses native <button> with aria-pressed.
 * Subscribes directly to pricingStore.
 */
export function BillingToggle() {
  const state = useSyncExternalStore(pricingStore.subscribe, pricingStore.getState, pricingStore.getState);
  const cycle = state.billingCycle;

  return (
    <div
      role="group"
      aria-label="Billing cycle"
      className="inline-flex items-center rounded-xl bg-white/5 border border-white/10 p-1"
    >
      <button
        aria-pressed={cycle === 'monthly'}
        onClick={() => pricingStore.setBillingCycle('monthly')}
        className={`px-4 py-2 text-sm font-medium rounded-lg transition-[background-color,color] duration-[180ms] ease-out focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none ${
          cycle === 'monthly'
            ? 'bg-white/15 text-white shadow-sm'
            : 'text-slate-400 hover:text-white'
        }`}
        id="billing-toggle-monthly"
      >
        Monthly
      </button>
      <button
        aria-pressed={cycle === 'annual'}
        onClick={() => pricingStore.setBillingCycle('annual')}
        className={`px-4 py-2 text-sm font-medium rounded-lg transition-[background-color,color] duration-[180ms] ease-out focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none ${
          cycle === 'annual'
            ? 'bg-white/15 text-white shadow-sm'
            : 'text-slate-400 hover:text-white'
        }`}
        id="billing-toggle-annual"
      >
        Annual
        <span className="ml-1.5 text-xs text-emerald-400 font-semibold">-20%</span>
      </button>
    </div>
  );
}
