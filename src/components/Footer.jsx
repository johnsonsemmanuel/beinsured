import React from 'react';
import PillButton from './PillButton';

export default function Footer({ onOpenChannelSelector, setActivePage }) {
  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-100">
          
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => { setActivePage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <img 
                src="/logo.png" 
                alt="BeINsured Car Insurance Logo" 
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Simple, instant, and transparent micro car insurance for vehicle owners and drivers across Ghana. Distributed via USSD (*170#), WhatsApp, and MTN MoMo.
            </p>
            <div className="pt-2">
              <PillButton variant="gold" onClick={onOpenChannelSelector} className="text-xs">
                Get Car Cover
              </PillButton>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-brand-dark mb-4 border-b-2 border-brand-gold pb-0.5 inline-block">
              Car Protection
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-600">
              <li>
                <button onClick={() => { setActivePage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#FEBD19] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#FEBD19] transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-[#FEBD19] transition-colors">Car Cover Options</a>
              </li>
              <li>
                <a href="#claims" className="hover:text-[#FEBD19] transition-colors">Vehicle Claims</a>
              </li>
              <li>
                <button onClick={() => { setActivePage('partners'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#FEBD19] transition-colors">
                  Partners & Underwriters
                </button>
              </li>
            </ul>
          </div>

          {/* Access Channels */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-brand-dark mb-4 border-b-2 border-brand-gold pb-0.5 inline-block">
              Access Channels
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-700">
              <li className="hover:text-[#FEBD19] transition-colors cursor-pointer" onClick={onOpenChannelSelector}>
                USSD Code: <strong className="text-slate-900">*170#</strong>
              </li>
              <li className="hover:text-[#FEBD19] transition-colors cursor-pointer" onClick={onOpenChannelSelector}>
                WhatsApp Car Assistant
              </li>
              <li className="hover:text-[#FEBD19] transition-colors cursor-pointer" onClick={onOpenChannelSelector}>
                MTN MoMo App Marketplace
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-brand-dark mb-4 border-b-2 border-brand-gold pb-0.5 inline-block">
              Institutional & Legal
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-600">
              <li>
                <button onClick={() => { setActivePage('partners'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#FEBD19] transition-colors">
                  Underwriter Directory
                </button>
              </li>
              <li>
                <a href="#legal" className="hover:text-[#FEBD19] transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#legal" className="hover:text-[#FEBD19] transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Regulatory Disclaimer */}
        <div className="p-6 rounded-2xl bg-brand-cream border border-slate-200/80 text-xs text-slate-600 leading-relaxed space-y-2">
          <p className="font-bold text-slate-900">Regulatory Disclaimer</p>
          <p>
            BeINsured is a digital micro car insurance platform brand. All motor insurance policies are underwritten by authorized and licensed insurance partner underwriters under regulatory supervision. BeINsured does not collect funds on this website; car insurance premium transactions occur securely on USSD *170#, WhatsApp Bot, and MTN MoMo App rails.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 pt-4">
          <p>© {new Date().getFullYear()} BeINsured Motor. All rights reserved. Registered Car Micro-Insurance Brand.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-800 cursor-pointer">Security & Protection</span>
            <span className="hover:text-slate-800 cursor-pointer">Official Brand Portal</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
