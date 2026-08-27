import React from 'react';

export default function TopSubtleHeroBackground() {
  return (
    <div className="absolute top-0 left-0 right-0 h-[680px] sm:h-[760px] pointer-events-none overflow-hidden z-0 select-none">
      {/* High-quality Seamless Automotive Ambient Image */}
      <img
        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=80"
        alt=""
        className="w-full h-full object-cover object-top opacity-[0.11] sm:opacity-[0.14] filter contrast-125 grayscale"
      />

      {/* Subtle Mesh Line Pattern Grid */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Bottom Fade Gradient (smoothly transitions the continuous top image into the canvas below) */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#faf9f6] via-[#faf9f6]/90 to-transparent" />
      
      {/* Side Vignette Fades */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#faf9f6] to-transparent" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#faf9f6] to-transparent" />
    </div>
  );
}
