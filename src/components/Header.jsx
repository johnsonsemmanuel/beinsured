import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import PillButton from './PillButton';

export default function Header({ onOpenChannelSelector }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/coverage', label: 'Car Coverage' },
    { path: '/claims', label: 'Claims' },
    { path: '/partners', label: 'Partners & Insurers' },
    { path: '/about', label: 'About Us' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-brand-cream/95 backdrop-blur-md border-b border-slate-200/60 py-3.5 px-4 sm:px-8 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Official Brand Logo */}
        <Link 
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 cursor-pointer group py-1"
        >
          <img 
            src="/logo.png" 
            alt="BeINsured Car Insurance Logo" 
            className="h-11 sm:h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={({ isActive }) => 
                `hover:text-[#FEBD19] transition-colors cursor-pointer ${
                  isActive ? 'text-brand-dark font-bold border-b-2 border-brand-gold pb-0.5' : ''
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Action CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <PillButton variant="gold" onClick={onOpenChannelSelector}>
              Get Car Cover
            </PillButton>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-200/50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 pt-4 border-t border-slate-200/60 pb-4 px-2 space-y-3 bg-white rounded-2xl shadow-xl p-4">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={({ isActive }) =>
                  `text-left px-3 py-2 rounded-xl font-medium transition-colors ${
                    isActive ? 'bg-[#FEBD19]/20 text-brand-dark font-bold' : 'text-slate-800 hover:bg-brand-cream'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="pt-2">
            <PillButton 
              variant="gold" 
              onClick={() => { setMobileMenuOpen(false); onOpenChannelSelector(); }} 
              className="w-full justify-center"
            >
              Get Car Cover
            </PillButton>
          </div>
        </div>
      )}
    </header>
  );
}
