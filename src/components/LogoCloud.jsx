import React, { useState } from 'react';
import PartnerModal from './PartnerModal';

export function LogoCloud({ logos = [], className = "", onOpenChannelSelector, ...props }) {
  const [selectedPartner, setSelectedPartner] = useState(null);

  return (
    <>
      <div
        className={`mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl ${className}`}
        {...props}
      >
        {logos.map((logo) => (
          <div
            key={logo.id || logo.alt}
            onClick={() => setSelectedPartner(logo)}
            className="group relative flex flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#FEBD19] hover:-translate-y-1 cursor-pointer"
          >
            {/* Click info hint badge */}
            <span className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold text-[#0F172A] bg-[#FEBD19] px-2 py-0.5 rounded-full">
              Click details
            </span>

            {/* Logo Image or Custom Logo Badge */}
            {logo.src ? (
              <img
                alt={logo.alt || logo.name}
                className="block h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                loading="lazy"
                src={logo.src}
              />
            ) : (
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-[#FEBD19] text-[#0F172A] font-extrabold text-lg flex items-center justify-center shadow-sm group-hover:bg-[#0F172A] group-hover:text-[#FEBD19] transition-colors">
                  {logo.initials || logo.name?.substring(0, 2).toUpperCase()}
                </div>
                <span className="text-xs font-bold text-slate-800 text-center leading-tight">
                  {logo.name}
                </span>
                {logo.licence && (
                  <span className="text-[10px] font-mono text-slate-500">
                    {logo.licence}
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Partner Details Modal */}
      <PartnerModal 
        isOpen={Boolean(selectedPartner)} 
        partner={selectedPartner} 
        onClose={() => setSelectedPartner(null)}
        onOpenChannelSelector={onOpenChannelSelector}
      />
    </>
  );
}

export default LogoCloud;
