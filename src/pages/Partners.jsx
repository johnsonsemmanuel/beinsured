import React from 'react';
import { Link } from 'react-router-dom';
import SectionTag from '../components/SectionTag';
import PillButton from '../components/PillButton';
import LogoCloud from '../components/LogoCloud';
import SEO from '../components/SEO';
import { ArrowLeft } from 'lucide-react';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beinsured.com' },
    { '@type': 'ListItem', position: 2, name: 'Partners & Insurers' }
  ]
};

export default function Partners({ onOpenChannelSelector }) {
  const partnerLogos = [
    {
      id: 'donewell',
      name: 'Donewell Assurance',
      shortName: 'Donewell',
      initials: 'DA',
      type: 'Motor Insurance Underwriter',
      licence: 'NIC-LIC-002',
      status: 'Active Underwriter',
      coverage: 'Third-Party & Comprehensive Protection',
      desc: 'Ghana\'s trusted motor insurance underwriter providing comprehensive backing and full regulatory compliance across all 16 regions.',
      src: '/donewell-logo.png',
      alt: 'Donewell Assurance Logo'
    },
    {
      id: 'vanguard',
      name: 'Vanguard Assurance',
      shortName: 'Vanguard',
      initials: 'VA',
      type: 'Motor Insurance Underwriter',
      licence: 'NIC-LIC-003',
      status: 'Active Underwriter',
      coverage: 'Third-Party & Comprehensive Protection',
      desc: 'Authorized underwriting partner specializing in flexible motor protection, rapid processing, and instant electronic sticker verification.',
      src: '/vanguard-logo.png',
      alt: 'Vanguard Assurance Logo'
    },
    {
      id: 'hollard',
      name: 'Hollard Ghana',
      shortName: 'Hollard',
      initials: 'HG',
      type: 'Licensed General Underwriter',
      licence: 'NIC-LIC-005',
      status: 'Active Underwriter',
      coverage: 'Passenger & Commercial Auto Protection',
      desc: 'Established motor underwriter supporting rapid digital settlement via mobile money rails and dedicated roadside motor assistance.',
      src: '/hollard-logo.png',
      alt: 'Hollard Ghana Logo'
    },
    {
      id: 'glico',
      name: 'GLICO General Insurance',
      shortName: 'GLICO',
      initials: 'GG',
      type: 'Licensed General Underwriter',
      licence: 'NIC-LIC-008',
      status: 'Active Underwriter',
      coverage: 'Passenger & Commercial Auto Protection',
      desc: 'Established motor underwriter supporting rapid digital settlement via mobile money rails and dedicated roadside motor assistance.',
      src: '/glico-logo.jpg',
      alt: 'GLICO General Insurance Logo'
    },
    {
      id: 'star',
      name: 'Star Assurance',
      shortName: 'Star',
      initials: 'SA',
      type: 'Motor Micro-Insurance Partner',
      licence: 'NIC-LIC-004',
      status: 'Active Underwriter',
      coverage: 'Micro-Motor & Commercial Vehicle Protection',
      desc: 'Authorized underwriting partner specializing in flexible micro-duration protection, rapid processing, and instant electronic sticker verification.',
      src: '/star-logo.png',
      alt: 'Star Assurance Logo'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Insurance',
      shortName: 'Enterprise',
      initials: 'EI',
      type: 'Motor Insurance Underwriter',
      licence: 'NIC-LIC-001',
      status: 'Active Underwriter',
      coverage: 'Third-Party & Comprehensive Protection',
      desc: 'Ghana\'s leading motor insurance underwriter providing comprehensive backing, 24/7 underwriting reserves, and full regulatory compliance across all 16 regions.',
      src: '/enterprise-logo.png',
      alt: 'Enterprise Insurance Logo'
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
      coverage: 'Motor Insurance Standards',
      desc: 'Peak trade association ensuring underwriter solvency, fair resolution, and motor insurance consumer protection.'
    }
  ];

  return (
    <>
      <SEO
        title="Partners & Insurers | BeINsured"
        description="Meet BeINsured's licensed underwriter partners including Donewell Assurance, Vanguard Assurance, Hollard Ghana, GLICO, Star Assurance, and Enterprise Insurance."
        canonicalUrl="/partners"
        ogImage="/og-image.jpg"
        structuredData={[breadcrumbSchema]}
      />
    <div className="py-10 px-4 sm:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Page Title & Intro */}
      <div className="space-y-4 max-w-3xl">
        <SectionTag text="Institutional Directory" />
        <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
          Licensed Underwriters & Institutional Partners
        </h1>
        <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
           BeINsured operates as a digital distribution platform. Click on any licensed partner or underwriter below to inspect official registration credentials, protection types, and verification details.
        </p>
      </div>

      {/* Interactive Partner Logo Cloud Grid */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between text-xs text-slate-500 font-bold uppercase tracking-wider">
          <span>Click any partner card to view complete regulatory details</span>
          <span className="text-[#FEBD19] font-semibold">11 Active Partners</span>
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
    </>
  );
}
