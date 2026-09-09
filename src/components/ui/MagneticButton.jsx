import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { usePointerDevice } from '../../hooks/usePointerDevice';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * MagneticButton - wraps any children with a subtle magnetic pull toward the cursor.
 * The pull radius is configurable (default 80px) and max displacement is 8px.
 * Completely disabled on touch/coarse pointer devices and reduced motion.
 */
export default function MagneticButton({ children, className = '', strength = 0.4, radius = 80 }) {
  const ref = useRef(null);
  const isFine = usePointerDevice();
  const reducedMotion = useReducedMotion();
  const [displacement, setDisplacement] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!isFine || reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < radius) {
      const pull = (1 - dist / radius) * strength;
      setDisplacement({
        x: Math.max(-8, Math.min(8, dx * pull)),
        y: Math.max(-8, Math.min(8, dy * pull)),
      });
    }
  };

  const handleMouseLeave = () => setDisplacement({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: displacement.x, y: displacement.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 25, mass: 0.5 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
