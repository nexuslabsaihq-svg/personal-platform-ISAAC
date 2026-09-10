import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

const overlayVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

/**
 * PageTransition Component
 * 
 * Proporciona transiciones suaves entre páginas/secciones.
 * Utiliza Framer Motion para animar la entrada y salida de contenido.
 * 
 * @param {React.ReactNode} children - Contenido a animar
 * @param {string} key - Clave única para triggear animación en cambios de ruta
 * @param {boolean} showOverlay - Mostrar overlay durante transición (default: false)
 * @param {string} overlayColor - Color del overlay (default: 'rgba(11, 14, 20, 0.5)')
 * @param {boolean} blur - Aplicar blur al contenido de entrada (default: true)
 */
export default function PageTransition({
  children,
  showOverlay = false,
  overlayColor = 'rgba(11, 14, 20, 0.5)',
  blur = true,
}) {
  const reducedMotion = useReducedMotion();

  const finalVariants = reducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0 } },
        exit: { opacity: 0, transition: { duration: 0 } },
      }
    : pageVariants;

  return (
    <AnimatePresence mode="wait">
      {/* Overlay opcional durante transición */}
      {showOverlay && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-40"
          style={{ backgroundColor: overlayColor }}
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          aria-hidden="true"
        />
      )}

      {/* Contenido principal */}
      <motion.div
        variants={finalVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{
          backdropFilter: blur ? 'blur(4px)' : 'none',
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
