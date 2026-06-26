'use client';

import React, { useSyncExternalStore } from 'react';
import { pricingStore } from '@/store/pricingStore';
import { calculatePrice } from '@/utils/pricing';
import { pricingData } from '@/data/pricing';

interface PriceDisplayProps {
  basePrice: number;
}

/**
 * PriceDisplay — Subscribes directly to the vanilla pricing store.
 * Only this DOM node reflows when state changes. Parent NEVER renders.
 */
export function PriceDisplay({ basePrice }: PriceDisplayProps) {
  const state = useSyncExternalStore(pricingStore.subscribe, pricingStore.getState, pricingStore.getState);
  
  const price = calculatePrice(basePrice, state.currency, state.billingCycle);
  const currencySymbol = pricingData.currencySymbols[state.currency];
  const billingLabel = state.billingCycle === 'monthly' ? 'mo' : 'yr';
  const billingSubtext = state.billingCycle === 'annual' ? 'Billed annually' : undefined;

  return (
    <div className="mb-6">
      <div className="flex items-baseline gap-1">
        <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
          {currencySymbol}
          {price}
        </span>
        <span className="text-base text-slate-400 font-medium">/{billingLabel}</span>
      </div>
      <div className="h-5 mt-1">
        {billingSubtext && (
          <span className="text-sm text-emerald-400 font-medium">{billingSubtext}</span>
        )}
      </div>
    </div>
  );
}
