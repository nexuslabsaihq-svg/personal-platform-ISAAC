import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, useInView } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

/**
 * ScrollParallax Component
 * 
 * Sistema avanzado de parallax que crea efecto de profundidad en scroll.
 * Utiliza motion values y transforms para máximo rendimiento.
 * 
 * @param {React.ReactNode} children - Contenido a animar
 * @param {number} offset - Multiplicador de velocidad del parallax (0-1, default: 0.5)
 * @param {boolean} rotate - Aplicar rotación leve en scroll (default: false)
 * @param {boolean} scale - Aplicar escala en scroll (default: false)
 * @param {string} className - Clases Tailwind adicionales
 * @param {boolean} blur - Aplicar blur en scroll (default: false)
 */
export default function ScrollParallax({
  children,
  offset = 0.5,
  rotate = false,
  scale = false,
  blur = false,
  className = '',
}) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  // Motion value para scroll
  const scrollY = useMotionValue(0);

  // Transforms basados en scroll
  const y = useTransform(scrollY, (latest) => latest * offset);
  const rotationValue = useTransform(
    scrollY,
    (latest) => (rotate ? (latest * offset) / 100 : 0)
  );
  const scaleValue = useTransform(
    scrollY,
    (latest) => (scale ? 1 + (latest * offset) / 2000 : 1)
  );
  const blurValue = useTransform(
    scrollY,
    (latest) => (blur ? (latest * offset) / 50 : 0)
  );

  useEffect(() => {
    if (reducedMotion) return;

    const handleScroll = () => {
      const elementTop = ref.current?.getBoundingClientRect().top || 0;
      const scrollValue = window.scrollY - (elementTop - window.innerHeight);
      scrollY.set(scrollValue);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY, reducedMotion]);

  return (
    <motion.div
      ref={ref}
      style={{
        y: reducedMotion ? 0 : y,
        rotate: reducedMotion ? 0 : rotationValue,
        scale: reducedMotion ? 1 : scaleValue,
        filter: blur ? blurValue.get() : 'blur(0px)',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * ParallaxLayer Component
 * 
 * Capa de parallax independiente con su propio offset.
 * Útil para crear efectos de profundidad con múltiples capas.
 */
export function ParallaxLayer({
  children,
  depth = 1,
  className = '',
}) {
  const offset = 0.3 * depth;

  return (
    <ScrollParallax offset={offset} className={className}>
      {children}
    </ScrollParallax>
  );
}

/**
 * ParallaxContainer Component
 * 
 * Contenedor que gestiona múltiples capas de parallax automáticamente.
 */
export function ParallaxContainer({
  children,
  layers = 3,
  className = '',
}) {
  const reducedMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {React.Children.map(children, (child, idx) => {
        if (!React.isValidElement(child)) return child;

        const depth = (idx + 1) / layers;
        const offset = reducedMotion ? 0 : 0.5 * depth;

        return (
          <ScrollParallax
            key={idx}
            offset={offset}
            className={child.props.className}
          >
            {child.props.children}
          </ScrollParallax>
        );
      })}
    </motion.div>
  );
}
