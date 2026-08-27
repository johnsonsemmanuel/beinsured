import React from 'react';
import { X, ShieldCheck, Car, BadgeCheck, CheckCircle2, ArrowRight, Smartphone } from 'lucide-react';

export default function PartnerModal({ isOpen, partner, onClose, onOpenChannelSelector }) {
  if (!isOpen || !partner) return null;

  // Dedicated Insurance Icon mapping
  const getPartnerIcon = () => {
    if (partner.id === 'nic' || partner.id === 'gia') {
      return <BadgeCheck className="w-6 h-6 text-[#0F172A]" />;
    }
    if (partner.id === 'momo' || partner.id === 'telecel' || partner.id === 'at') {
      return <Smartphone className="w-6 h-6 text-[#0F172A]" />;
    }
    // Motor Underwriters (Enterprise, Star, GLICO, etc.)
    return <ShieldCheck className="w-6 h-6 text-[#0F172A]" />;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-[#F9F8F3]">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#FEBD19] text-[#0F172A] flex items-center justify-center font-bold text-lg shadow-sm">
              {getPartnerIcon()}
            </div>
            <div>
              <div className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#0F172A]">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                <span>{partner.status || 'Active Underwriting Partner'}</span>
              </div>
              <h3 className="text-xl font-extrabold text-[#0F172A]">{partner.name}</h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Key Stats Row */}
          <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs">
            <div>
              <span className="block text-slate-500 font-medium">NIC Registration No:</span>
              <strong className="text-sm font-bold text-[#0F172A]">{partner.licence}</strong>
            </div>
            <div>
              <span className="block text-slate-500 font-medium">Partner Type:</span>
              <strong className="text-sm font-bold text-[#0F172A]">{partner.type}</strong>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Underwriter Bio & Mandate</h4>
            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              {partner.desc}
            </p>
          </div>

          {/* Coverage & Services */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Underwritten Coverage Options</h4>
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{partner.coverage}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct policy issuing with electronic confirmation stickers sent immediately upon MoMo checkout completion.
              </p>
            </div>
          </div>

          {/* Instant Verification Notice */}
          <div className="p-4 rounded-2xl bg-[#0F172A] text-white space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#FEBD19]">
              <ShieldCheck className="w-4 h-4 text-[#FEBD19]" />
              <span>Institutional Policy Verification</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Policies underwritten by {partner.name} can be checked via the National Insurance Commission (NIC) portal or directly on *170#.
            </p>
            <div className="pt-1">
              <button
                onClick={() => { onClose(); onOpenChannelSelector(); }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#FEBD19] text-[#0F172A] text-xs font-bold hover:bg-amber-400 transition-colors cursor-pointer"
              >
                <span>Get Car Cover Underwritten by {partner.shortName || partner.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Official BeInsured Partner Network</span>
          <button onClick={onClose} className="font-medium text-slate-700 hover:text-slate-900 cursor-pointer">
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
