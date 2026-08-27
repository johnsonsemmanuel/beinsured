import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up',
  distance = 24,
  duration = 0.6,
  once = true 
}) {
  const getInitialDirection = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance };
      case 'down':
        return { opacity: 0, y: -distance };
      case 'left':
        return { opacity: 0, x: distance };
      case 'right':
        return { opacity: 0, x: -distance };
      case 'scale':
        return { opacity: 0, scale: 0.96 };
      default:
        return { opacity: 0, y: distance };
    }
  };

  return (
    <motion.div
      initial={getInitialDirection()}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
