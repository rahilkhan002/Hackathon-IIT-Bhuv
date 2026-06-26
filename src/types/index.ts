// ============================================================
// DataFlow AI — Shared TypeScript Interfaces
// ============================================================

// ---- Pricing ----

export type Currency = 'USD' | 'EUR' | 'INR';
export type BillingCycle = 'monthly' | 'annual';

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface PricingData {
  tiers: PricingTier[];
  regions: Record<Currency, number>;
  annualDiscount: number;
  currencySymbols: Record<Currency, string>;
}

// ---- Features ----

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
}

// ---- Testimonials ----

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatarInitials: string;
}

// ---- Hero Metrics ----

export interface HeroMetric {
  value: string;
  label: string;
  description: string;
}

// ---- Navigation ----

export interface NavLink {
  label: string;
  href: string;
}

// ---- Footer ----

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}
