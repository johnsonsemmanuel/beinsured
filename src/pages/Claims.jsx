import React from 'react';
import SectionTag from '../components/SectionTag';
import PillButton from '../components/PillButton';
import LegitimacyBanner from '../components/LegitimacyBanner';
import { Camera, ShieldCheck, Wallet, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Claims({ onOpenChannelSelector }) {
  const steps = [
    {
      icon: Camera,
      bg: "bg-amber-100 text-amber-800",
      title: "1. Snap Photos on Scene",
      desc: "Capture clear photos of vehicle damage, your driver's license, and registration details, then upload directly to our WhatsApp bot."
    },
    {
      icon: ShieldCheck,
      bg: "bg-emerald-100 text-emerald-800",
      title: "2. Rapid Assessor Review",
      desc: "Our partner underwriter claims team reviews damage estimates and validates police reporting (if required) within hours."
    },
    {
      icon: Wallet,
      bg: "bg-brand-gold/30 text-brand-dark",
      title: "3. Instant MoMo Payout",
      desc: "Approved repair funds or payout settlements are transferred straight to your registered MTN MoMo account."
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      {/* Hero */}
      <section className="pt-6 sm:pt-10 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-4">
          <SectionTag text="Vehicle Claims" />
          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-dark tracking-tight leading-snug">
            Fast, paperless car insurance claim processing.
          </h1>
          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
            Report accident damage or collisions straight from your phone via WhatsApp for immediate verification and direct Mobile Money payout.
          </p>
        </div>
      </section>

      {/* 3 Step Claims Grid */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 space-y-4 shadow-sm hover:shadow-md hover:border-[#FEBD19] transition-colors duration-300"
            >
              <div className={`w-12 h-12 rounded-2xl ${step.bg} flex items-center justify-center font-bold`}>
                <step.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <PillButton variant="gold" onClick={onOpenChannelSelector}>
            Start Claim on WhatsApp
          </PillButton>
        </div>
      </section>

      <LegitimacyBanner onOpenChannelSelector={onOpenChannelSelector} />
    </div>
  );
}
