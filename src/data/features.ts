// ============================================================
// DataFlow AI — Feature Data
// ============================================================

import {
  BrainCircuitIcon,
  WorkflowIcon,
  AnalyticsIcon,
  ShieldIcon,
} from '@/components/shared/Icons';
import type { Feature } from '@/types';

export const features: Feature[] = [
  {
    id: 'ai-agents',
    title: 'AI Agents',
    description:
      'Intelligent agents that learn your data patterns, predict anomalies, and automate complex transformations. Configure once, let AI handle the rest.',
    icon: BrainCircuitIcon,
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    description:
      'Connect and automate across 200+ integrations with a visual drag-and-drop builder. Build sophisticated pipelines without writing a single line of code.',
    icon: WorkflowIcon,
    gradient: 'from-violet-500 to-purple-400',
  },
  {
    id: 'real-time-analytics',
    title: 'Real-time Analytics',
    description:
      'Live dashboards with predictive insights powered by machine learning. Monitor every data flow in real time with intelligent alerting.',
    icon: AnalyticsIcon,
    gradient: 'from-emerald-500 to-teal-400',
  },
  {
    id: 'data-security',
    title: 'Data Security',
    description:
      'Enterprise-grade encryption, SOC 2 compliance, and role-based access controls. Your data is protected at every stage of the pipeline.',
    icon: ShieldIcon,
    gradient: 'from-amber-500 to-orange-400',
  },
];
