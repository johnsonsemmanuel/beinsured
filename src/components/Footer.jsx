import React from 'react';
import { Link } from 'react-router-dom';
import PillButton from './PillButton';
import { Instagram } from 'lucide-react';

// Custom SVG icon for TikTok
function TikTokIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.33 22a6.33 6.33 0 0 0 6.33-6.33V9.58a8.28 8.28 0 0 0 3.93 1.05V7.18a4.87 4.87 0 0 1-.07-.49z" />
    </svg>
  );
}

export default function Footer({ onOpenChannelSelector }) {
  return (
    <footer className="relative bg-white border-t border-slate-200/80 pt-16 pb-12 px-4 sm:px-8 overflow-hidden">
      {/* Subtle Background Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-5">
        <img 
          src="/footer-ghana-traffic.jpg" 
          alt="Cars on road in Ghana" 
          loading="lazy"
          className="w-full h-full object-cover object-center filter grayscale"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-100">
          
          {/* Brand Col & Social Media */}
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="inline-block" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img 
                src="/logo.png" 
                alt="BeINsured Car Insurance Logo" 
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-xs text-slate-600 leading-relaxed">
              Simple, instant, and transparent micro car insurance for vehicle owners and drivers across Ghana. Distributed via USSD (*170#), WhatsApp, and MTN MoMo.
            </p>
            
            {/* Social Media Buttons */}
            <div className="pt-1 space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Connect With Us</div>
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.instagram.com/beinsuredautoinsurance" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-100 text-slate-700 hover:bg-[#FEBD19] hover:text-slate-900 transition-colors shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.tiktok.com/@beinsuredautoinsurance" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-100 text-slate-700 hover:bg-[#FEBD19] hover:text-slate-900 transition-colors shadow-sm"
                  aria-label="TikTok"
                >
                  <TikTokIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="pt-2">
              <PillButton variant="gold" onClick={onOpenChannelSelector} className="text-xs">
                Get Car Insurance
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
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[#FEBD19] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[#FEBD19] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/partners" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[#FEBD19] transition-colors">
                  Partners & Insurers
                </Link>
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
                WhatsApp Verified Bot
              </li>
              <li className="hover:text-[#FEBD19] transition-colors cursor-pointer" onClick={onOpenChannelSelector}>
                MTN MoMo App Marketplace
              </li>
            </ul>
          </div>

          {/* Institutional & Legal */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-brand-dark mb-4 border-b-2 border-brand-gold pb-0.5 inline-block">
              Institutional & Legal
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-600">
              <li>
                <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[#FEBD19] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/partners" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[#FEBD19] transition-colors">
                  Underwriter Directory
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Regulatory Disclaimer */}
        <div className="p-6 rounded-2xl bg-brand-cream/80 backdrop-blur-sm border border-slate-200/80 text-xs text-slate-600 leading-relaxed space-y-2">
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
