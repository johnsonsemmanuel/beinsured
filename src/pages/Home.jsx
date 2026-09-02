import React from 'react';
import { Link } from 'react-router-dom';
import SectionTag from '../components/SectionTag';
import PillButton from '../components/PillButton';
import AnimatedTextCycle from '../components/AnimatedTextCycle';
import PinnedHowItWorks from '../components/PinnedHowItWorks';
import HeroSlider from '../components/HeroSlider';
import PhoneCarousel from '../components/PhoneCarousel';
import ScrollReveal from '../components/ScrollReveal';
import BrandVideoPlayer from '../components/BrandVideoPlayer';
import { Car, ShieldCheck, CheckCircle2, MessageSquare, ArrowRight, Play, Search, HelpCircle, AlertTriangle, FileText, ChevronRight } from 'lucide-react';

export default function Home({ onOpenChannelSelector, onOpenPolicyLookup }) {
  const images = {
    aboutDriver: "/trotro-station.jpg",
    roadsideAssist: "/taxi-images.jpg",
    ctaDriver: "/taxi-imagess.jpg"
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      
      {/* 1. HERO SLIDER SECTION */}
      <HeroSlider 
        onOpenChannelSelector={onOpenChannelSelector}
        onOpenPolicyLookup={onOpenPolicyLookup}
      />

      {/* 2. INSURING YOUR CAR SHOULDN'T FEEL STRESSFUL */}
      <ScrollReveal>
        <section id="about" className="px-4 sm:px-8 max-w-7xl mx-auto space-y-6">
          <SectionTag text="About Us" />

          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight leading-snug">
              Insuring your car shouldn't feel stressful
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
              Skip the long queues and lengthy paperwork. Do what takes you hours in minutes when you buy car insurance on BeINsured.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 items-center">
            <div className="relative group rounded-3xl overflow-hidden shadow-card border border-slate-200/80 h-56 sm:h-64">
              <img 
                src={images.aboutDriver} 
                alt="Confident car owner inside vehicle" 
                loading="lazy"
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
                Getting your motor insured should be a straightforward process. BeINsured brings Ghana's top insurance companies together in one marketplace, making it easier to find the right protection for your vehicle.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                With BeINsured, you can access and manage your motor insurance from your phone, giving you greater flexibility throughout the process.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                From choosing your cover to completing your purchase, BeINsured gives you a more convenient way to get insured.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 3. YOUR INSURANCE RIGHT AT YOUR FINGERTIPS */}
      <ScrollReveal delay={0.1}>
        <section className="px-4 sm:px-8 max-w-7xl mx-auto space-y-6">
          <div className="max-w-3xl space-y-2">
            <SectionTag text="Mobile-Native Insurance" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight leading-snug">
              Your insurance, right at your fingertips
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
              BeINsured puts motor insurance within easy reach. Access insurance options, compare policies, make payments and manage your cover directly from your phone.
            </p>
            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
              Everything you need to manage your motor insurance, right from your phone.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* 4. CHANNELS */}
      <ScrollReveal delay={0.1}>
        <section className="px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-cream p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="font-bold text-xs uppercase tracking-wider text-brand-dark">USSD *170# Shortcode Channel</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For MTN users only, buy motor insurance directly from your phone by dialling *170#.
                </p>
              </div>
            </div>

            <div className="card-cream p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="font-bold text-xs uppercase tracking-wider text-brand-dark">WhatsApp Auto Bot</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Start a conversation on WhatsApp and purchase your motor insurance through our 24/7 Auto Bot.
                </p>
              </div>
            </div>

            <div className="card-cream p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="font-bold text-xs uppercase tracking-wider text-brand-dark">MTN MoMo Marketplace</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Find BeINsured on the MTN MoMo Marketplace and purchase motor insurance directly through the app.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 5. HOW IT WORKS */}
      <ScrollReveal delay={0.1}>
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
      </ScrollReveal>

      {/* 6. MOBILE APP & CHANNEL SHOWCASE */}
      <ScrollReveal delay={0.15}>
        <section className="px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <SectionTag text="Mobile-Native Insurance" className="justify-center" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Designed to fit directly in your pocket
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium">
              See how BeInsured works seamlessly on your smartphone handset via USSD, WhatsApp and Mobile Money.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-card">
            <PhoneCarousel />
          </div>
        </section>
      </ScrollReveal>

      {/* 7. GHANA'S TOP INSURANCE COMPANIES */}
      <ScrollReveal delay={0.1}>
        <section className="px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <SectionTag text="Our Partners" className="justify-center" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Ghana's Top Insurance Companies on BeINsured
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Donewell Assurance', src: '/donewell-logo.png', alt: 'Donewell Assurance Logo' },
              { name: 'Vanguard Assurance', src: '/vanguard-logo.png', alt: 'Vanguard Assurance Logo' },
              { name: 'Hollard Ghana', src: '/hollard-logo.png', alt: 'Hollard Ghana Logo' },
              { name: 'GLICO General Insurance', src: '/glico-logo.jpg', alt: 'GLICO General Insurance Logo' },
              { name: 'Star Assurance', src: '/star-logo.png', alt: 'Star Assurance Logo' },
              { name: 'Enterprise Insurance', src: '/enterprise-logo.png', alt: 'Enterprise Insurance Logo' }
            ].map((logo, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/80 shadow-sm flex items-center justify-center hover:border-[#FEBD19] hover:shadow-md transition-all duration-300">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="max-h-10 sm:max-h-12 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link 
              to="/partners"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-dark hover:text-[#FEBD19] underline underline-offset-4 cursor-pointer"
            >
              <span>View All Partners</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </ScrollReveal>

      {/* 8. BRAND FILM */}
      <ScrollReveal delay={0.1}>
        <section className="px-4 sm:px-8 max-w-5xl mx-auto space-y-5">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <SectionTag text="Brand Film" className="justify-center" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
              See what BeINsured is all about
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-medium">
              Watch how we're making motor insurance simple, instant, and accessible for every Ghanaian driver.
            </p>
          </div>
          <BrandVideoPlayer />
        </section>
      </ScrollReveal>

      {/* 9. CTA SECTION */}
      <ScrollReveal delay={0.15}>
        <section className="px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <SectionTag text="Get Started Today" className="justify-center" />
            <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
              Take the first step toward instant coverage
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-2xl mx-auto">
              Start the process now! Explore, select your preferred channel and buy car insurance today.
            </p>
          </div>

          <div className="flex justify-center pt-2">
            <PillButton variant="gold" onClick={onOpenChannelSelector} className="text-base px-8 py-3">
              Get Started Now
            </PillButton>
          </div>

        </section>
      </ScrollReveal>

    </div>
  );
}
