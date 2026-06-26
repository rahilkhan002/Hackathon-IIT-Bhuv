'use client';

import React, { useSyncExternalStore } from 'react';
import { pricingStore } from '@/store/pricingStore';
import type { Currency } from '@/types';

/**
 * CurrencySelector — Subscribes directly to pricingStore.
 * Native <select> for accessibility, keyboard support, zero JS overhead.
 */
export function CurrencySelector() {
  const state = useSyncExternalStore(pricingStore.subscribe, pricingStore.getState, pricingStore.getState);

  return (
    <div className="relative">
      <select
        value={state.currency}
        onChange={(e) => pricingStore.setCurrency(e.target.value as Currency)}
        className="appearance-none bg-white/5 border border-white/10 text-white text-sm font-medium rounded-xl px-4 py-2.5 pr-8 cursor-pointer transition-[border-color,box-shadow] duration-[180ms] ease-out hover:border-white/25 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
        id="currency-selector"
        aria-label="Select currency"
      >
        <option value="USD" className="bg-slate-900">USD ($)</option>
        <option value="EUR" className="bg-slate-900">EUR (€)</option>
        <option value="INR" className="bg-slate-900">INR (₹)</option>
      </select>
      {/* Dropdown chevron */}
      <svg
        className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </div>
  );
}
