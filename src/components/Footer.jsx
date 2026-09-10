import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Heart, Code2, Zap } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS = [
  { icon: Github, href: 'https://github.com/nexuslabsaihq-svg', label: 'GitHub', color: 'hover:text-white' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/isaacpasten', label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: Mail, href: 'mailto:isaacpasten.dev@gmail.com', label: 'Email', color: 'hover:text-accent' },
];

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const reducedMotion = useReducedMotion();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={footerRef} className="border-t border-border-dark/40 py-16 max-w-6xl mx-auto px-4 sm:px-6 relative overflow-hidden">
      {/* Fondo decorativo */}
      {!reducedMotion && (
        <motion.div
          className="absolute inset-0 pointer-events-none -z-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-accent/3 blur-3xl"
            animate={!reducedMotion ? { y: [0, -30, 0] } : {}}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-0 right-1/3 w-72 h-72 rounded-full bg-gold/3 blur-3xl"
            animate={!reducedMotion ? { y: [0, 30, 0] } : {}}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      )}

      <div className="relative z-10 space-y-12">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2.5">
              <motion.div
                className="w-9 h-9 rounded-lg bg-surface border border-border-dark flex items-center justify-center font-sora font-bold text-sm text-accent"
                whileHover={{ scale: 1.1, rotate: 12 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                IP
              </motion.div>
              <div>
                <div className="font-sora font-semibold text-sm text-text-main">Isaac Pastén</div>
                <div className="font-mono text-[10px] text-text-muted">Administración · IA · Dev</div>
              </div>
            </div>
            <p className="text-xs text-text-muted leading-relaxed max-w-sm">
              Construyendo soluciones administrativas inteligentes y eficientes. Con pasión por la gestión operativa y la transformación digital.
            </p>
            <motion.div
              className="inline-flex items-center gap-1.5 text-xs text-text-muted font-mono"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-emerald-400"
                animate={!reducedMotion ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Disponible para proyectos
            </motion.div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-sora font-semibold text-text-main flex items-center gap-2">
              <Code2 size={14} className="text-accent" />
              Navegación Rápida
            </h4>
            <nav className="grid grid-cols-2 gap-2">
              {FOOTER_LINKS.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-xs text-text-muted hover:text-accent transition-colors group"
                  initial={{ opacity: 0, x: -8 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                  transition={{ delay: 0.15 + idx * 0.05 }}
                  whileHover={{ x: 4 }}
                >
                  <span className="group-hover:font-semibold transition-all">→ {link.label}</span>
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Column 3: Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-sora font-semibold text-text-main flex items-center gap-2">
              <Zap size={14} className="text-gold" />
              Conecta Conmigo
            </h4>
            <div className="space-y-2">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label, color }, idx) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noreferrer'}
                  className={`inline-flex items-center gap-2.5 text-xs text-text-muted ${color} transition-all group w-full`}
                  initial={{ opacity: 0, x: -12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                  transition={{ delay: 0.2 + idx * 0.08 }}
                  whileHover={{ x: 4 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 12 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <Icon size={14} />
                  </motion.div>
                  <span className="font-mono group-hover:font-semibold transition-all">{label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-border-dark to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />

        {/* Bottom section */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted font-mono"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p>© 2026 Isaac Pastén Díaz. Todos los derechos reservados.</p>

          <motion.div
            className="flex items-center gap-1.5"
            animate={!reducedMotion ? { y: [0, -3, 0] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span>Hecho con</span>
            <motion.div
              animate={!reducedMotion ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Heart size={12} className="text-red-500 fill-red-500" />
            </motion.div>
            <span>y React</span>
          </motion.div>

          <a
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:text-white transition-colors flex items-center gap-1.5 group"
          >
            <span className="group-hover:font-semibold transition-all">Deployado en Vercel</span>
            <motion.span whileHover={{ rotate: 12 }}>↗</motion.span>
          </a>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-accent hover:bg-accent-hover text-white flex items-center justify-center shadow-lg shadow-accent/30 transition-all duration-200 group"
            aria-label="Volver arriba"
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowUp size={18} className="group-hover:scale-110 transition-transform" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
