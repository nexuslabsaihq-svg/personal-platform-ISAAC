import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

/**
 * ScrollTriggerAnimations Hook & Components
 * 
 * Sistema completo de animaciones disparadas por scroll.
 * Incluye múltiples variantes y efectos predefinidos.
 */

/**
 * useScrollTrigger Hook
 * 
 * Hook personalizado para disparar animaciones en scroll.
 */
export function useScrollTrigger(ref, options = {}) {
  const {
    threshold = 0.2,
    once = true,
    margin = '0px',
  } = options;

  return useInView(ref, {
    once,
    amount: threshold,
    margin,
  });
}

/**
 * ScrollReveal Component
 * 
 * Componente que revela contenido con animación smooth al hacer scroll.
 * 
 * @param {React.ReactNode} children - Contenido a animar
 * @param {string} variant - 'fade', 'slideUp', 'slideLeft', 'slideRight', 'scale', 'blur' (default: 'slideUp')
 * @param {number} delay - Delay en segundos (default: 0)
 * @param {number} duration - Duración en segundos (default: 0.6)
 * @param {boolean} once - Animar solo una vez (default: true)
 * @param {string} className - Clases Tailwind adicionales
 */
export function ScrollReveal({
  children,
  variant = 'slideUp',
  delay = 0,
  duration = 0.6,
  once = true,
  className = '',
}) {
  const ref = useRef(null);
  const isInView = useScrollTrigger(ref, { threshold: 0.2, once });

  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    blur: {
      hidden: { opacity: 0, filter: 'blur(10px)' },
      visible: { opacity: 1, filter: 'blur(0px)' },
    },
    rotateIn: {
      hidden: { opacity: 0, rotate: -10 },
      visible: { opacity: 1, rotate: 0 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerContainer Component
 * 
 * Contenedor que anima sus hijos con efecto stagger.
 * 
 * @param {React.ReactNode} children - Items a animar (deben ser componentes motion o envueltos)
 * @param {number} staggerDelay - Delay entre items en segundos (default: 0.1)
 * @param {boolean} once - Animar solo una vez (default: true)
 * @param {string} className - Clases Tailwind adicionales
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  once = true,
  className = '',
}) {
  const ref = useRef(null);
  const isInView = useScrollTrigger(ref, { threshold: 0.2, once });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        return (
          <motion.div variants={itemVariants}>
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}

/**
 * ScrollParallaxText Component
 * 
 * Texto que se anima con parallax en scroll.
 */
export function ScrollParallaxText({
  children,
  className = '',
  speed = 0.5,
}) {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (latest) => latest * speed);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * NumberCounter Component
 * 
 * Anima números incrementalmente al hacer scroll.
 * 
 * @param {number} from - Número inicial (default: 0)
 * @param {number} to - Número final (required)
 * @param {string} suffix - Sufijo (ej: '+', '%')
 * @param {number} duration - Duración en segundos (default: 2)
 * @param {string} className - Clases Tailwind adicionales
 */
export function NumberCounter({
  from = 0,
  to,
  suffix = '',
  duration = 2,
  className = '',
}) {
  const ref = useRef(null);
  const isInView = useScrollTrigger(ref, { threshold: 0.5, once: true });
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    let animationFrameId;
    const startTime = Date.now();
    const frameDuration = (duration * 1000) / 60;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      const current = Math.floor(from + (to - from) * progress);
      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = setTimeout(animate, frameDuration);
      }
    };

    animate();

    return () => clearTimeout(animationFrameId);
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
      {suffix}
    </span>
  );
}

/**
 * ScrollOpacity Component
 * 
 * Cambia la opacidad basado en posición de scroll.
 */
export function ScrollOpacity({
  children,
  startOpacity = 1,
  endOpacity = 0.3,
  className = '',
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [startOpacity, 1, endOpacity]
  );

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * ScrollScale Component
 * 
 * Escala elemento basado en scroll.
 */
export function ScrollScale({
  children,
  startScale = 0.8,
  endScale = 1,
  className = '',
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 20%'],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [startScale, endScale]
  );

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * ScrollRotate Component
 * 
 * Rota elemento basado en scroll.
 */
export function ScrollRotate({
  children,
  startRotate = 0,
  endRotate = 360,
  className = '',
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 20%'],
  });

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [startRotate, endRotate]
  );

  return (
    <motion.div
      ref={ref}
      style={{ rotate }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * ScrollColor Component
 * 
 * Cambia color basado en scroll entre dos colores.
 */
export function ScrollColor({
  children,
  startColor = '#6B9BFF',
  endColor = '#E5C158',
  className = '',
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 20%'],
  });

  // Función para interpolar entre colores (hex)
  const interpolateColor = (progress) => {
    const startRGB = parseInt(startColor.slice(1), 16);
    const endRGB = parseInt(endColor.slice(1), 16);

    const startR = (startRGB >> 16) & 255;
    const startG = (startRGB >> 8) & 255;
    const startB = startRGB & 255;

    const endR = (endRGB >> 16) & 255;
    const endG = (endRGB >> 8) & 255;
    const endB = endRGB & 255;

    const r = Math.round(startR + (endR - startR) * progress);
    const g = Math.round(startG + (endG - startG) * progress);
    const b = Math.round(startB + (endB - startB) * progress);

    return `rgb(${r}, ${g}, ${b})`;
  };

  const [color, setColor] = useState(startColor);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      setColor(interpolateColor(progress));
    });

    return () => unsubscribe();
  }, [scrollYProgress, startColor, endColor]);

  return (
    <motion.div
      ref={ref}
      style={{ color }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * ScrollTriggerGroup Component
 * 
 * Agrupa múltiples animaciones de scroll juntas.
 */
export function ScrollTriggerGroup({
  children,
  onTrigger,
  className = '',
}) {
  const ref = useRef(null);
  const isInView = useScrollTrigger(ref, { threshold: 0.3, once: true });

  useEffect(() => {
    if (isInView && onTrigger) {
      onTrigger();
    }
  }, [isInView, onTrigger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
