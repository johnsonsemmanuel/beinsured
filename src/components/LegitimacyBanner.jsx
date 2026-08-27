import React from 'react';
import SectionTag from './SectionTag';
import PillButton from './PillButton';
import { ShieldCheck, ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function LegitimacyBanner({ onOpenChannelSelector }) {
  return (
    <section className="px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-card space-y-8">
        
        {/* Header Tag - Underline Badge Design ONLY */}
        <div className="space-y-3">
          <SectionTag text="Official Brand & Legitimacy Portal" />
          <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight max-w-3xl">
            Verify official BeINsured channels before transacting
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl leading-relaxed">
            BeINsured does not collect funds on this website. All car insurance premium payments and policy issuance take place strictly on USSD (*170#), WhatsApp, and MTN MoMo rails under licensed insurance partner underwriting.
          </p>
        </div>

        {/* Verification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          
          {/* Card 1: Gold Card Theme */}
          <div className="card-gold space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-brand-dark text-white flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-brand-gold" />
            </div>
            <h3 className="text-lg font-bold text-brand-dark">USSD Official Shortcode</h3>
            <p className="text-xs text-brand-dark/90 leading-relaxed font-medium">
              Dial <strong className="text-brand-dark font-extrabold">*170#</strong> directly on your mobile device. Confirm the menu prompt states "BeINsured Motor Cover".
            </p>
          </div>

          {/* Card 2 */}
          <div className="card-cream space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-brand-gold text-brand-dark flex items-center justify-center font-extrabold text-sm">
              WA
            </div>
            <h3 className="text-lg font-bold text-slate-900">WhatsApp Verified Bot</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Verify the green checkmark on our WhatsApp business profile before submitting vehicle registration details or payment.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card-cream space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-brand-gold text-brand-dark flex items-center justify-center font-extrabold text-sm">
              MoMo
            </div>
            <h3 className="text-lg font-bold text-slate-900">MTN MoMo Marketplace</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Access BeINsured directly inside the official MTN MoMo App under Financial Services - Micro Insurance.
            </p>
          </div>

        </div>

        {/* Action Row */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs text-slate-600 space-y-1">
            <div><strong className="text-slate-800">Need immediate policy support?</strong></div>
            <div>Our verified channels operate 24/7 across Ghana.</div>
          </div>

          <PillButton variant="gold" onClick={onOpenChannelSelector}>
            Access Official Channels
          </PillButton>
        </div>

      </div>
    </section>
  );
}
