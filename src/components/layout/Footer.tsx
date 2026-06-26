import React from 'react';
import { FOOTER_COLUMNS, BRAND } from '@/constants';

/**
 * Footer — Multi-column layout.
 * Responsive: 4-col → 2-col → 1-col.
 */
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <div className="text-xl font-bold text-white tracking-tight mb-3">
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                DataFlow
              </span>{' '}
              AI
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              AI-powered data automation for modern teams. Connect everything, automate anything.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-white mb-4">{column.title}</h3>
              <ul className="space-y-3" role="list">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-[180ms] ease-out focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none rounded-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Social icons */}
            {['Twitter', 'GitHub', 'LinkedIn'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-sm text-slate-500 hover:text-white transition-colors duration-[180ms] ease-out focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none rounded-sm"
                aria-label={`${BRAND.name} on ${platform}`}
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
