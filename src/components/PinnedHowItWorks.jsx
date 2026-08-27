import React from "react";
import { motion } from "framer-motion";

const Pin = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
  </svg>
);

const Card = ({
  number,
  title,
  description,
  className = "",
  rotate = "",
}) => {
  return (
    <div
      className={`relative w-full md:w-[290px] transition-all duration-300 hover:z-30 hover:scale-105 ${rotate} ${className}`}
    >
      <div className="bg-white p-3 rounded-[28px] shadow-[0px_10px_24px_0px_rgba(15,23,42,0.08)] border border-slate-200/80">
        <Pin className="w-8 h-8 text-[#FEBD19] z-20 mb-4 mx-auto drop-shadow-sm" />
        <div className="bg-[#F9F8F3] border border-amber-300/60 rounded-[18px] p-5 h-full flex flex-col relative overflow-hidden">
          <span className="text-[#0F172A] text-4xl font-extrabold mb-3 tracking-tight">
            {number}
          </span>
          <h3 className="text-xl font-bold text-[#0F172A] leading-snug mb-2">
            {title}
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const DEFAULT_CARD_POSITIONS = [
  { className: "md:absolute md:top-0 md:left-[10%]", rotate: "rotate-3" },
  { className: "md:absolute md:top-[60px] md:right-[10%]", rotate: "-rotate-3" },
  { className: "md:absolute md:top-[380px] md:left-[25%]", rotate: "rotate-2" },
];

export default function PinnedHowItWorks({
  features,
  className = "",
  stepPositions,
}) {
  const defaultFeatures = [
    {
      title: "Dial *170# or Open WhatsApp",
      description: "Message our verified WhatsApp bot or dial *170# on your mobile handset to begin instant car insurance registration.",
    },
    {
      title: "Enter Vehicle Reg & Pay via MoMo",
      description: "Provide your vehicle number plate (e.g. GX-1940-24), choose Third-Party or Comprehensive, and confirm MoMo payment.",
    },
    {
      title: "Receive Instant Digital Sticker",
      description: "Your active policy confirmation SMS is issued immediately, backed by licensed underwriter partners.",
    },
  ];

  const data = features && features.length > 0 ? features : defaultFeatures;
  const positions = stepPositions || DEFAULT_CARD_POSITIONS;

  const height = 740;

  return (
    <div className={`relative ${className}`}>
      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className="relative w-full max-w-[950px] mx-auto flex flex-col space-y-6 md:space-y-0 md:block h-auto md:h-[var(--md-height)]"
          style={{ "--md-height": `${height}px` }}
        >
          {data.length > 1 && (
            <svg
              className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block z-0"
              viewBox={`0 0 950 ${height}`}
              preserveAspectRatio="none"
            >
              {(() => {
                const pathD = "M 280 150 C 480 150, 520 220, 680 220 C 780 220, 500 360, 380 480";
                return (
                  <motion.path
                    d={pathD}
                    stroke="#FEBD19"
                    strokeWidth="3"
                    strokeDasharray="8 6"
                    fill="none"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    initial={{ strokeDashoffset: 0 }}
                    animate={{
                      strokeDashoffset: -140,
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                );
              })()}
            </svg>
          )}

          {data.map((step, index) => {
            const position = positions[index % positions.length];

            return (
              <Card
                key={step.title}
                number={`0${index + 1}`}
                title={step.title}
                description={step.description}
                rotate={position.rotate}
                className={position.className}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
