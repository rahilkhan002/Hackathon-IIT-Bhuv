// ============================================================
// DataFlow AI — Structured Data (JSON-LD)
// ============================================================
// Generated dynamically from pricing config — no hardcoded prices.

import { pricingData } from './pricing';
import { BRAND } from '@/constants';

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BRAND.name,
    url: BRAND.url,
    logo: `${BRAND.url}/logo.svg`,
    description: BRAND.description,
    sameAs: [],
  };
}

export function generateSoftwareSchema() {
  const allPrices = pricingData.tiers.map((t) => t.basePrice);
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: BRAND.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: BRAND.description,
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: String(Math.min(...allPrices)),
      highPrice: String(Math.max(...allPrices)),
      priceCurrency: 'USD',
      offerCount: String(allPrices.length),
    },
  };
}

export function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is DataFlow AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'DataFlow AI is an AI-powered data automation platform that connects spreadsheets, CRMs, APIs, and databases to automate your entire data pipeline.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the pricing work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `DataFlow AI offers three plans starting at $${Math.min(...pricingData.tiers.map(t => t.basePrice))}/month. Annual billing saves you 20%.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Is my data secure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. DataFlow AI is SOC 2 certified with enterprise-grade encryption, role-based access controls, and a 99.99% uptime SLA.',
        },
      },
    ],
  };
}
