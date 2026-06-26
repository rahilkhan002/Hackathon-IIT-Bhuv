'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { NAV_LINKS, BRAND } from '@/constants';
import { Button } from '@/components/shared/Button';
import { MenuIcon, XIcon } from '@/components/shared/Icons';

/**
 * Header — Sticky navigation with mobile menu.
 */
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-sm border-b border-white/5">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-white tracking-tight focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none rounded-lg px-1"
        >
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            DataFlow
          </span>{' '}
          AI
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 font-medium transition-colors duration-[180ms] ease-out hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none rounded-lg px-2 py-1"
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" id="nav-cta">
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none rounded-lg"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[grid-template-rows] duration-[350ms] ease-in-out grid ${
          mobileOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-4 space-y-2 border-t border-white/5 pt-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm text-slate-300 font-medium hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-[180ms] ease-out focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <Button size="sm" className="w-full" id="mobile-nav-cta">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
