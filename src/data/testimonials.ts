// ============================================================
// DataFlow AI — Testimonials Data
// ============================================================

import type { Testimonial, HeroMetric } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Sarah Chen',
    role: 'VP of Engineering',
    company: 'TechFlow Inc.',
    quote:
      'DataFlow AI reduced our data pipeline setup time from weeks to hours. The AI agents are remarkably intelligent at understanding our data schemas.',
    rating: 5,
    avatarInitials: 'SC',
  },
  {
    id: 'testimonial-2',
    name: 'Marcus Rivera',
    role: 'Head of Data',
    company: 'ScaleUp Analytics',
    quote:
      'We processed 2 billion records last quarter with zero downtime. The real-time analytics dashboard gives us insights we never had before.',
    rating: 5,
    avatarInitials: 'MR',
  },
  {
    id: 'testimonial-3',
    name: 'Priya Sharma',
    role: 'CTO',
    company: 'Nexus Systems',
    quote:
      'The workflow automation saved us 40 engineering hours per week. Integration with our existing CRM was seamless — literally plug and play.',
    rating: 5,
    avatarInitials: 'PS',
  },
];

export const heroMetrics: HeroMetric[] = [
  {
    value: '500M+',
    label: 'Records Processed',
    description: 'Daily data throughput across all customers',
  },
  {
    value: '99.99%',
    label: 'Uptime SLA',
    description: 'Enterprise-grade reliability guarantee',
  },
  {
    value: 'SOC 2',
    label: 'Certified',
    description: 'Full compliance and security audit',
  },
];

export const socialMetrics = [
  { value: '500+', label: 'Teams automate daily' },
  { value: '12B+', label: 'Records processed monthly' },
  { value: '99.99%', label: 'Uptime guaranteed' },
];
