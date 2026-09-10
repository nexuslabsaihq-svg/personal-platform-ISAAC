import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

/**
 * CustomCursor Component
 * 
 * Cursor interactivo premium con múltiples modos y efectos visuales.
 * Responde a hover sobre elementos interactivos específicos.
 */
export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  // Motion values
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  const ringX = useMotionValue(0);
  const ringY = useMotionValue(0);

  // Transform values con delay
  const dotXSmoothed = useTransform(dotX, (latest) => latest);
  const dotYSmoothed = useTransform(dotY, (latest) => latest);

  const [cursorType, setCursorType] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Update cursor position
      cursorX.set(clientX);
      cursorY.set(clientY);

      // Dot sigue con delay
      dotX.set(clientX - 4);
      dotY.set(clientY - 4);

      // Ring sigue con más delay
      ringX.set(clientX - 15);
      ringY.set(clientY - 15);

      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = (e) => {
      // Detectar tipo de elemento
      const target = e.target;

      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.className?.includes('group')
      ) {
        setCursorType('pointer');
      } else if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('input') ||
        target.closest('textarea')
      ) {
        setCursorType('text');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter, true);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.body.style.cursor = 'auto';
    };
  }, [cursorX, cursorY, dotX, dotY, ringX, ringY]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-50 w-8 h-8 rounded-full border-2 border-accent/30 mix-blend-screen"
        style={{
          x: ringX,
          y: ringY,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: cursorType === 'pointer' ? 1.5 : 1,
          borderColor:
            cursorType === 'pointer'
              ? 'rgba(107, 155, 255, 0.6)'
              : 'rgba(107, 155, 255, 0.3)',
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 40,
          mass: 0.5,
        }}
      />

      {/* Middle glow circle */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 w-6 h-6 rounded-full bg-accent/20 blur-sm mix-blend-screen"
        style={{
          x: dotX,
          y: dotY,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: cursorType === 'pointer' ? 1.3 : 1,
          backgroundColor:
            cursorType === 'pointer'
              ? 'rgba(107, 155, 255, 0.3)'
              : 'rgba(107, 155, 255, 0.2)',
        }}
        transition={{
          type: 'spring',
          stiffness: 800,
          damping: 50,
          mass: 0.3,
        }}
      />

      {/* Inner dot */}
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-50 w-2 h-2 rounded-full bg-accent mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isVisible ? 1 : 0,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorType === 'pointer' ? 1.5 : 1,
          backgroundColor:
            cursorType === 'text'
              ? 'rgba(107, 155, 255, 0.6)'
              : 'rgba(107, 155, 255, 0.8)',
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 50,
          mass: 0.1,
        }}
      />

      {/* Trailing particles */}
      {cursorType === 'pointer' && (
        <TrailingParticles cursorX={cursorX} cursorY={cursorY} isVisible={isVisible} />
      )}
    </>
  );
}

/**
 * TrailingParticles Component
 * 
 * Partículas que siguen el cursor cuando está sobre un elemento interactivo.
 */
function TrailingParticles({ cursorX, cursorY, isVisible }) {
  const particles = useRef(
    Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: useMotionValue(0),
      y: useMotionValue(0),
      opacity: useMotionValue(0),
    }))
  );

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      particles.current.forEach((particle, index) => {
        setTimeout(() => {
          particle.x.set(cursorX.get());
          particle.y.set(cursorY.get());
          particle.opacity.set(0.6);

          // Fade out after delay
          setTimeout(() => {
            particle.opacity.set(0);
          }, 400);
        }, index * 30);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [cursorX, cursorY, isVisible]);

  return (
    <>
      {particles.current.map((particle) => (
        <motion.div
          key={particle.id}
          className="pointer-events-none fixed top-0 left-0 z-40 w-1 h-1 rounded-full bg-accent mix-blend-screen"
          style={{
            x: particle.x,
            y: particle.y,
            opacity: particle.opacity,
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            y: [particle.y.get(), particle.y.get() + 20],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
        />
      ))}
    </>
  );
}
