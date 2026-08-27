import React from 'react';
import { Link } from 'react-router-dom';
import SectionTag from '../components/SectionTag';
import PillButton from '../components/PillButton';
import LogoCloud from '../components/LogoCloud';
import { ArrowLeft } from 'lucide-react';

export default function Partners({ onOpenChannelSelector }) {
  const partnerLogos = [
    {
      id: 'enterprise',
      name: 'Enterprise Insurance',
      shortName: 'Enterprise',
      initials: 'EI',
      type: 'Motor Insurance Underwriter',
      licence: 'NIC-LIC-001',
      status: 'Active Underwriter',
      coverage: 'Third-Party & Comprehensive Car Cover',
      desc: 'Ghana\'s leading motor insurance underwriter providing comprehensive claims backing, 24/7 underwriting reserves, and full regulatory compliance across all 16 regions.'
    },
    {
      id: 'star',
      name: 'Star Assurance',
      shortName: 'Star',
      initials: 'SA',
      type: 'Motor Micro-Insurance Partner',
      licence: 'NIC-LIC-004',
      status: 'Active Underwriter',
      coverage: 'Micro-Motor & Commercial Vehicle Cover',
      desc: 'Authorized underwriting partner specializing in flexible micro-duration car coverage, rapid claims processing, and instant electronic sticker verification.'
    },
    {
      id: 'glico',
      name: 'GLICO General Insurance',
      shortName: 'GLICO',
      initials: 'GG',
      type: 'Licensed General Underwriter',
      licence: 'NIC-LIC-008',
      status: 'Active Underwriter',
      coverage: 'Passenger & Commercial Auto Coverage',
      desc: 'Established motor underwriter supporting rapid digital claims settlement via mobile money rails and dedicated roadside motor assistance.'
    },
    {
      id: 'momo',
      name: 'MTN Mobile Money (MoMo)',
      shortName: 'MTN MoMo',
      initials: 'MM',
      type: 'Digital Distribution & Rail Partner',
      licence: 'MOMO-GH-01',
      status: 'Active Rail Partner',
      coverage: 'USSD *170# & MoMo App Direct Billing',
      desc: 'Official payment and USSD distribution channel enabling instant premium deduction and real-time digital policy sticker delivery on *170#.'
    },
    {
      id: 'telecel',
      name: 'Telecel Cash',
      shortName: 'Telecel',
      initials: 'TC',
      type: 'Mobile Money Partner',
      licence: 'TEL-GH-02',
      status: 'Active Rail Partner',
      coverage: 'Mobile Money Car Premium Payments',
      desc: 'Integrated mobile money wallet rail providing instant micro-premium settlements for car owners nationwide.'
    },
    {
      id: 'at',
      name: 'AT Money',
      shortName: 'AT Money',
      initials: 'AT',
      type: 'Mobile Money Partner',
      licence: 'ATM-GH-03',
      status: 'Active Rail Partner',
      coverage: 'Mobile Wallet Checkout',
      desc: 'Telecom mobile money partner supporting micro-duration motor insurance premiums.'
    },
    {
      id: 'nic',
      name: 'National Insurance Commission (NIC)',
      shortName: 'NIC Ghana',
      initials: 'NIC',
      type: 'Insurance Regulatory Body',
      licence: 'GOV-NIC-GH',
      status: 'Regulatory Oversight',
      coverage: 'Motor Database & Sticker Verification',
      desc: 'The official regulatory authority governing all insurance entities and micro-car insurance operations in Ghana.'
    },
    {
      id: 'gia',
      name: 'Ghana Insurance Association (GIA)',
      shortName: 'GIA',
      initials: 'GIA',
      type: 'Industry Association Member',
      licence: 'GIA-MBR-88',
      status: 'Industry Body',
      coverage: 'Motor Claims & Industry Standards',
      desc: 'Peak trade association ensuring underwriter solvency, fair claims resolution, and motor insurance consumer protection.'
    }
  ];

  return (
    <div className="py-10 px-4 sm:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Back button */}
      <div>
        <Link 
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#FEBD19] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Page Title & Intro */}
      <div className="space-y-4 max-w-3xl">
        <SectionTag text="Institutional Directory" />
        <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
          Licensed Underwriters & Institutional Partners
        </h1>
        <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
          BeINsured operates as a digital distribution platform. Click on any licensed partner or underwriter below to inspect official registration credentials, insurance cover types, and verification details.
        </p>
      </div>

      {/* Interactive Partner Logo Cloud Grid */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between text-xs text-slate-500 font-bold uppercase tracking-wider">
          <span>Click any partner card to view complete regulatory details</span>
          <span className="text-[#FEBD19] font-semibold">8 Active Partners</span>
        </div>

        <LogoCloud logos={partnerLogos} onOpenChannelSelector={onOpenChannelSelector} />
      </div>

      {/* Regulatory Safeguards */}
      <div className="card-gold p-8 sm:p-10 space-y-6">
        <div className="space-y-2">
          <SectionTag text="Regulatory Safeguards" />
          <h2 className="text-2xl font-extrabold text-brand-dark">Institutional Clearance & Safety</h2>
        </div>

        <p className="text-xs sm:text-sm text-brand-dark/90 leading-relaxed max-w-3xl font-medium">
          Every car policy issued through *170#, WhatsApp, or MoMo generates an official electronic policy certificate backed by the selected underwriter. Vehicle owners can verify policy authenticity on demand.
        </p>

        <div className="pt-2">
          <PillButton variant="dark" onClick={onOpenChannelSelector}>
            Access Verified Channels
          </PillButton>
        </div>
      </div>

    </div>
  );
}
