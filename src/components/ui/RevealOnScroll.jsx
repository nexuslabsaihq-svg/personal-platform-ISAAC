import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * RevealOnScroll - wraps children with a scroll-triggered reveal animation.
 * Plays once when element enters viewport. Respects prefers-reduced-motion.
 * 
 * @param {number} delay - Animation delay in seconds
 * @param {string} direction - 'up' | 'down' | 'left' | 'right' | 'none'
 * @param {boolean} blur - Whether to include a blur transition
 */
export default function RevealOnScroll({
  children,
  delay = 0,
  direction = 'up',
  blur = true,
  className = '',
  threshold = 0.1,
}) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, amount: threshold });

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const dirMap = {
    up: { y: 24 },
    down: { y: -24 },
    left: { x: 24 },
    right: { x: -24 },
    none: {},
  };

  const initial = {
    opacity: 0,
    filter: blur ? 'blur(4px)' : 'blur(0px)',
    ...dirMap[direction],
  };

  const animate = isInView
    ? { opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }
    : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
