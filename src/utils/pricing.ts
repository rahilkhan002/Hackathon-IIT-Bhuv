// ============================================================
// DataFlow AI — Price Calculation Utility
// ============================================================
// Pure function — no side effects, easy to test.

import type { Currency, BillingCycle } from '@/types';
import { pricingData } from '@/data/pricing';

/**
 * Calculates the display price for a tier.
 * 
 * Formula: basePrice × currencyMultiplier × discount
 * 
 * Annual discount is applied as a multiplier (0.8 = 20% off).
 */
export function calculatePrice(
  basePrice: number,
  currency: Currency,
  billingCycle: BillingCycle
): string {
  const multiplier = pricingData.regions[currency];
  
  let price = basePrice * multiplier;
  if (billingCycle === 'annual') {
    // Total annual amount with 20% discount
    price = price * 12 * pricingData.annualDiscount;
  }

  // Format: no decimals for INR (large numbers), 2 decimals for USD/EUR
  if (currency === 'INR') {
    return Math.round(price).toLocaleString('en-IN');
  }

  return price.toFixed(2);
}
