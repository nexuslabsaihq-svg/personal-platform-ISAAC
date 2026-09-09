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
      className="p-4 sm:p-5 rounded-xl bg-white/90 border border-slate-200/80 flex flex-col justify-between hover:border-amber-400/60 shadow-card hover:shadow-card-hover transition-all group"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-2xl sm:text-3xl font-sora font-bold text-amber-700 tracking-tight group-hover:scale-105 transition-transform">
          {prefix}{formatted}{suffix}
        </span>
        {Icon && (
          <div className="p-1.5 rounded-lg bg-amber-50 border border-amber-200/60 text-amber-700">
            <Icon size={16} />
          </div>
        )}
      </div>
      <p className="text-xs font-semibold text-slate-600 leading-snug">
        {label}
      </p>
    </div>
  );
}
