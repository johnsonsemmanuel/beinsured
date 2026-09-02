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
          <div className="fixed inset-x-0 bottom-4 z-40 flex justify-center items-center pointer-events-none px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="pointer-events-auto"
            >
              <button
                onClick={handleOpen}
                className="p-2.5 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl rounded-full text-slate-700 hover:bg-white hover:border-[#FEBD19] transition-all group cursor-pointer"
                aria-label="Cookie Policy"
              >
                <Cookie className="w-4 h-4 text-[#FEBD19] group-hover:rotate-12 transition-transform" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Main Cookie Consent Popup Banner */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-x-0 bottom-4 sm:bottom-6 z-50 flex justify-center items-center pointer-events-none px-3 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="pointer-events-auto w-full max-w-sm sm:max-w-md"
            >
              <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 p-4 sm:p-5 rounded-3xl shadow-2xl text-white space-y-4">
                
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-[#FEBD19]/20 rounded-xl text-[#FEBD19]">
                      <Cookie className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-white">Cookie & Privacy Notice</h4>
                      <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium">BeINsured Regulatory Compliance</p>
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

                {/* Content */}
                <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
                  We use essential cookies and local session state to ensure smooth digital policy lookup, secure mobile payment rails and regulatory compliance on BeInsured.
                </p>

                {/* Actions Footer */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2 border-t border-slate-800">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#FEBD19]">
                    <ShieldCheck className="w-4 h-4 text-[#FEBD19]" />
                    <span>NIC Compliant</span>
                  </div>

                  <div className="flex items-center gap-2 ml-auto">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="px-2.5 py-1.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                    >
                      Close
                    </button>
                    <PillButton 
                      variant="gold"
                      onClick={handleAccept}
                      className="py-1.5 px-3.5 text-xs"
                    >
                      Accept Cookies
                    </PillButton>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
