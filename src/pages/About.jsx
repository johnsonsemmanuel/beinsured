import React from 'react';
import SectionTag from '../components/SectionTag';
import PillButton from '../components/PillButton';
import LegitimacyBanner from '../components/LegitimacyBanner';
import { ShieldCheck, Users, Smartphone } from 'lucide-react';

export default function About({ onOpenChannelSelector }) {
  return (
    <div className="space-y-16 sm:space-y-24 pb-12">

      {/* Hero */}
      <section className="pt-6 sm:pt-10 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-4">
          <SectionTag text="About Us" />
          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-dark tracking-tight leading-snug">
            Insuring your car shouldn't feel overwhelming.
          </h1>
          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl">
            We focus on making motor insurance clear, simple, and built around real driver needs so you can feel confident about the protection you choose.
          </p>
        </div>
      </section>

      {/* Image + Text */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative group rounded-3xl overflow-hidden shadow-card border border-slate-200/80 h-64 sm:h-80">
              <img 
                src="/trotro-station.jpg"
                alt="Driver behind steering wheel" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="space-y-5">
            <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
              Our car insurance plans are designed to be easy to understand and simple to manage directly on your mobile handset. We partner with licensed underwriters to give you instant, legitimate protection.
            </p>
            
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 space-y-3 shadow-sm">
              <div className="font-bold text-xs uppercase tracking-wider text-brand-dark border-b border-slate-100 pb-2">
                Built for Ghana Drivers Across 3 Channels
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

      {/* Values */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto">
        <SectionTag text="Our Values" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {[
            { icon: ShieldCheck, title: "Transparency First", desc: "Every premium and every policy clause is fully visible to you. No hidden fees, no fine-print surprises." },
            { icon: Users, title: "Driver-Centric Design", desc: "We built BeInsured around real driver habits — quick USSD access, WhatsApp support, and instant MoMo payments." },
            { icon: Smartphone, title: "Mobile-Native", desc: "Your insurance lives on your phone. Buy, renew, and verify — all from your handset without visiting an office." },
          ].map((v, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200/80 space-y-3 shadow-sm hover:shadow-md hover:border-[#FEBD19] transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#FEBD19] text-brand-dark flex items-center justify-center">
                <v.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-brand-dark">{v.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Legitimacy */}
      <LegitimacyBanner onOpenChannelSelector={onOpenChannelSelector} />

    </div>
  );
}
