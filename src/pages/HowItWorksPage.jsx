import React from 'react';
import SectionTag from '../components/SectionTag';
import PinnedHowItWorks from '../components/PinnedHowItWorks';
import PillButton from '../components/PillButton';
import ScrollReveal from '../components/ScrollReveal';

export default function HowItWorksPage({ onOpenChannelSelector }) {
  const steps = [
    {
      platform: 'USSD *170#',
      title: 'Buy via USSD',
      description: 'For MTN users only, buy motor insurance directly from your phone by dialling *170#.',
      details: [
        'Dial *170# on your MTN line',
        'Select Option 5 (Financial Services)',
        'Choose Option 4 (Insurance)',
        'Select BeINsured Motor',
        'Enter your vehicle registration number',
        'Select your preferred protection plan',
        'Enter your MoMo PIN to complete payment',
        'Receive digital insurance sticker via SMS'
      ]
    },
    {
      platform: 'WhatsApp Bot',
      title: 'Buy via WhatsApp',
      description: 'Start a conversation on WhatsApp and purchase your motor insurance through our 24/7 Auto Bot.',
      details: [
        'Save the BeINsured WhatsApp number',
        'Send a greeting message',
        'Follow the bot prompts to enter your vehicle details',
        'Select your preferred protection plan',
        'Confirm your MoMo number for payment',
        'Enter your MoMo PIN when prompted',
        'Receive your digital insurance sticker instantly'
      ]
    },
    {
      platform: 'MTN MoMo App',
      title: 'Buy via MoMo App',
      description: 'Find BeINsured on the MTN MoMo Marketplace and purchase motor insurance directly through the app.',
      details: [
        'Open your MTN MoMo app',
        'Navigate to Financial Services',
        'Select Motor Insurance',
        'Choose BeINsured Car Insurance',
        'Enter your vehicle registration number',
        'Select your preferred protection plan',
        'Confirm payment with your MoMo PIN',
        'Receive digital insurance sticker instantly'
      ]
    }
  ];

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

      {/* Step-by-Step for Each Platform */}
      <ScrollReveal delay={0.15}>
        <section className="px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <SectionTag text="Step-by-Step Guide" className="justify-center" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              How to buy on each platform
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium">
              Follow these simple steps to get your motor insurance in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#FEBD19] transition-all duration-300 space-y-4">
                <div className="space-y-2">
                  <div className="font-bold text-xs uppercase tracking-wider text-brand-dark border-b border-slate-100 pb-2">
                    {step.platform}
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <ol className="space-y-2.5 pt-2">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
