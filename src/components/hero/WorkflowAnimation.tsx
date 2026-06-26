import React from 'react';

/**
 * WorkflowAnimation — CSS-only animated data flow diagram.
 *
 * Google Sheets → CRM → AI Agent → Slack
 *
 * Each node pulses in sequence using animation-delay.
 * Connecting lines animate with scaleX.
 * All CSS keyframes — zero JS animation.
 */
export default function WorkflowAnimation() {
  const steps = [
    { label: 'Sheets', color: 'from-emerald-400 to-green-500' },
    { label: 'CRM', color: 'from-blue-400 to-blue-500' },
    { label: 'AI Agent', color: 'from-violet-400 to-purple-500' },
    { label: 'Slack', color: 'from-amber-400 to-orange-500' },
  ];

  return (
    <div
      className="relative p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden"
      aria-hidden="true"
    >
      {/* Label */}
      <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-6 text-center">
        Your Data Pipeline
      </p>

      {/* Flow diagram */}
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        {steps.map((step, i) => (
          <React.Fragment key={step.label}>
            {/* Node */}
            <div
              className="flex flex-col items-center gap-2"
              style={{
                animation: 'flowNode 3s ease-in-out infinite',
                animationDelay: `${i * 0.5}s`,
              }}
            >
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
              >
                <span className="text-white text-lg sm:text-xl font-bold">
                  {step.label.charAt(0)}
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium whitespace-nowrap">
                {step.label}
              </span>
            </div>

            {/* Connector arrow */}
            {i < steps.length - 1 && (
              <div className="flex items-center -mt-5">
                <div
                  className="h-0.5 w-6 sm:w-10 bg-gradient-to-r from-slate-600 to-slate-500"
                  style={{
                    animation: 'flowLine 3s ease-in-out infinite',
                    animationDelay: `${i * 0.5 + 0.25}s`,
                  }}
                />
                <div
                  className="w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-slate-500"
                  style={{
                    animation: 'flowArrow 3s ease-in-out infinite',
                    animationDelay: `${i * 0.5 + 0.25}s`,
                  }}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Data particle animation line */}
      <div className="mt-6 h-1 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full w-1/4 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500"
          style={{
            animation: 'dataFlow 2.5s ease-in-out infinite',
          }}
        />
      </div>
    </div>
  );
}
