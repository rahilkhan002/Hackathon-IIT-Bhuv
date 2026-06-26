import React from 'react';
import { CheckIcon } from '@/components/shared/Icons';
import { Button } from '@/components/shared/Button';
import type { PricingTier } from '@/types';

interface PricingCardHeaderProps {
  tier: PricingTier;
}

interface PricingCardBodyProps {
  tier: PricingTier;
}

/**
 * PricingCardHeader — Static card header (name + description).
 * React.memo'd — NEVER rerenders when price changes.
 */
function PricingCardHeader({ tier }: PricingCardHeaderProps) {
  return (
    <>
      <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
      <p className="text-sm text-slate-400 mb-6">{tier.description}</p>
    </>
  );
}

/**
 * PricingCardBody — Static card body (features + CTA).
 * React.memo'd — NEVER rerenders when price changes.
 */
function PricingCardBody({ tier }: PricingCardBodyProps) {
  return (
    <>
      <ul className="space-y-3 mb-8 flex-1" role="list">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
            <CheckIcon className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={tier.popular ? 'primary' : 'secondary'}
        className="w-full mt-auto"
        id={`pricing-cta-${tier.id}`}
      >
        {tier.cta}
      </Button>
    </>
  );
}

export const MemoizedPricingCardHeader = React.memo(PricingCardHeader);
export const MemoizedPricingCardBody = React.memo(PricingCardBody);
