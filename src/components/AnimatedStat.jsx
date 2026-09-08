import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function AnimatedStat({ value, suffix = '', prefix = '', decimals = 0, label, icon: Icon }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const duration = 1500; // 1.5s as requested

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = easeOut * value;
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, value]);

  const formatted = decimals > 0 
    ? displayValue.toFixed(decimals) 
    : Math.round(displayValue);

  return (
    <div
      ref={ref}
      className="p-4 sm:p-5 rounded-xl bg-[#131722]/80 border border-[#1F2430]/60 flex flex-col justify-between hover:border-gold/30 hover:shadow-[0_4px_20px_-4px_rgba(212,175,55,0.12)] transition-all group"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-2xl sm:text-3xl font-sora font-bold text-gold tracking-tight group-hover:scale-105 transition-transform">
          {prefix}{formatted}{suffix}
        </span>
        {Icon && (
          <div className="p-1.5 rounded-lg bg-[#1F2430]/40 text-gold/80">
            <Icon size={16} />
          </div>
        )}
      </div>
      <p className="text-xs font-medium text-[#8B92A5] leading-snug">
        {label}
      </p>
    </div>
  );
}
