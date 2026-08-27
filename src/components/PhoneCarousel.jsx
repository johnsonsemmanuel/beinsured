import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Smartphone, ShieldCheck, Check, MessageSquare } from 'lucide-react';
import { WhatsAppIcon, USSDIcon, MoMoIcon } from './ChannelLogos';

export default function PhoneCarousel({ images, className = "" }) {
  // Default BeInsured Mobile Interface Mockups if images array is provided or default mockup cards
  const defaultSlides = [
    {
      type: "ussd",
      title: "USSD *170# Quick Dial",
      subtitle: "Buy car cover on any mobile phone without internet",
      tag: "MTN USSD Rail",
      screen: (
        <div className="bg-slate-900 text-white p-5 h-full flex flex-col justify-between font-mono">
          <div className="space-y-4">
            <div className="text-[10px] text-slate-400 border-b border-slate-800 pb-2 flex justify-between">
              <span>USSD Prompt</span>
              <span className="text-[#FEBD19]">*170#</span>
            </div>
            <div className="text-xs space-y-2 text-slate-200">
              <p className="font-bold text-[#FEBD19]">MM Menu &gt; Financial Services &gt; Insurance &gt; BeInsured</p>
              <div className="p-3 bg-slate-800/90 rounded-xl border border-slate-700 text-[11px] leading-relaxed space-y-1">
                <p>1. Private Vehicle (3rd Party)</p>
                <p>2. Private Vehicle (Comprehensive)</p>
                <p>3. Commercial / Fleet Cover</p>
                <p>4. Renew Policy</p>
              </div>
              <p className="text-[11px] text-emerald-400">Enter Reg: GX-1940-24</p>
            </div>
          </div>

          <div className="p-3 bg-[#FEBD19] text-slate-950 font-sans text-xs font-extrabold rounded-xl text-center shadow-md">
            Approved &amp; Issued Instantly
          </div>
        </div>
      )
    },
    {
      type: "whatsapp",
      title: "WhatsApp 24/7 Auto Bot",
      subtitle: "Instant photo upload for claims and digital sticker retrieval",
      tag: "WhatsApp Verified",
      screen: (
        <div className="bg-[#0B141A] text-white p-4 h-full flex flex-col justify-between font-sans">
          {/* Header */}
          <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
            <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white">
              <WhatsAppIcon className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold flex items-center gap-1">
                <span>BeInsured Auto Bot</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <div className="text-[10px] text-slate-400">+233 53 110 0408</div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="space-y-2.5 my-auto text-[11px]">
            <div className="bg-[#202C33] p-2.5 rounded-2xl rounded-tl-none max-w-[85%] text-slate-200">
              👋 Hi! Welcome to BeInsured. Send photo of vehicle damage to start claim.
            </div>
            <div className="bg-[#005C4B] p-2.5 rounded-2xl rounded-tr-none max-w-[85%] ml-auto text-white">
              Attached: 2 Accident Photos 📸
            </div>
            <div className="bg-[#202C33] p-2.5 rounded-2xl rounded-tl-none max-w-[85%] text-slate-200 border-l-2 border-[#FEBD19]">
              ✅ Claim #BE-8920 Verified! GHS 2,400 payout sent to MoMo wallet.
            </div>
          </div>

          <div className="text-[10px] text-slate-400 text-center pt-2">
            End-to-End Encrypted Policy Bot
          </div>
        </div>
      )
    },
    {
      type: "momo",
      title: "MTN MoMo App Marketplace",
      subtitle: "Direct in-app wallet auto-renewals & micro-insurance",
      tag: "MoMo Marketplace",
      screen: (
        <div className="bg-amber-400 text-slate-900 p-5 h-full flex flex-col justify-between font-sans">
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-slate-900/10">
              <div className="font-extrabold text-xs">MTN MoMo</div>
              <div className="text-[10px] bg-slate-900 text-amber-400 px-2 py-0.5 rounded-full font-bold">In-App</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl space-y-2 shadow-sm border border-amber-500/20">
              <div className="text-[11px] font-bold text-slate-500 uppercase">BeInsured Motor</div>
              <div className="text-sm font-extrabold text-slate-900">Third-Party Cover</div>
              <div className="text-xs text-slate-600 font-mono">Policy: #GH-NIC-88219</div>
              <div className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                <Check className="w-3 h-3" /> Active Sticker
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white text-xs p-3 rounded-xl font-bold text-center">
            Managed in MoMo App
          </div>
        </div>
      )
    }
  ];

  const slides = images && images.length > 0 ? images : defaultSlides;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const active = slides[current];

  return (
    <div className={`flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16 ${className}`}>
      
      {/* Phone Mockup Frame */}
      <div className="relative w-[280px] sm:w-[310px] h-[580px] sm:h-[620px] bg-slate-900 rounded-[50px] p-3.5 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.4)] border-4 border-slate-800 shrink-0">
        
        {/* Phone Speaker / Dynamic Island */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-950 rounded-full z-30 flex items-center justify-end px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
        </div>

        {/* Inner Phone Screen Container */}
        <div className="relative w-full h-full bg-slate-950 rounded-[38px] overflow-hidden pt-8 pb-4 flex flex-col justify-between border border-slate-800/80">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full h-full"
            >
              {active.src ? (
                <img 
                  src={active.src} 
                  alt={active.alt || "BeInsured Mobile Screen"} 
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                active.screen
              )}
            </motion.div>
          </AnimatePresence>

          {/* Bottom Phone Bar */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-400/40 rounded-full z-30" />
        </div>
      </div>

      {/* Slide Description & Controls */}
      <div className="max-w-md space-y-6 text-center md:text-left">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEBD19]/20 text-brand-dark text-xs font-extrabold border border-[#FEBD19]/40">
            <Smartphone className="w-3.5 h-3.5" />
            <span>{active.tag || "Mobile Experience"}</span>
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
            {active.title || "Mobile Native Insurance"}
          </h3>

          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
            {active.subtitle || "Access Third-Party & Comprehensive motor coverage right from your phone handset."}
          </p>
        </div>

        {/* Indicators and Arrows */}
        <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
            className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-[#FEBD19] hover:text-slate-900 transition-all cursor-pointer shadow-sm"
            aria-label="Previous screen"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  idx === current ? 'w-8 bg-[#FEBD19]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
            className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-[#FEBD19] hover:text-slate-900 transition-all cursor-pointer shadow-sm"
            aria-label="Next screen"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}
