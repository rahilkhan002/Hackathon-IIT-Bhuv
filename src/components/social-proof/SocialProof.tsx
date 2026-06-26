import React from 'react';
import { StarIcon } from '@/components/shared/Icons';
import { testimonials, socialMetrics } from '@/data/testimonials';

/**
 * SocialProof — Metric-based social proof + testimonials.
 * More realistic than fake enterprise logos.
 */
export default function SocialProof() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Trusted by Data Teams Everywhere
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            Join hundreds of teams already automating their data pipelines.
          </p>
        </div>

        {/* Metrics bar */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto mb-16">
          {socialMetrics.map((metric) => (
            <div
              key={metric.label}
              className="text-center p-4 sm:p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-[transform,box-shadow] duration-[180ms] ease-out hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/5"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-4 h-4 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {testimonial.avatarInitials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
