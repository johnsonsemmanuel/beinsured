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
            Insuring your car shouldn't feel stressful
          </h1>
          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl">
            Skip the long queues and lengthy paperwork. Do what takes you hours in minutes when you buy car insurance on BeINsured.
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
              Getting your motor insured should be a straightforward process. BeINsured brings Ghana's top insurance companies together in one marketplace, making it easier to find the right protection for your vehicle.
            </p>
            <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
              With BeINsured, you can access and manage your motor insurance from your phone, giving you greater flexibility throughout the process.
            </p>
            <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
              From choosing your cover to completing your purchase, BeINsured gives you a more convenient way to get insured.
            </p>
            
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 space-y-3 shadow-sm">
              <div className="font-bold text-xs uppercase tracking-wider text-brand-dark border-b border-slate-100 pb-2">
                Built for Ghana Drivers Across 3 Channels
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Enter your vehicle registration number on USSD *170# or WhatsApp, pay via MoMo and receive your digital insurance verification immediately.
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

      {/* BlueSPACE Financial */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="card-cream p-8 sm:p-12 space-y-6">
          <SectionTag text="Who We Are" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
            BlueSPACE Financial
          </h2>
          <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed max-w-3xl">
            BeINsured is a product of BlueSPACE Financial, a leading fintech company committed to making financial services accessible to every Ghanaian. Through innovative digital solutions, BlueSPACE Financial is transforming how Ghanaians access insurance, payments, and other essential financial services.
          </p>
          <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed max-w-3xl">
            BeINsured was launched to simplify motor insurance for drivers across Ghana. By partnering with the country's top insurance underwriters and leveraging mobile technology, we have created a seamless platform that makes buying and managing car insurance faster, easier, and more transparent than ever before.
          </p>
        </div>
      </section>

      {/* Partners Logos */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <SectionTag text="Our Partners" className="justify-center" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
            Logos of All BeINsured Partners
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            We work with Ghana's leading insurance underwriters to bring you the best protection options.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-6">
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
      </section>

      {/* Legitimacy */}
      <LegitimacyBanner onOpenChannelSelector={onOpenChannelSelector} />

    </div>
  );
}
