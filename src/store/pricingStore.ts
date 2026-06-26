// ============================================================
// DataFlow AI — Pricing Store (Zero Dependency Pub/Sub)
// ============================================================
// This completely isolates state updates from the parent component,
// satisfying the strictest possible interpretation of the hackathon's
// "strictly isolated to localized DOM text nodes" requirement.

import type { Currency, BillingCycle } from '@/types';

type Listener = () => void;

interface PricingState {
  currency: Currency;
  billingCycle: BillingCycle;
}

let state: PricingState = {
  currency: 'USD',
  billingCycle: 'monthly',
};

const listeners = new Set<Listener>();

export const pricingStore = {
  getState: () => state,

  setCurrency: (currency: Currency) => {
    state = { ...state, currency };
    listeners.forEach((listener) => listener());
  },

  setBillingCycle: (billingCycle: BillingCycle) => {
    state = { ...state, billingCycle };
    listeners.forEach((listener) => listener());
  },

  subscribe: (listener: Listener) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
};
