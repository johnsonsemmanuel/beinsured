import React from 'react';

export default function SectionTag({ text, className = '' }) {
  return (
    <div className={`inline-block border-b-4 border-brand-gold pb-0.5 text-xs font-extrabold uppercase tracking-widest text-brand-dark ${className}`}>
      <span>{text}</span>
    </div>
  );
}
