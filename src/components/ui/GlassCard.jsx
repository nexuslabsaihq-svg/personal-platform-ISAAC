import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { usePointerDevice } from '../hooks/usePointerDevice';

/**
 * GlassCard Component
 * 
 * Card reutilizable con efecto glassmorphism premium.
 * Soporta hover effects, parallax, glow, y múltiples variantes.
 * 
 * @param {React.ReactNode} children - Contenido de la card
 * @param {string} className - Clases Tailwind adicionales
 * @param {boolean} hover - Activar hover effects (default: true)
 * @param {boolean} glow - Mostrar glow effect (default: true)
 * @param {string} glowColor - Color del glow (default: 'accent')
 * @param {number} blur - Intensidad del blur (0-20, default: 10)
 * @param {boolean} animated - Animar entrada (default: true)
 * @param {number} delay - Delay de animación en segundos (default: 0)
 * @param {boolean} interactive - Aplicar interactividad 3D (default: true)
 * @param {string} variant - 'default', 'accent', 'gold', 'minimal' (default: 'default')
 */
export default function GlassCard({
  children,
  className = '',
  hover = true,
  glow = true,
  glowColor = 'accent',
  blur = 10,
  animated = true,
  delay = 0,
  interactive = true,
  variant = 'default',
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const reducedMotion = useReducedMotion();
  const isFine = usePointerDevice();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Variantes de estilos
  const variantStyles = {
    default: 'bg-surface/80 border border-border-dark hover:border-accent/40',
    accent: 'bg-accent/10 border border-accent/30 hover:border-accent/60',
    gold: 'bg-gold/10 border border-gold/30 hover:border-gold/60',
    minimal: 'bg-transparent border border-border-dark/50 hover:border-border-dark',
  };

  // Color map para glow
  const glowColorMap = {
    accent: 'shadow-accent',
    gold: 'shadow-gold',
    violet: 'shadow-violet-custom',
    white: 'shadow-white/20',
  };

  const handleMouseMove = (e) => {
    if (!interactive || !isFine || reducedMotion || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * -6;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      initial={animated && !reducedMotion ? { opacity: 0, y: 16, scale: 0.95 } : {}}
      animate={
        animated && isInView && !reducedMotion
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 1 }
      }
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={
        interactive && !reducedMotion
          ? { rotateX: tilt.x, rotateY: tilt.y }
          : {}
      }
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 25,
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: interactive ? 800 : 'none',
      }}
      whileHover={hover && !reducedMotion ? { y: -4 } : {}}
      className={`relative group rounded-2xl backdrop-blur-md transition-all duration-300 overflow-hidden ${variantStyles[variant]} ${className}`}
    >
      {/* Glow effect background */}
      {glow && (
        <motion.div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl ${glowColorMap[glowColor]}`}
          style={{
            filter: `blur(${blur}px)`,
          }}
        />
      )}

      {/* Animated border glow on hover */}
      {glow && (
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none rounded-2xl"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(107, 155, 255, 0.1), transparent 60%)`,
          }}
        />
      )}

      {/* Content wrapper */}
      <motion.div
        className="relative z-10"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/**
 * GlassCardGrid Component
 * 
 * Grid de cards con animaciones staggered.
 */
export function GlassCardGrid({
  children,
  columns = 3,
  gap = 4,
  className = '',
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const gridColsMap = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  const gapMap = {
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8',
  };

  return (
    <motion.div
      ref={ref}
      className={`grid ${gridColsMap[columns]} ${gapMap[gap]} ${className}`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {React.Children.map(children, (child, idx) => {
        if (!React.isValidElement(child)) return child;

        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.5,
              delay: idx * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}

/**
 * GlassCardContent Component
 * 
 * Componente helper para contenido estructurado dentro de GlassCard.
 */
export function GlassCardContent({
  icon: Icon,
  title,
  description,
  footer,
  className = '',
}) {
  return (
    <div className={`p-6 space-y-4 ${className}`}>
      {Icon && (
        <motion.div
          className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent"
          whileHover={{ scale: 1.1, rotate: 12 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <Icon size={18} />
        </motion.div>
      )}

      {title && (
        <h3 className="text-sm font-sora font-semibold text-text-main group-hover:text-white transition-colors">
          {title}
        </h3>
      )}

      {description && (
        <p className="text-xs text-text-muted leading-relaxed group-hover:text-text-muted transition-colors">
          {description}
        </p>
      )}

      {footer && (
        <motion.div
          className="pt-2 border-t border-border-dark/50 text-[10px] text-text-muted group-hover:text-text-main transition-colors"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {footer}
        </motion.div>
      )}
    </div>
  );
}

/**
 * GlassCardButton Component
 * 
 * Botón interactivo dentro de GlassCard con animaciones.
 */
export function GlassCardButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
}) {
  const variants = {
    primary: 'bg-accent hover:bg-accent-hover text-white',
    secondary: 'bg-surface border border-border-dark hover:border-accent/50 text-text-main',
    ghost: 'text-accent hover:text-white hover:bg-accent/10',
  };

  return (
    <motion.button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
