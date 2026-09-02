import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function TopSubtleHeroBackground() {
  const { pathname } = useLocation();

  const backgroundMap = {
    '/': '/trotro-station.jpg',
    '/how-it-works': '/trotro-station.jpg',
    '/partners': '/trotro-station.jpg',
    '/about': '/trotro-station.jpg',
  };

  const currentImage = backgroundMap[pathname] || '/trotro-station.jpg';

  return (
    <div className="absolute top-0 left-0 right-0 h-[700px] sm:h-[780px] pointer-events-none overflow-hidden z-0 select-none">
      
      {/* Route-Specific Background Image with Animated Entry & Crossfade */}
      <AnimatePresence mode="wait">
        <motion.img
          key={pathname}
          src={currentImage}
          alt=""
          initial={{ opacity: 0, scale: 1.07 }}
          animate={{ opacity: 0.16, scale: 1.0 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ 
            opacity: { duration: 0.6, ease: "easeOut" },
            scale: { duration: 1.4, ease: [0.25, 1, 0.5, 1] }
          }}
          className="w-full h-full object-cover object-center filter contrast-125 grayscale"
        />
      </AnimatePresence>

      {/* Subtle Mesh Line Pattern Grid Layer */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Bottom Fade Gradient (smoothly transitions the top image into the canvas below) */}
      <div className="absolute bottom-0 inset-x-0 h-52 bg-gradient-to-t from-[#faf9f6] via-[#faf9f6]/90 to-transparent" />
      
      {/* Side Vignette Fades */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#faf9f6] to-transparent" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#faf9f6] to-transparent" />
    </div>
  );
}
