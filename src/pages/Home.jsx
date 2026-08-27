import React from 'react';
import SectionTag from '../components/SectionTag';
import PillButton from '../components/PillButton';
import LegitimacyBanner from '../components/LegitimacyBanner';
import AnimatedTextCycle from '../components/AnimatedTextCycle';
import PinnedHowItWorks from '../components/PinnedHowItWorks';
import { Car, ShieldCheck, CheckCircle2, MessageSquare, ArrowRight, Play, Search, HelpCircle, AlertTriangle, FileText, ChevronRight } from 'lucide-react';

export default function Home({ onOpenChannelSelector, onOpenPolicyLookup, setActivePage }) {
  // High-res Unsplash vehicle and driver photography
  const images = {
    heroCar: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1400&q=80",
    aboutDriver: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
    thirdParty: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80",
    roadsideAssist: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80",
    ctaDriver: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      
      {/* 1. HERO SECTION */}
      <section className="pt-6 sm:pt-10 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden min-h-[540px] sm:min-h-[620px] flex flex-col justify-between p-6 sm:p-12 shadow-float border border-slate-200/50">
          
          {/* Background Photography */}
          <div className="absolute inset-0 z-0">
            <img 
              src={images.heroCar} 
              alt="Car driving on scenic road" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-slate-950/50 backdrop-contrast-[1.05]" />
          </div>

          {/* Top Header Badge - Underlined Badge Design ONLY */}
          <div className="relative z-10">
            <div className="inline-block border-b-2 border-[#FEBD19] pb-0.5 text-xs font-extrabold uppercase tracking-wider text-white bg-slate-950/70 backdrop-blur-md px-3.5 py-1">
              Manage your car cover in one simple place
            </div>
          </div>

          {/* Center Content with AnimatedTextCycle */}
          <div className="relative z-10 max-w-3xl space-y-6 my-auto pt-10 pb-8">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Your car insurance made for{" "}
              <AnimatedTextCycle 
                words={["real life", "busy drivers", "instant cover", "peace of mind"]} 
                className="text-[#FEBD19]"
              />
            </h1>
            <p className="text-base sm:text-lg text-slate-100/95 font-medium leading-relaxed max-w-xl">
              Get car coverage that supports your daily driving from Third-Party essentials to unexpected road accidents. Simple micro-plans, clear costs, and instant claims.
            </p>
            
            {/* Pill CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <PillButton variant="gold" onClick={onOpenChannelSelector}>
                Get Car Cover
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

          {/* Bottom Trust Indicators - Clean text */}
          <div className="relative z-10 pt-6 border-t border-white/20 flex flex-wrap items-center justify-between gap-4 text-xs text-white/90 font-medium">
            <div>
              Instant Cover on USSD <strong className="text-[#FEBD19]">*170#</strong>
            </div>
            <div>
              WhatsApp Car Assistant
            </div>
            <div>
              MTN MoMo Integrated
            </div>
          </div>

        </div>
      </section>

      {/* 2. LEGITIMACY & VERIFICATION BANNER */}
      <LegitimacyBanner onOpenChannelSelector={onOpenChannelSelector} />

      {/* 3. ABOUT US / PURPOSE STATEMENT */}
      <section id="about" className="px-4 sm:px-8 max-w-7xl mx-auto space-y-6">
        <SectionTag text="About Us" />

        <div className="max-w-3xl space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight leading-snug">
            Insuring your car shouldn’t feel overwhelming.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
            We focus on making motor insurance clear, simple, and built around real driver needs so you can feel confident about the protection you choose.
          </p>
        </div>

        {/* 2-Column Visual & Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-2">
          
          {/* Left: Image Card */}
          <div className="md:col-span-6 relative group rounded-3xl overflow-hidden shadow-card border border-slate-200/80 h-64 sm:h-80">
            <img 
              src={images.aboutDriver} 
              alt="Driver behind steering wheel" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-slate-950/30 flex items-center justify-center">
              <button 
                onClick={onOpenChannelSelector}
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold tracking-wide border-b-2 border-[#FEBD19] hover:bg-slate-900 transition-all shadow-lg cursor-pointer rounded-full"
              >
                <Play className="w-3.5 h-3.5 fill-[#FEBD19] text-[#FEBD19]" />
                <span>See How It Works</span>
              </button>
            </div>
          </div>

          {/* Right: Focused Text Block */}
          <div className="md:col-span-6 space-y-5">
            <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
              Our car insurance plans are designed to be easy to understand and simple to manage directly on your mobile handset.
            </p>
            
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 space-y-2 shadow-sm">
              <div className="font-bold text-xs uppercase tracking-wider text-brand-dark flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FEBD19]" />
                <span>Built for Ghana Drivers</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Enter your vehicle registration number on USSD *170# or WhatsApp, pay via MoMo, and receive your digital insurance verification immediately.
              </p>
            </div>

            <PillButton variant="gold" onClick={onOpenChannelSelector}>
              Select Access Channel
            </PillButton>
          </div>

        </div>
      </section>

      {/* 4. CAR COVERAGE & BENEFITS GRID WITH ANIMATED TEXT CYCLE */}
      <section id="coverage" className="px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
        
        {/* Header Badge - Underlined */}
        <div className="space-y-4">
          <SectionTag text="Car Coverage" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-7">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
                Car cover that fits{" "}
                <AnimatedTextCycle 
                  words={["your driving life", "your daily commute", "your exact budget"]} 
                  className="text-brand-dark underline decoration-[#FEBD19] decoration-4 underline-offset-4"
                />
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                We built a smarter way to protect your vehicle, one that's simple, transparent, and designed around real road needs.
              </p>
            </div>
          </div>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          
          {/* Card 1: Third Party & Essentials */}
          <div className="relative rounded-3xl overflow-hidden min-h-[420px] flex flex-col justify-end p-6 shadow-card border border-slate-200/80 group">
            <img 
              src={images.thirdParty} 
              alt="Car maintenance" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-slate-950/60" />

            <div className="relative z-10 space-y-2 text-white">
              <h3 className="text-xl font-bold tracking-tight">
                Third-party essentials
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
                Save on compulsory road coverage against third-party bodily injury, property damage, and legal liabilities without unexpected costs.
              </p>
            </div>
          </div>

          {/* Card 2: Comprehensive & Accident Assistance */}
          <div className="relative rounded-3xl overflow-hidden min-h-[420px] flex flex-col justify-end p-6 shadow-card border border-slate-200/80 group">
            <img 
              src={images.roadsideAssist} 
              alt="Driver with smartphone near vehicle" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-slate-950/60" />

            <div className="relative z-10 space-y-2 text-white">
              <h3 className="text-xl font-bold tracking-tight">
                Accident support when you need it
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
                Report vehicle damages or road collisions via WhatsApp for rapid verification and claim processing.
              </p>
            </div>
          </div>

          {/* Card 3: Solid Brand Gold Card */}
          <div className="card-gold min-h-[420px] flex flex-col justify-between p-8">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-brand-dark flex items-center justify-center text-[#FEBD19]">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug text-brand-dark">
                Get help choosing car cover, managing policy renewals, and filing vehicle claims at every step.
              </h3>
            </div>

            <div className="pt-8">
              <PillButton variant="dark" onClick={onOpenChannelSelector}>
                Talk to an Advisor
              </PillButton>
            </div>
          </div>

        </div>

      </section>

      {/* 5. HOW IT WORKS SECTION WITH ANIMATED FLOW ARROWS */}
      <section id="how-it-works" className="px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
        <SectionTag text="How It Works" />

        <div className="space-y-3 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            3 simple steps to cover your car
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            No long queues or paper forms. Get valid car insurance directly on your mobile handset.
          </p>
        </div>

        {/* Pinned Step Cards Flow with Animated SVG Path */}
        <PinnedHowItWorks className="pt-4" />
      </section>

      {/* 6. CLAIMS GUIDANCE SECTION */}
      <section id="claims" className="px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="card-cream p-8 sm:p-12 space-y-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <SectionTag text="Vehicle Claims" />
              <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
                Filing a vehicle claim is paperless and fast
              </h2>
            </div>
            <PillButton variant="gold" onClick={onOpenChannelSelector}>
              File Claim on WhatsApp
            </PillButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-200/80">
            <div className="space-y-2">
              <div className="font-bold text-sm text-slate-900">Step 1: Snap Photos</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Take photos of the vehicle damage or collision scene and send them directly to our WhatsApp bot.
              </p>
            </div>
            <div className="space-y-2">
              <div className="font-bold text-sm text-slate-900">Step 2: Underwriter Assessment</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Your claim details are assessed rapidly by licensed partner insurance underwriters.
              </p>
            </div>
            <div className="space-y-2">
              <div className="font-bold text-sm text-slate-900">Step 3: Direct MoMo Payout</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Approved repairs or claim funds are deposited straight into your registered MTN MoMo wallet.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 7. PARTNERS & UNDERWRITERS BANNER */}
      <section id="partners" className="px-4 sm:px-8 max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <SectionTag text="Partners & Insurers" />
          <button 
            onClick={() => { setActivePage('partners'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-xs font-bold text-brand-dark hover:text-[#FEBD19] hover:underline flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>View Underwriter Directory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg font-extrabold text-brand-dark">Underwritten by Licensed Motor Insurers</h3>
            <p className="text-xs text-slate-600 max-w-md">
              All BeINsured motor policies are underwritten by authorized partner insurance institutions under national regulatory frameworks.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="px-4 py-2 bg-brand-cream border border-slate-200 font-extrabold text-slate-800 text-xs uppercase tracking-wider rounded-xl">
              MTN MoMo Rail
            </div>
            <div className="px-4 py-2 bg-brand-cream border border-slate-200 font-extrabold text-slate-800 text-xs uppercase tracking-wider rounded-xl">
              Licensed Underwriters
            </div>
            <div className="px-4 py-2 bg-brand-cream border border-slate-200 font-extrabold text-slate-800 text-xs uppercase tracking-wider rounded-xl">
              WhatsApp Verified
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION WITH ANIMATED TEXT CYCLE */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <SectionTag text="Get Started Today" className="justify-center" />
          <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
            Take the first step toward{" "}
            <AnimatedTextCycle 
              words={["simpler car insurance", "instant coverage", "stress-free claims"]} 
              className="text-brand-dark underline decoration-[#FEBD19] decoration-4 underline-offset-4"
            />
          </h2>
        </div>

        {/* Dual Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          
          {/* Left Off-White Card */}
          <div className="card-cream min-h-[380px] flex flex-col justify-center items-center text-center p-8 sm:p-12 space-y-6">
            <p className="text-lg sm:text-xl font-bold text-brand-dark max-w-md leading-snug">
              Find a car plan that helps you stay protected on the road and prepared for what's ahead.
            </p>

            <PillButton variant="gold" onClick={onOpenChannelSelector}>
              Explore All Channels
            </PillButton>
          </div>

          {/* Right Photographic Image Card */}
          <div className="relative rounded-3xl overflow-hidden min-h-[380px] flex flex-col justify-between p-8 sm:p-10 shadow-card border border-slate-200/80 group">
            <img 
              src={images.ctaDriver} 
              alt="Confident car owner" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-slate-950/40" />

            <div className="relative z-10 max-w-sm text-white">
              <h3 className="text-xl sm:text-2xl font-extrabold leading-snug">
                Join thousands of drivers choosing a smarter, simpler way to cover their vehicle.
              </h3>
            </div>

            <div className="relative z-10 text-xs font-semibold text-white/90 tracking-wide pt-12">
              A simpler way to stay covered starts here.
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}
