import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, ExternalLink, ChevronDown } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'experience', label: 'Experiencia', href: '#experience' },
  { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
  { id: 'servicios', label: 'Servicios', href: '#servicios' },
  { id: 'process', label: 'Process', href: '#process' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

const SECTION_IDS = NAV_ITEMS.map((i) => i.id);

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const reducedMotion = useReducedMotion();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Detecta si hay scroll
      setScrolled(window.scrollY > 20);

      // Detecta sección activa
      const scrollPosition = window.scrollY + 200;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(SECTION_IDS[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cierra el menú mobile al hacer click en un link
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      {/* Backdrop blur container */}
      <motion.div
        className={`absolute inset-0 backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? 'bg-base/80 border-b border-border-dark/60 shadow-xl shadow-black/40'
            : 'bg-transparent border-b border-transparent'
        }`}
        initial={false}
        animate={{
          opacity: scrolled ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <motion.a
          href="#home"
          className="flex items-center gap-2.5 text-text-main hover:text-white transition-colors group relative z-10"
          whileHover={!reducedMotion ? { scale: 1.02 } : {}}
          whileTap={!reducedMotion ? { scale: 0.98 } : {}}
        >
          {/* Logo box con glow on hover */}
          <motion.div
            className="w-8 h-8 rounded-lg bg-surface border border-border-dark flex items-center justify-center font-sora font-bold text-xs text-accent group-hover:border-accent/50 transition-colors relative"
            whileHover={!reducedMotion ? { scale: 1.08 } : {}}
          >
            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent/20 blur-md"
              aria-hidden="true"
            />
            <span className="relative z-10">IP</span>
          </motion.div>

          {/* Logo text */}
          <div className="hidden sm:block">
            <motion.div
              className="font-sora font-semibold text-sm text-text-main leading-tight"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              Isaac Pastén
            </motion.div>
            <motion.div
              className="font-mono text-[10px] text-text-muted leading-none"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              Admin · IA · Dev
            </motion.div>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <nav
          className="hidden xl:flex items-center gap-1 relative z-10"
          aria-label="Navegación principal"
        >
          {NAV_ITEMS.map((item, idx) => {
            const isActive = activeSection === item.id;
            return (
              <motion.div
                key={item.id}
                initial={!reducedMotion ? { opacity: 0, y: -8 } : {}}
                animate={!reducedMotion ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
              >
                <a
                  href={item.href}
                  className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-text-main' : 'text-text-muted hover:text-text-main'
                  }`}
                >
                  {/* Active indicator background */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg bg-surface border border-border-dark"
                      transition={{
                        type: 'spring',
                        bounce: 0.2,
                        duration: 0.5,
                      }}
                    />
                  )}

                  {/* Text content */}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {item.label}

                    {/* Animated dot under active */}
                    {isActive && !reducedMotion && (
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-accent"
                        layoutId="nav-dot"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{
                          type: 'spring',
                          bounce: 0.4,
                          duration: 0.4,
                        }}
                      />
                    )}
                  </span>
                </a>
              </motion.div>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 relative z-10">
          {/* Certificaciones pill */}
          <motion.a
            href="#certifications"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold hover:bg-gold/20 hover:border-gold/50 transition-all duration-200 group"
            whileHover={!reducedMotion ? { scale: 1.05 } : {}}
            whileTap={!reducedMotion ? { scale: 0.95 } : {}}
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-gold"
              animate={!reducedMotion ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
            8 Certs
          </motion.a>

          {/* CV link */}
          <motion.a
            href="/cv"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-surface border border-border-dark text-text-muted hover:text-text-main hover:border-accent/40 text-xs font-medium transition-all duration-200 group"
            whileHover={!reducedMotion ? { scale: 1.05, y: -2 } : {}}
            whileTap={!reducedMotion ? { scale: 0.95 } : {}}
          >
            <FileText size={12} className="group-hover:text-accent transition-colors" />
            CV
          </motion.a>

          {/* Finance Nexus link */}
          <motion.a
            href="/finance-nexus"
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-accent/10 border border-accent/30 text-accent text-xs font-semibold hover:bg-accent/20 hover:border-accent/60 transition-all duration-200 group"
            whileHover={!reducedMotion ? { scale: 1.05, y: -2 } : {}}
            whileTap={!reducedMotion ? { scale: 0.95 } : {}}
          >
            Finance Nexus
            <ExternalLink
              size={10}
              className="group-hover:rotate-12 transition-transform"
            />
          </motion.a>

          {/* Mobile menu toggle */}
          <motion.button
            className="xl:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-surface border border-border-dark text-text-muted hover:text-text-main transition-colors relative z-20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
            whileHover={!reducedMotion ? { scale: 1.05 } : {}}
            whileTap={!reducedMotion ? { scale: 0.95 } : {}}
          >
            <motion.div
              animate={mobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: reducedMotion ? 0 : 0.25,
              ease: 'easeInOut',
            }}
            className="xl:hidden overflow-hidden bg-base/95 backdrop-blur-md border-t border-border-dark relative z-40"
          >
            <nav
              className="max-w-6xl mx-auto px-4 py-4 space-y-1"
              aria-label="Menú móvil"
            >
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-surface text-text-main border border-border-dark shadow-sm'
                      : 'text-text-muted hover:text-text-main hover:bg-surface/50'
                  }`}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{
                    delay: idx * 0.05,
                    duration: 0.25,
                  }}
                  whileHover={!reducedMotion ? { x: 4 } : {}}
                >
                  <span className="flex items-center gap-2">
                    {item.label}
                    {activeSection === item.id && (
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-accent"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: 'spring',
                          bounce: 0.4,
                        }}
                      />
                    )}
                  </span>
                </motion.a>
              ))}

              {/* Mobile divider */}
              <motion.div
                className="h-px bg-border-dark my-2"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: NAV_ITEMS.length * 0.05 + 0.1 }}
              />

              {/* Mobile action buttons */}
              <div className="pt-2 space-y-2">
                <motion.a
                  href="#certifications"
                  onClick={handleNavClick}
                  className="inline-flex w-full items-center justify-between px-4 py-2.5 rounded-lg bg-gold/10 border border-gold/30 text-gold text-sm font-semibold hover:bg-gold/20 transition-all duration-200"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: NAV_ITEMS.length * 0.05 + 0.15,
                  }}
                  whileHover={!reducedMotion ? { scale: 1.02 } : {}}
                >
                  8 Certificaciones
                  <motion.span
                    className="w-2 h-2 rounded-full bg-gold"
                    animate={!reducedMotion ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.a>

                <motion.a
                  href="/cv"
                  className="inline-flex w-full items-center gap-2 px-4 py-2.5 rounded-lg bg-surface border border-border-dark text-text-main text-sm font-semibold hover:border-accent/40 transition-all duration-200"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: NAV_ITEMS.length * 0.05 + 0.2,
                  }}
                  whileHover={!reducedMotion ? { scale: 1.02 } : {}}
                >
                  <FileText size={14} />
                  Ver CV Interactivo
                </motion.a>

                <motion.a
                  href="/finance-nexus"
                  className="inline-flex w-full items-center gap-2 px-4 py-2.5 rounded-lg bg-accent/10 border border-accent/30 text-accent text-sm font-semibold hover:bg-accent/20 transition-all duration-200"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: NAV_ITEMS.length * 0.05 + 0.25,
                  }}
                  whileHover={!reducedMotion ? { scale: 1.02 } : {}}
                >
                  Finance Nexus
                  <ExternalLink size={12} />
                </motion.a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
