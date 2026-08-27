import React from 'react';
import SectionTag from '../components/SectionTag';
import PillButton from '../components/PillButton';
import LegitimacyBanner from '../components/LegitimacyBanner';
import { Camera, ShieldCheck, Wallet, ArrowRight } from 'lucide-react';

export default function Claims({ onOpenChannelSelector }) {
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
          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <Camera className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">1. Snap Photos on Scene</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Capture clear photos of vehicle damage, your driver's license, and registration details, then upload directly to our WhatsApp bot (+233 53 110 0408).
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">2. Rapid Assessor Review</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our partner underwriter claims team reviews damage estimates and validates police reporting (if required) within hours.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-brand-gold/30 text-brand-dark flex items-center justify-center font-bold">
              <Wallet className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">3. Instant MoMo Payout</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Approved repair funds or payout settlements are transferred straight to your registered MTN MoMo account.
            </p>
          </div>
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
