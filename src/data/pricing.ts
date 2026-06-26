// ============================================================
// DataFlow AI — Pricing Data (Single Source of Truth)
// ============================================================
// All pricing logic derives from this configuration.
// JSON-LD structured data is generated from these values.

import type { PricingData } from '@/types';

export const pricingData: PricingData = {
  tiers: [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small teams getting started with data automation.',
      basePrice: 29,
      features: [
        '5 AI Agents',
        '1,000 automations/mo',
        '10 integrations',
        'Email support',
        'Basic analytics',
      ],
      cta: 'Start Free Trial',
    },
    {
      id: 'growth',
      name: 'Growth',
      description: 'For growing teams that need advanced automation capabilities.',
      basePrice: 79,
      features: [
        '25 AI Agents',
        '10,000 automations/mo',
        '50 integrations',
        'Priority support',
        'Advanced analytics',
        'Custom workflows',
        'Team collaboration',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For organizations that need unlimited scale and dedicated support.',
      basePrice: 199,
      features: [
        'Unlimited AI Agents',
        'Unlimited automations',
        '200+ integrations',
        'Dedicated support',
        'Real-time analytics',
        'Custom workflows',
        'SSO & SAML',
        'SLA guarantee',
      ],
      cta: 'Contact Sales',
    },
  ],

  regions: {
    USD: 1,
    EUR: 0.92,
    INR: 83,
  },

  annualDiscount: 0.8,

  currencySymbols: {
    USD: '$',
    EUR: '€',
    INR: '₹',
  },
};
