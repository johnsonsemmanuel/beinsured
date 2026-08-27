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
      subtitle: "Chat with our verified WhatsApp bot for photo claims, instant registration, and digital sticker verification.",
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
      
      {/* iPhone 15 Pro Max Titanium Mockup Outer Shell */}
      <div className="relative w-[285px] sm:w-[315px] h-[580px] sm:h-[630px] rounded-[52px] p-[8px] bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 shadow-[0_30px_70px_-15px_rgba(15,23,42,0.45)] border border-slate-600/60 ring-1 ring-white/10 shrink-0">
        
        {/* iPhone 15 Pro Metallic Hardware Side Buttons */}
        <div className="absolute top-24 -left-1.5 w-1.5 h-7 bg-slate-600 rounded-l-md shadow-sm" /> {/* Action Button */}
        <div className="absolute top-36 -left-1.5 w-1.5 h-12 bg-slate-600 rounded-l-md shadow-sm" /> {/* Volume Up */}
        <div className="absolute top-52 -left-1.5 w-1.5 h-12 bg-slate-600 rounded-l-md shadow-sm" /> {/* Volume Down */}
        <div className="absolute top-40 -right-1.5 w-1.5 h-16 bg-slate-600 rounded-r-md shadow-sm" /> {/* Power Button */}

        {/* Pixel-Perfect Inner OLED Display Box */}
        <div className="relative w-full h-full bg-slate-950 rounded-[44px] overflow-hidden shadow-inner border border-slate-900">
          
          {/* Dynamic Island Pill Notch - Positioned Floating Comfortably Inside Screen (not touching top bezel) */}
          <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-[22px] bg-black rounded-full z-40 flex items-center justify-between px-2.5 shadow-md border border-slate-800/80 pointer-events-none">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700/60" /> {/* Front Camera Lens */}
            <div className="w-2 h-2 rounded-full bg-blue-950/90 border border-blue-900/60" /> {/* FaceID Sensor */}
          </div>

          {/* Screen Content - Edge-to-Edge Top to Down Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
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

          {/* Subtle Glass Reflection Glare */}
          <div className="pointer-events-none absolute inset-0 rounded-[44px] bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.07] z-30" />

          {/* Home Indicator Bar */}
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/70 backdrop-blur-md rounded-full z-40 pointer-events-none shadow-sm" />
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
