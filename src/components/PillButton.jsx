import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PillButton({
  children,
  onClick,
  href,
  variant = 'gold', // 'gold' | 'white' | 'dark' | 'cream'
  className = '',
  icon = true,
  type = 'button'
}) {
  const baseStyles = "group inline-flex items-center gap-3 font-extrabold text-sm px-6 py-3 rounded-full transition-colors duration-300 cursor-pointer select-none shadow-md hover:shadow-lg";

  const variantStyles = {
    gold: "bg-[#FEBD19] text-[#0F172A] border border-[#FEBD19] hover:bg-[#0F172A] hover:text-[#FEBD19] hover:border-[#0F172A]",
    white: "bg-white text-[#0F172A] border border-slate-300 shadow-sm hover:bg-[#FEBD19] hover:text-[#0F172A] hover:border-[#FEBD19]",
    dark: "bg-[#0F172A] text-white shadow-sm hover:bg-[#FEBD19] hover:text-[#0F172A]",
    cream: "bg-[#F9F8F3] text-[#0F172A] border border-slate-200 hover:bg-[#FEBD19] hover:text-[#0F172A]"
  };

  const circleStyles = {
    gold: "w-6 h-6 rounded-full bg-[#0F172A] text-[#FEBD19] group-hover:bg-[#FEBD19] group-hover:text-[#0F172A] flex items-center justify-center text-xs transition-colors duration-300 group-hover:translate-x-0.5",
    white: "w-6 h-6 rounded-full bg-[#FEBD19] text-[#0F172A] group-hover:bg-[#0F172A] group-hover:text-[#FEBD19] flex items-center justify-center text-xs transition-colors duration-300 group-hover:translate-x-0.5",
    dark: "w-6 h-6 rounded-full bg-[#FEBD19] text-[#0F172A] group-hover:bg-[#0F172A] group-hover:text-[#FEBD19] flex items-center justify-center text-xs transition-colors duration-300 group-hover:translate-x-0.5",
    cream: "w-6 h-6 rounded-full bg-[#FEBD19] text-[#0F172A] group-hover:bg-[#0F172A] group-hover:text-[#FEBD19] flex items-center justify-center text-xs transition-colors duration-300 group-hover:translate-x-0.5"
  };

  const Content = (
    <>
      <span>{children}</span>
      {icon && (
        <span className={circleStyles[variant] || circleStyles.gold}>
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.a 
        href={href} 
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={`${baseStyles} ${variantStyles[variant] || variantStyles.gold} ${className}`}
      >
        {Content}
      </motion.a>
    );
  }

  return (
    <motion.button 
      type={type} 
      onClick={onClick} 
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`${baseStyles} ${variantStyles[variant] || variantStyles.gold} ${className}`}
    >
      {Content}
    </motion.button>
  );
}
