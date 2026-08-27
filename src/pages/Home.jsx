import React from 'react';
import { Link } from 'react-router-dom';
import SectionTag from '../components/SectionTag';
import PillButton from '../components/PillButton';
import LegitimacyBanner from '../components/LegitimacyBanner';
import AnimatedTextCycle from '../components/AnimatedTextCycle';
import PinnedHowItWorks from '../components/PinnedHowItWorks';
import HeroSlider from '../components/HeroSlider';
import PhoneCarousel from '../components/PhoneCarousel';
import { ChannelBadgeGroup } from '../components/ChannelLogos';
import { Car, ShieldCheck, CheckCircle2, MessageSquare, ArrowRight, Play, Search, HelpCircle, AlertTriangle, FileText, ChevronRight } from 'lucide-react';

export default function Home({ onOpenChannelSelector, onOpenPolicyLookup }) {
  const images = {
    aboutDriver: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
    thirdParty: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80",
    roadsideAssist: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80",
    ctaDriver: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      
      {/* 1. HERO SLIDER SECTION */}
      <HeroSlider 
        onOpenChannelSelector={onOpenChannelSelector}
        onOpenPolicyLookup={onOpenPolicyLookup}
      />

      {/* 2. LEGITIMACY & VERIFICATION BANNER */}
      <LegitimacyBanner onOpenChannelSelector={onOpenChannelSelector} />

      {/* 3. MOBILE APP & CHANNEL SHOWCASE */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <SectionTag text="Mobile-Native Insurance" className="justify-center" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Designed to fit directly in your pocket
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            See how BeInsured works seamlessly on your smartphone handset via USSD, WhatsApp, and Mobile Money.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-card">
          <PhoneCarousel />
        </div>
      </section>

      {/* 4. ABOUT US / PURPOSE STATEMENT */}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 items-center">
          <div className="relative group rounded-3xl overflow-hidden shadow-card border border-slate-200/80 h-56 sm:h-64">
            <img 
              src={images.aboutDriver} 
              alt="Confident car owner inside vehicle" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-slate-950/20" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 flex items-center justify-between">
              <span>Licensed Underwriter Backed</span>
              <span className="text-emerald-600">Verified Sticker</span>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
              Our plans are designed to be easy to understand and simple to manage on your phone. Whether you need compulsory Third-Party protection or comprehensive cover, we deliver instant digital policy verification.
            </p>
            <div className="pt-1 flex items-center gap-4">
              <Link 
                to="/about"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-dark hover:text-[#FEBD19] underline underline-offset-4 cursor-pointer"
              >
                <span>Read Full About Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COVERAGE OPTIONS */}
      <section id="coverage" className="px-4 sm:px-8 max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <SectionTag text="Car Cover Options" />
          <Link 
            to="/coverage"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs font-bold text-brand-dark hover:text-[#FEBD19] hover:underline flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>Explore All Cover Options</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-cream p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="font-bold text-xs uppercase tracking-wider text-brand-dark">Plan Option 01</div>
              <h3 className="text-xl font-extrabold text-slate-900">Third-Party Motor Essentials</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Covers legally required road liabilities including third-party bodily injury and property damage. Instant digital verification sent via SMS.
              </p>
            </div>
            <PillButton variant="gold" onClick={onOpenChannelSelector}>
              Get Third-Party Cover
            </PillButton>
          </div>

          <div className="relative rounded-3xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between space-y-6 text-white group shadow-card border border-slate-200/80 min-h-[260px]">
            <img 
              src={images.thirdParty} 
              alt="Car driving safely" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-slate-950/60" />

            <div className="relative z-10 space-y-2">
              <div className="font-bold text-xs uppercase tracking-wider text-[#FEBD19]">Plan Option 02</div>
              <h3 className="text-xl font-extrabold text-white">Comprehensive Vehicle Protection</h3>
              <p className="text-xs text-slate-200 leading-relaxed max-w-sm">
                Complete coverage for accidental vehicle damage, fire, theft, and third-party protection with fast claims processing.
              </p>
            </div>

            <div className="relative z-10">
              <PillButton variant="gold" onClick={onOpenChannelSelector}>
                Get Comprehensive Cover
              </PillButton>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section id="how-it-works" className="px-4 sm:px-8 max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <SectionTag text="How It Works" />
          <Link 
            to="/how-it-works"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs font-bold text-brand-dark hover:text-[#FEBD19] hover:underline flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>View Step-by-Step Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <PinnedHowItWorks className="pt-4" />
      </section>

      {/* 7. CLAIMS GUIDANCE SECTION */}
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
                Take photos of the vehicle damage or collision scene and send them directly to our WhatsApp bot (+233 53 110 0408).
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

      {/* 8. PARTNERS & UNDERWRITERS BANNER */}
      <section id="partners" className="px-4 sm:px-8 max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <SectionTag text="Partners & Insurers" />
          <Link 
            to="/partners"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs font-bold text-brand-dark hover:text-[#FEBD19] hover:underline flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>View Underwriter Directory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg font-extrabold text-brand-dark">Underwritten by Licensed Motor Insurers</h3>
            <p className="text-xs text-slate-600 max-w-md">
              All BeINsured motor policies are underwritten by authorized partner insurance institutions under national regulatory frameworks.
            </p>
          </div>

          <ChannelBadgeGroup />
        </div>
      </section>

      {/* 9. CTA SECTION WITH ANIMATED TEXT CYCLE */}
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
