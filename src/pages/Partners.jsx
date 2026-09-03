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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which insurance companies are on BeINsured?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BeINsured partners with Ghana\'s top insurance underwriters: Donewell Assurance, Vanguard Assurance, Hollard Ghana, GLICO General Insurance, Star Assurance, and Enterprise Insurance. All are licensed and regulated by the National Insurance Commission (NIC).'
      }
    },
    {
      '@type': 'Question',
      name: 'Are BeINsured policies regulated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every car policy issued through BeINsured is underwritten by licensed insurance partners under regulatory supervision by the National Insurance Commission (NIC).'
      }
    },
    {
      '@type': 'Question',
      name: 'How can I verify my BeINsured policy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can verify your policy instantly via USSD *170#, WhatsApp, or through the MTN MoMo app. Every policy generates an official electronic policy certificate.'
      }
    }
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
      desc: 'Official payment and USSD distribution channel enabling instant premium deduction and real-time digital policy sticker delivery on *170#.',
      src: '/mtn-momo-logo.jpg',
      alt: 'MTN Mobile Money Logo'
    },
    {
      id: 'calbank',
      name: 'CALBANK',
      shortName: 'CALBANK',
      initials: 'CB',
      type: 'Banking & Payment Partner',
      licence: 'BANK-GH-01',
      status: 'Active Partner',
      coverage: 'Banking & Payment Solutions',
      desc: 'Leading Ghanaian bank providing payment infrastructure and financial services support for motor insurance transactions.',
      src: '/calbank-logo.png',
      alt: 'CALBANK Logo'
    },
    {
      id: 'rudder',
      name: 'Rudder Insurance Brokers',
      shortName: 'Rudder',
      initials: 'RIB',
      type: 'Insurance Brokerage Partner',
      licence: 'BROK-GH-01',
      status: 'Active Partner',
      coverage: 'Insurance Brokerage & Advisory',
      desc: 'Professional insurance brokerage firm providing advisory services and facilitating optimal motor insurance solutions for clients.',
      src: '/rudder-insurance-logo.jpg',
      alt: 'Rudder Insurance Brokers Logo'
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
      desc: 'The official regulatory authority governing all insurance entities and micro-car insurance operations in Ghana.',
      src: '/nic-logo.png',
      alt: 'National Insurance Commission Logo'
    }
  ];

  return (
    <>
      <SEO
        title="Partners & Insurers | BeINsured"
        description="Meet BeINsured's licensed underwriter partners including Donewell Assurance, Vanguard Assurance, Hollard Ghana, GLICO, Star Assurance, and Enterprise Insurance."
        canonicalUrl="/partners"
        ogImage="/og-image.jpg"
        structuredData={[breadcrumbSchema, faqSchema]}
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
          <span className="text-[#FEBD19] font-semibold">8 Active Partners</span>
        </div>

        <LogoCloud logos={partnerLogos} onOpenChannelSelector={onOpenChannelSelector} />
      </div>

      {/* FAQ Section */}
      <div className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <SectionTag text="Frequently Asked Questions" className="justify-center" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Common questions about our partners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-lg font-extrabold text-slate-900">Which insurance companies are on BeINsured?</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              BeINsured partners with Ghana's top insurance underwriters: Donewell Assurance, Vanguard Assurance, Hollard Ghana, GLICO General Insurance, Star Assurance, and Enterprise Insurance. All are licensed and regulated by the National Insurance Commission (NIC).
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-lg font-extrabold text-slate-900">Are BeINsured policies regulated?</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Yes. Every car policy issued through BeINsured is underwritten by licensed insurance partners under regulatory supervision by the National Insurance Commission (NIC).
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-lg font-extrabold text-slate-900">How can I verify my BeINsured policy?</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              You can verify your policy instantly via USSD *170#, WhatsApp, or through the MTN MoMo app. Every policy generates an official electronic policy certificate.
            </p>
          </div>
        </div>
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
