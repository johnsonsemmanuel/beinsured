import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function TopSubtleHeroBackground() {
  const { pathname } = useLocation();

  // Curated page-specific automotive background images
  const backgroundMap = {
    '/': 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=80', // Home: Headlight & sleek road silhouette
    '/how-it-works': 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=2000&q=80', // How It Works: Modern car cockpit & steering
    '/coverage': 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=2000&q=80', // Coverage: Highway road journey
    '/claims': 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=2000&q=80', // Claims: Vehicle side profile detail
    '/partners': 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=2000&q=80', // Partners: Institutional fleet line
    '/about': 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=2000&q=80', // About Us: Classic Ghana automotive road
  };

  const currentImage = backgroundMap[pathname] || backgroundMap['/'];

  return (
    <div className="absolute top-0 left-0 right-0 h-[680px] sm:h-[760px] pointer-events-none overflow-hidden z-0 select-none">
      
      {/* Dynamic Route-Specific Background Image with Crossfade */}
      <AnimatePresence mode="wait">
        <motion.img
          key={pathname}
          src={currentImage}
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.13 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full object-cover object-top filter contrast-125 grayscale"
        />
      </AnimatePresence>

      {/* Subtle Mesh Line Pattern Grid */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Bottom Fade Gradient (smoothly transitions the top image into the canvas below) */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#faf9f6] via-[#faf9f6]/90 to-transparent" />
      
      {/* Side Vignette Fades */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#faf9f6] to-transparent" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#faf9f6] to-transparent" />
    </div>
  );
}
