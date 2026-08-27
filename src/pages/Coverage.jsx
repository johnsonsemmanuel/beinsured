import React from 'react';
import SectionTag from '../components/SectionTag';
import PillButton from '../components/PillButton';
import ScrollReveal from '../components/ScrollReveal';
import { Shield, Car, AlertTriangle, CheckCircle, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Coverage({ onOpenChannelSelector }) {
  const plans = [
    {
      title: "Third-Party Essentials",
      badge: "Compulsory Cover",
      desc: "Protects against third-party bodily injury, property damage, and legal liability on all Ghanaian roads.",
      features: [
        "Full NIC regulatory compliance",
        "Third-party property damage coverage",
        "Instant digital sticker via SMS",
        "Valid for commercial and private vehicles"
      ],
      recommended: false,
    },
    {
      title: "Comprehensive Protection",
      badge: "Full Cover",
      desc: "Complete peace of mind covering accidental damage to your own vehicle, theft, fire, and third-party liabilities.",
      features: [
        "Own-vehicle damage & collision repair",
        "Fire & theft protection",
        "Towing & roadside assistance",
        "Fast-track WhatsApp claim settlement"
      ],
      recommended: true,
    },
    {
      title: "Micro Motor Flexi-Cover",
      badge: "Flexible Pay-As-You-Drive",
      desc: "Tailored micro-insurance plans for commercial taxi drivers, ride-hailing drivers, and frequent commuters.",
      features: [
        "Weekly and monthly flexible premiums",
        "Instant MoMo wallet auto-debit option",
        "No long commitment periods",
        "Immediate cover activation via *170#"
      ],
      recommended: false,
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      {/* Hero */}
      <ScrollReveal>
        <section className="pt-6 sm:pt-10 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-4">
            <SectionTag text="Car Cover Options" />
            <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-dark tracking-tight leading-snug">
              Simple, transparent motor coverage for every Ghanaian driver.
            </h1>
            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
              Choose the plan that matches your vehicle use and budget. All plans are underwritten by authorized insurance partners.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Plans Grid with Motion Cards */}
      <ScrollReveal delay={0.1}>
        <section className="px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`p-8 rounded-3xl border flex flex-col justify-between space-y-6 ${
                  plan.recommended 
                    ? 'bg-brand-dark text-white border-brand-gold ring-2 ring-brand-gold/30 shadow-xl' 
                    : 'bg-white text-slate-800 border-slate-200 shadow-sm hover:border-[#FEBD19] hover:shadow-md'
                } transition-colors duration-300`}
              >
                <div className="space-y-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                    plan.recommended ? 'bg-[#FEBD19] text-[#0F172A]' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {plan.badge}
                  </span>
                  <h3 className="text-2xl font-extrabold">{plan.title}</h3>
                  <p className={`text-xs sm:text-sm leading-relaxed ${plan.recommended ? 'text-slate-300' : 'text-slate-600'}`}>
                    {plan.desc}
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-slate-200/40 text-xs">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${plan.recommended ? 'text-[#FEBD19]' : 'text-emerald-600'}`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <PillButton 
                  variant={plan.recommended ? 'gold' : 'dark'}
                  onClick={onOpenChannelSelector}
                  className="w-full justify-center"
                >
                  Get {plan.title.split(' ')[0]} Cover
                </PillButton>
              </motion.div>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
