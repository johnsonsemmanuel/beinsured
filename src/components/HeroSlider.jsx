import React, { useState, useEffect } from 'react';
import AnimatedTextCycle from './AnimatedTextCycle';
import PillButton from './PillButton';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroSlider({ onOpenChannelSelector, onOpenPolicyLookup }) {
  const slides = [
    {
      id: 1,
      title: "Your car insurance made for",
      animatedWords: ["real life", "busy drivers", "instant cover", "peace of mind"],
      desc: "Get car protection that supports your daily driving from Third-Party essentials to unexpected road accidents. Simple micro-plans, clear costs, and instant cover.",
      image: "/taxi-imagess.jpg",
      cta: "Get Car Insurance"
    },
    {
      id: 2,
      title: "Compulsory road protection for",
      animatedWords: ["private cars", "commercial taxis", "delivery vans", "fleet vehicles"],
      desc: "Save on legally required road protection against third-party bodily injury, property damage, and legal liabilities without paperwork or delays.",
      image: "/trotro-station.jpg",
      cta: "Explore Protection Options"
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
    <section className="pt-4 sm:pt-10 px-3 sm:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-2xl sm:rounded-4xl overflow-hidden min-h-[460px] sm:min-h-[600px] flex flex-col justify-between p-4 sm:p-12 shadow-float border border-slate-200/50">
        
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
              alt={s.title} 
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-[6000ms]"
            />
            <div className="absolute inset-0 bg-slate-950/65 backdrop-contrast-[1.05]" />
          </div>
        ))}

        {/* Top Header Controls (Without Badges) */}
        <div className="relative z-10 flex items-center justify-end">
          {/* Slide Navigation Controls */}
          <div className="flex items-center gap-1.5 bg-slate-950/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
            <button 
              onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
              className="p-1 rounded-full text-white hover:text-[#FEBD19] hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
            <span className="text-[10px] sm:text-[11px] font-mono text-white/90 px-1 font-bold">
              {current + 1} / {slides.length}
            </span>
            <button 
              onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
              className="p-1 rounded-full text-white hover:text-[#FEBD19] hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>

        {/* Dynamic Center Slide Content */}
        <div className="relative z-10 max-w-3xl space-y-4 sm:space-y-6 my-auto pt-6 sm:pt-10 pb-6 sm:pb-8">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            {slide.title}{" "}
            <AnimatedTextCycle 
              words={slide.animatedWords} 
              className="text-[#FEBD19]"
            />
          </h1>

          <p className="text-xs sm:text-base md:text-lg text-slate-100/95 font-medium leading-relaxed max-w-xl">
            {slide.desc}
          </p>
          
          {/* Pill CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            <PillButton variant="gold" onClick={onOpenChannelSelector}>
              {slide.cta}
            </PillButton>
            
            <button
              onClick={onOpenPolicyLookup}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white hover:text-[#FEBD19] transition-colors px-4 sm:px-5 py-2.5 sm:py-3 bg-black/40 backdrop-blur-md rounded-full border border-white/30 cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FEBD19]" />
              <span>Verify Car Policy</span>
            </button>
          </div>
        </div>

        {/* Bottom Slide Indicator */}
        <div className="relative z-10 pt-4 sm:pt-6 border-t border-white/20 flex flex-wrap items-center justify-between gap-3 text-[11px] sm:text-xs text-white/90 font-medium">
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  i === current ? 'w-6 sm:w-8 bg-[#FEBD19]' : 'w-2 bg-white/40 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-[11px] sm:text-xs text-white/90 font-semibold">
            <span>Instant Cover on USSD <strong className="text-[#FEBD19]">*170#</strong></span>
            <span>WhatsApp Bot</span>
            <span>MTN MoMo Integrated</span>
          </div>
        </div>

      </div>
    </section>
  );
}
