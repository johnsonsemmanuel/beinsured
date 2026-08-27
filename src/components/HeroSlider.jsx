import React, { useState, useEffect } from 'react';
import AnimatedTextCycle from './AnimatedTextCycle';
import PillButton from './PillButton';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { USSDIcon, WhatsAppIcon, MoMoIcon } from './ChannelLogos';

export default function HeroSlider({ onOpenChannelSelector, onOpenPolicyLookup }) {
  const slides = [
    {
      id: 1,
      badge: "Manage your car cover in one simple place",
      title: "Your car insurance made for",
      animatedWords: ["real life", "busy drivers", "instant cover", "peace of mind"],
      desc: "Get car coverage that supports your daily driving from Third-Party essentials to unexpected road accidents. Simple micro-plans, clear costs, and instant claims.",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1400&q=80",
      cta: "Get Car Cover"
    },
    {
      id: 2,
      badge: "Third-Party & Comprehensive Road Cover",
      title: "Compulsory road cover for",
      animatedWords: ["private cars", "commercial taxis", "delivery vans", "fleet vehicles"],
      desc: "Save on legally required road coverage against third-party bodily injury, property damage, and legal liabilities without paperwork or delays.",
      image: "/hero-slide-1.jpg",
      cta: "Explore Cover Options"
    },
    {
      id: 3,
      badge: "WhatsApp Claims & Fast MoMo Payouts",
      title: "File vehicle claims via",
      animatedWords: ["WhatsApp bot", "photo uploads", "direct MoMo", "24/7 support"],
      desc: "Had a collision or vehicle damage? Snap photos, upload on WhatsApp, and receive approved claim payouts directly into your Mobile Money wallet.",
      image: "/hero-slide-2.jpg",
      cta: "File a Claim Now"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[current];

  return (
    <section className="pt-6 sm:pt-10 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden min-h-[540px] sm:min-h-[620px] flex flex-col justify-between p-6 sm:p-12 shadow-float border border-slate-200/50">
        
        {/* Background Photography with Smooth Fading */}
        {slides.map((s, idx) => (
          <div 
            key={s.id}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
              idx === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img 
              src={s.image} 
              alt={s.badge} 
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-[6000ms]"
            />
            <div className="absolute inset-0 bg-slate-950/60 backdrop-contrast-[1.05]" />
          </div>
        ))}

        {/* Top Header Badge */}
        <div className="relative z-10 flex items-center justify-between gap-4">
          <div className="inline-block border-b-2 border-[#FEBD19] pb-0.5 text-xs font-extrabold uppercase tracking-wider text-white bg-slate-950/70 backdrop-blur-md px-3.5 py-1">
            {slide.badge}
          </div>

          {/* Slide Navigation Controls */}
          <div className="flex items-center gap-2 bg-slate-950/60 backdrop-blur-md p-1.5 rounded-full border border-white/20">
            <button 
              onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
              className="p-1 rounded-full text-white hover:text-[#FEBD19] hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[11px] font-mono text-white/90 px-1 font-bold">
              {current + 1} / {slides.length}
            </span>
            <button 
              onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
              className="p-1 rounded-full text-white hover:text-[#FEBD19] hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dynamic Center Slide Content */}
        <div className="relative z-10 max-w-3xl space-y-6 my-auto pt-10 pb-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            {slide.title}{" "}
            <AnimatedTextCycle 
              words={slide.animatedWords} 
              className="text-[#FEBD19]"
            />
          </h1>

          <p className="text-base sm:text-lg text-slate-100/95 font-medium leading-relaxed max-w-xl">
            {slide.desc}
          </p>
          
          {/* Pill CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <PillButton variant="gold" onClick={onOpenChannelSelector}>
              {slide.cta}
            </PillButton>
            
            <button
              onClick={onOpenPolicyLookup}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#FEBD19] transition-colors px-5 py-3 bg-black/40 backdrop-blur-md rounded-full border border-white/30 cursor-pointer"
            >
              <Search className="w-4 h-4 text-[#FEBD19]" />
              <span>Verify Car Policy</span>
            </button>
          </div>
        </div>

        {/* Bottom Slide Indicator & Channel Logos */}
        <div className="relative z-10 pt-6 border-t border-white/20 flex flex-wrap items-center justify-between gap-4 text-xs text-white/90 font-medium">
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  i === current ? 'w-8 bg-[#FEBD19]' : 'w-2 bg-white/40 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-white font-bold">
            <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-xl border border-white/20">
              <USSDIcon className="w-3.5 h-3.5 text-[#FEBD19]" />
              USSD <strong className="text-[#FEBD19]">*170#</strong>
            </span>
            <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-xl border border-white/20">
              <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
              WhatsApp Bot
            </span>
            <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-xl border border-white/20">
              <MoMoIcon className="w-4 h-4" />
              MTN MoMo Rail
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
