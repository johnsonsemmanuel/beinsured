import React from 'react';
import SectionTag from '../components/SectionTag';
import PinnedHowItWorks from '../components/PinnedHowItWorks';
import PillButton from '../components/PillButton';
import PhoneCarousel from '../components/PhoneCarousel';
import ScrollReveal from '../components/ScrollReveal';

export default function HowItWorksPage({ onOpenChannelSelector }) {
  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      <ScrollReveal>
        <section className="pt-6 sm:pt-10 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-4">
            <SectionTag text="How It Works" />
            <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-dark tracking-tight leading-snug">
              3 simple steps to insure your vehicle on your phone.
            </h1>
            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
              Whether you use USSD *170#, WhatsApp, or the MTN MoMo app, getting valid motor insurance takes less than 2 minutes.
            </p>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <section className="px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
          <PinnedHowItWorks className="pt-4" />

          <div className="text-center pt-4 pb-8">
            <PillButton variant="gold" onClick={onOpenChannelSelector}>
              Try It Now (*170# or WhatsApp)
            </PillButton>
          </div>
        </section>
      </ScrollReveal>

      {/* Interactive Phone Screen Showcase */}
      <ScrollReveal delay={0.15}>
        <section className="px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <SectionTag text="Live Mobile Interface" className="justify-center" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              See the mobile handset experience
            </h2>
            <p className="text-slate-600 text-sm font-medium">
              Preview what your phone screen looks like when dialing *170# or chatting with our WhatsApp bot.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-card">
            <PhoneCarousel />
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
