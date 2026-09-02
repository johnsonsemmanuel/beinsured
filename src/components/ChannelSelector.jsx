import React, { useState, useEffect } from 'react';
import { X, Smartphone, Shield, Check, Copy, ExternalLink } from 'lucide-react';
import PillButton from './PillButton';
import QRCode from './QRCode';
import momoLogo from '../assets/momo_logo.png';

// Official WhatsApp icon SVG
const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function ChannelSelector({ isOpen, onClose }) {
  const [activeChannel, setActiveChannel] = useState('ussd'); // 'ussd' | 'whatsapp' | 'momo'
  const [copied, setCopied] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const ussdCode = "*170#";

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md"
      onClick={onClose}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div 
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 sm:px-8 py-5 border-b border-slate-100 flex items-center justify-between bg-brand-cream/60">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-dark mb-1 border-b-2 border-brand-gold pb-0.5">
              <span>Official Car Insurance Channels</span>
            </div>
             <h3 className="text-xl font-bold text-brand-dark">Get Protected or Manage Car Policy</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Channel Switcher Tabs */}
        <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-100 grid grid-cols-3 gap-2">
          
          {/* USSD Tab */}
          <button
            onClick={() => setActiveChannel('ussd')}
            className={`p-3 sm:p-4 rounded-2xl flex flex-col items-center gap-2 transition-all text-center cursor-pointer ${
              activeChannel === 'ussd'
                ? 'bg-white text-brand-dark shadow-sm border border-amber-400 ring-2 ring-amber-400/20'
                : 'text-slate-600 hover:bg-white/60 border border-transparent'
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeChannel === 'ussd' ? 'bg-brand-gold text-brand-dark font-extrabold' : 'bg-slate-200 text-slate-700'}`}>
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm">USSD Dial</div>
              <div className="text-[11px] text-slate-500 font-mono">*170#</div>
            </div>
          </button>

          {/* WhatsApp Tab */}
          <button
            onClick={() => setActiveChannel('whatsapp')}
            className={`p-3 sm:p-4 rounded-2xl flex flex-col items-center gap-2 transition-all text-center cursor-pointer ${
              activeChannel === 'whatsapp'
                ? 'bg-white text-brand-dark shadow-sm border border-emerald-500 ring-2 ring-emerald-500/20'
                : 'text-slate-600 hover:bg-white/60 border border-transparent'
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeChannel === 'whatsapp' ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'}`}>
              <WhatsAppIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm">WhatsApp</div>
              <div className="text-[11px] text-slate-500">Auto Bot</div>
            </div>
          </button>

          {/* MTN MoMo Tab */}
          <button
            onClick={() => setActiveChannel('momo')}
            className={`p-3 sm:p-4 rounded-2xl flex flex-col items-center gap-2 transition-all text-center cursor-pointer ${
              activeChannel === 'momo'
                ? 'bg-white text-brand-dark shadow-sm border border-amber-500 ring-2 ring-amber-500/20'
                : 'text-slate-600 hover:bg-white/60 border border-transparent'
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden ${activeChannel === 'momo' ? 'bg-[#FFC800] ring-2 ring-[#FFC800]/30' : 'bg-slate-100'}`}>
              <img src={momoLogo} alt="MTN MoMo" className="w-8 h-8 object-contain" />
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm">MTN MoMo</div>
              <div className="text-[11px] text-slate-500">Auto Insurance</div>
            </div>
          </button>
        </div>

        {/* Channel Details View */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* USSD CONTENT */}
          {activeChannel === 'ussd' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-brand-cream border border-slate-200/80">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">USSD Quick Dial</div>
                  <div className="text-3xl font-extrabold text-brand-dark font-mono">{ussdCode}</div>
                   <div className="text-xs text-slate-600">Dial on MTN Ghana network for instant car insurance</div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => handleCopyCode(ussdCode)}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                  </button>

                  <a
                    href="tel:*170%23"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-brand-gold text-brand-dark text-sm font-bold hover:bg-slate-900 hover:text-[#FEBD19] transition-all shadow-sm cursor-pointer"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>Dial Now</span>
                  </a>
                </div>
              </div>

              {/* Step-by-Step Dialing Guide */}
              <div>
                <h4 className="font-bold text-sm text-brand-dark mb-3">How to buy or renew car insurance via USSD:</h4>
                <ol className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="w-6 h-6 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center text-xs font-bold shrink-0">1</span>
                    <span>Dial <strong>*170#</strong> on your phone.</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="w-6 h-6 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center text-xs font-bold shrink-0">2</span>
                    <span>Select Option <strong>5 (Financial Services)</strong> → Option <strong>4 (Insurance)</strong> → <strong>BeInsured Motor</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="w-6 h-6 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center text-xs font-bold shrink-0">3</span>
                    <span>Enter Vehicle Reg Number, select Third-Party or Comprehensive protection, and enter MoMo PIN. Digital sticker SMS issued instantly.</span>
                  </li>
                </ol>
              </div>
            </div>
          )}

          {/* WHATSAPP CONTENT */}
          {activeChannel === 'whatsapp' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                <div className="space-y-2 text-center sm:text-left">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                    WhatsApp Car Insurance Bot
                  </div>
                  <h4 className="text-lg font-extrabold text-slate-900">BeInsured Auto Assistant</h4>
                  <p className="text-xs text-slate-600 max-w-sm">Chat 24/7 to renew car insurance, send accident photos for verification, or receive digital policy documents.</p>
                </div>

                <div className="flex flex-col items-center gap-3 shrink-0">
                  <div className="p-3 bg-white rounded-2xl border border-emerald-200 shadow-sm flex flex-col items-center text-center">
                    <QRCode value="https://wa.me/233531100408?text=Hi%20BeInsured%20I%20want%20car%20insurance" size={112} fgColor="#0F172A" />
                    <span className="text-[10px] text-slate-500 mt-2 font-mono font-medium">Scan to Chat on WhatsApp</span>
                  </div>
                  <a
                    href="https://wa.me/233531100408?text=Hi%20BeInsured%20I%20want%20car%20insurance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition-colors shadow-sm cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Open WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* MTN MOMO APP CONTENT */}
          {activeChannel === 'momo' && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-amber-800 uppercase tracking-wide">Integrated In-App Channel</span>
                    <h4 className="text-lg font-extrabold text-slate-900">MTN MoMo App Marketplace</h4>
                  </div>
                  <img src={momoLogo} alt="MTN MoMo" className="w-12 h-12 object-contain" />
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  BeInsured Motor is officially embedded directly inside the MTN MoMo smartphone app marketplace. Buy car insurance and manage renewals straight from your MoMo wallet.
                </p>
                <div className="p-3.5 rounded-xl bg-white border border-amber-200 text-xs text-slate-800 font-medium">
                  Path: <strong>MoMo App → Financial Services → Motor Insurance → BeInsured Car Insurance</strong>
                </div>
              </div>
            </div>
          )}

          {/* Verification Notice */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-start gap-3">
            <Shield className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
            <div className="text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-900 font-semibold">Legitimacy Guarantee:</strong> BeInsured will never ask for your MoMo PIN outside of the official MTN USSD *170# interface or MoMo App prompt.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:px-8 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Licensed partner underwriter network</span>
          <button 
            onClick={onClose}
            className="text-slate-700 font-medium hover:text-brand-dark cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
