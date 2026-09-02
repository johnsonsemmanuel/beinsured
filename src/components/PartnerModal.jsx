import React, { useEffect } from 'react';
import { X, ShieldCheck, BadgeCheck, CheckCircle2, ArrowRight, Smartphone } from 'lucide-react';

export default function PartnerModal({ isOpen, partner, onClose, onOpenChannelSelector }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !partner) return null;

  // Dedicated Insurance Icon mapping
  const getPartnerIcon = () => {
    if (partner.id === 'nic' || partner.id === 'gia') {
      return <BadgeCheck className="w-6 h-6 text-[#0F172A]" />;
    }
    if (partner.id === 'momo' || partner.id === 'telecel' || partner.id === 'at') {
      return <Smartphone className="w-6 h-6 text-[#0F172A]" />;
    }
    return <ShieldCheck className="w-6 h-6 text-[#0F172A]" />;
  };

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/80 backdrop-blur-md"
      onClick={onClose}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div 
        className="relative bg-white w-[94%] sm:w-full max-w-lg mx-auto rounded-3xl shadow-2xl border border-slate-100 flex flex-col max-h-[88vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - fixed at top of modal */}
        <div className="px-5 sm:px-6 py-4 sm:py-5 border-b border-slate-100 flex items-center justify-between bg-[#F9F8F3] shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#FEBD19] text-[#0F172A] flex items-center justify-center font-bold text-lg shadow-sm shrink-0">
              {getPartnerIcon()}
            </div>
            <div className="min-w-0">
              <div className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#0F172A]">
                <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                <span className="truncate">{partner.status || 'Active Underwriting Partner'}</span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A] leading-tight truncate">{partner.name}</h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer shrink-0 ml-2"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-7 space-y-5 overflow-y-auto flex-1 overscroll-contain">
          
          {/* Key Stats Row */}
          <div className="grid grid-cols-2 gap-3 p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs">
            <div>
              <span className="block text-slate-500 font-medium text-[11px]">NIC Licence No:</span>
              <strong className="text-xs sm:text-sm font-bold text-[#0F172A]">{partner.licence}</strong>
            </div>
            <div>
              <span className="block text-slate-500 font-medium text-[11px]">Partner Category:</span>
              <strong className="text-xs sm:text-sm font-bold text-[#0F172A]">{partner.type}</strong>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Underwriter Bio & Mandate</h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {partner.desc}
            </p>
          </div>

          {/* Coverage & Services */}
          <div className="space-y-2.5 pt-1">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Underwritten Protection Options</h4>
            <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{partner.coverage}</span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                Direct policy issuing with electronic confirmation stickers sent immediately upon MoMo checkout completion.
              </p>
            </div>
          </div>

          {/* Instant Verification Notice */}
          <div className="p-4 rounded-2xl bg-[#0F172A] text-white space-y-3">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide text-[#FEBD19]">
              <ShieldCheck className="w-4 h-4 text-[#FEBD19] shrink-0" />
              <span>Institutional Policy Verification</span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
              Policies underwritten by {partner.name} can be checked via the National Insurance Commission (NIC) portal or directly on *170#.
            </p>
            <div className="pt-1">
              <button
                onClick={() => { onClose(); onOpenChannelSelector(); }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#FEBD19] text-[#0F172A] text-xs font-bold hover:bg-amber-400 transition-colors cursor-pointer"
              >
                <span>Get Car Insurance Underwritten by {partner.shortName || partner.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Footer - fixed at bottom of modal */}
        <div className="px-5 sm:px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <span>Official BeInsured Partner Network</span>
          <button onClick={onClose} className="font-medium text-slate-700 hover:text-slate-900 cursor-pointer">
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
