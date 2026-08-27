import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Check, ShieldCheck } from 'lucide-react';
import PillButton from './PillButton';

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('beinsured_cookie_consent');
    if (!consent) {
      // Auto open popup after a brief 1s delay on initial visit
      const timer = setTimeout(() => setIsOpen(true), 1000);
      return () => clearTimeout(timer);
    } else {
      setHasConsented(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('beinsured_cookie_consent', 'accepted');
    setHasConsented(true);
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      {/* Floating Re-Open Badge Button anchored at bottom center */}
      <AnimatePresence>
        {(!isOpen || hasConsented) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 pointer-events-auto flex items-center justify-center"
          >
            <button
              onClick={handleOpen}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl rounded-full text-xs font-bold text-slate-800 hover:text-brand-dark hover:bg-white hover:border-[#FEBD19] transition-all group cursor-pointer"
            >
              <Cookie className="w-4 h-4 text-[#FEBD19] group-hover:rotate-12 transition-transform" />
              <span>Cookie Policy</span>
              {hasConsented && <Check className="w-3.5 h-3.5 text-[#FEBD19] ml-0.5" />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Cookie Consent Popup Banner */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-auto sm:max-w-md pointer-events-auto"
          >
            <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 p-5 rounded-3xl shadow-2xl text-white space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-[#FEBD19]/20 rounded-xl text-[#FEBD19]">
                    <Cookie className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-white">Cookie & Privacy Notice</h4>
                    <p className="text-[11px] text-slate-400 font-medium">BeINsured Regulatory Compliance</p>
                  </div>
                </div>
                
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  aria-label="Close policy modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                We use essential cookies and local session state to ensure smooth digital policy lookup, secure mobile payment rails, and regulatory compliance on BeInsured.
              </p>

              <div className="flex items-center justify-between gap-3 pt-1 border-t border-slate-800">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#FEBD19]">
                  <ShieldCheck className="w-4 h-4 text-[#FEBD19]" />
                  <span>NIC Compliant</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    Close
                  </button>
                  <PillButton 
                    variant="gold"
                    onClick={handleAccept}
                    className="py-1.5 px-4 text-xs"
                  >
                    Accept Cookies
                  </PillButton>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
