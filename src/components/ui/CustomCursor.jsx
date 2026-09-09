import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { usePointerDevice } from '../../hooks/usePointerDevice';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function CustomCursor() {
  const isFine = usePointerDevice();
  const reducedMotion = useReducedMotion();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [variant, setVariant] = useState('default');
  const posRef = useRef({ x: -100, y: -100 });
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!isFine || reducedMotion) return;

    // Hide native cursor
    document.body.style.cursor = 'none';

    const handleMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      // Dot follows cursor instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    // Ring follows with lerp via RAF for smooth lag
    let ringX = -100, ringY = -100;
    const animate = () => {
      ringX += (posRef.current.x - ringX) * 0.15;
      ringY += (posRef.current.y - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    // Detect interactive elements
    const handleEnter = (e) => {
      const el = e.target;
      if (el.tagName === 'A' || el.tagName === 'BUTTON' || el.closest('button') || el.closest('a')) {
        setVariant('link');
      } else if (el.closest('[data-cursor="project"]')) {
        setVariant('project');
      } else if (el.closest('[data-cursor="image"]')) {
        setVariant('image');
      }
    };
    const handleLeave = () => setVariant('default');

    window.addEventListener('mousemove', handleMove, { passive: true });
    document.addEventListener('mouseover', handleEnter);
    document.addEventListener('mouseout', handleLeave);

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', handleEnter);
      document.removeEventListener('mouseout', handleLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isFine, reducedMotion]);

  if (!isFine || reducedMotion) return null;

  const ringSize = variant === 'link' ? 48 : variant === 'project' ? 56 : 32;
  const ringColor = variant === 'project' ? '#E5C158' : '#6B9BFF';
  const dotColor = variant === 'project' ? '#E5C158' : '#6B9BFF';

  return (
    <>
      {/* Outer ring — lags behind */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border transition-all duration-150"
        style={{
          width: ringSize,
          height: ringSize,
          borderColor: ringColor,
          opacity: 0.6,
          marginLeft: (ringSize - 32) / -2 + 'px',
          marginTop: (ringSize - 32) / -2 + 'px',
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease',
        }}
      />
      {/* Inner dot — instant */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          width: 8,
          height: 8,
          backgroundColor: dotColor,
          transition: 'background-color 0.15s ease',
        }}
      />
    </>
  );
}
