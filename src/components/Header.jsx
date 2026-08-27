import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import PillButton from './PillButton';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header({ onOpenChannelSelector }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Check initial scroll state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/coverage', label: 'Car Coverage' },
    { path: '/claims', label: 'Claims' },
    { path: '/partners', label: 'Partners & Insurers' },
    { path: '/about', label: 'About Us' },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 py-3.5 px-4 sm:px-8 transition-all duration-300 ${
        scrolled 
          ? 'bg-brand-cream/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm' 
          : 'bg-transparent border-b border-transparent shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Official Brand Logo */}
        <Link 
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 cursor-pointer group py-1"
        >
          <motion.img 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            src="/logo.png" 
            alt="BeINsured Car Insurance Logo" 
            className="h-11 sm:h-14 md:h-16 w-auto object-contain"
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
                `relative py-1 hover:text-[#FEBD19] transition-colors cursor-pointer ${
                  isActive ? 'text-brand-dark font-bold' : ''
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FEBD19] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
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
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-200/50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer Navigation with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden mt-3 border-t border-slate-200/60 overflow-hidden bg-white rounded-2xl shadow-xl p-4 space-y-3"
          >
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
                    `text-left px-3.5 py-2.5 rounded-xl font-medium transition-colors ${
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
