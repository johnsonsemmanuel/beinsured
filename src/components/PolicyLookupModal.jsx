import React, { useState } from 'react';
import { X, Search, ShieldAlert, Smartphone, ArrowRight, Car } from 'lucide-react';
import PillButton from './PillButton';

export default function PolicyLookupModal({ isOpen, onClose, onOpenChannelSelector }) {
  const [searchValue, setSearchValue] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-brand-cream/60">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-dark mb-0.5 border-b-2 border-brand-gold pb-0.5">
              <span>Car Policy Status Placeholder</span>
            </div>
            <h3 className="text-xl font-bold text-brand-dark">Verify Vehicle Policy</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-600 mb-2">
                Vehicle Registration Number or Car Policy ID
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="e.g. GX-8829-24 or POL-CAR-9012"
                  className="w-full px-4 py-3.5 pl-11 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-brand-gold transition-all font-mono"
                />
                <Car className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            <PillButton variant="gold" type="submit" className="w-full justify-center py-3">
              Search Vehicle Database
            </PillButton>
          </form>

          {/* Design Placeholder Notice */}
          <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200/80 space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wide">
              <ShieldAlert className="w-4 h-4 text-amber-600" />
              <span>Design Placeholder Notice</span>
            </div>
            <p className="text-xs text-amber-950 leading-relaxed">
              Direct web-based car policy lookup is a design placeholder for v1. To instantly verify active car coverage or check digital sticker status, dial USSD *170# or open WhatsApp:
            </p>
            <div className="pt-1 flex flex-wrap gap-2">
              <button
                onClick={() => { onClose(); onOpenChannelSelector(); }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-dark bg-brand-gold px-3.5 py-1.5 rounded-full border border-amber-400/60 shadow-sm hover:bg-amber-400 cursor-pointer"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Verify via *170# or WhatsApp</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>BeInsured Car Protection</span>
          <button onClick={onClose} className="font-medium text-slate-700 hover:text-brand-dark cursor-pointer">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
