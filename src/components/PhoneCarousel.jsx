import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Smartphone } from 'lucide-react';

import ussdImg from '../assets/ussd image.jpeg';
import whatsappImg from '../assets/Whatsapp image.jpeg';
import momoImg from '../assets/Mtn MOmo insure.jpeg';

export default function PhoneCarousel({ images, className = "" }) {
  const defaultSlides = [
    {
      src: ussdImg,
      alt: "USSD *170# BeInsured Menu Screen",
      title: "USSD *170# Shortcode Channel",
      subtitle: "Instantly register vehicle cover by dialing *170# on any mobile handset without internet.",
      tag: "USSD *170# Channel"
    },
    {
      src: whatsappImg,
      alt: "WhatsApp Bot Insurance Chat Screen",
      title: "WhatsApp 24/7 Auto Bot",
      subtitle: "Chat with our verified WhatsApp bot (+233 53 110 0408) for photo claims, registration, and sticker verification.",
      tag: "WhatsApp Verified Bot"
    },
    {
      src: momoImg,
      alt: "MTN MoMo Insurance Marketplace Screen",
      title: "MTN MoMo Marketplace",
      subtitle: "Access BeInsured car insurance directly inside the official MTN MoMo mobile application.",
      tag: "MTN MoMo Rail"
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
      <div className="relative w-[280px] sm:w-[310px] h-[560px] sm:h-[600px] bg-slate-900 rounded-[50px] p-3.5 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.4)] border-4 border-slate-800 shrink-0">
        
        {/* Phone Speaker / Dynamic Island */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-950 rounded-full z-30 flex items-center justify-end px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
        </div>

        {/* Inner Phone Screen Container */}
        <div className="relative w-full h-full bg-slate-950 rounded-[38px] overflow-hidden pt-8 pb-4 border border-slate-800/80">
          
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

          {/* Bottom Phone Home Indicator Bar */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-400/40 rounded-full z-30 pointer-events-none" />
        </div>
      </div>

      {/* Slide Description & Controls */}
      <div className="max-w-md space-y-6 text-center md:text-left">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEBD19]/20 text-brand-dark text-xs font-extrabold border border-[#FEBD19]/40">
            <Smartphone className="w-3.5 h-3.5" />
            <span>{active.tag || "Mobile Channel"}</span>
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
