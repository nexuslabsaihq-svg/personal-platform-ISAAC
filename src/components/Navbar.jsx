import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, ExternalLink } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
  { id: 'servicios', label: 'Servicios', href: '#servicios' },
  { id: 'process', label: 'Process', href: '#process' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

const SECTION_IDS = NAV_ITEMS.map(i => i.id);

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-base/90 backdrop-blur-md border-b border-border-dark/60 py-3 shadow-xl shadow-black/40'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 text-text-main hover:text-white transition-colors group"
        >
          <div className="w-8 h-8 rounded-lg bg-surface border border-border-dark flex items-center justify-center font-sora font-bold text-xs text-accent group-hover:border-accent/50 group-hover:shadow-accent transition-all duration-200">
            IP
          </div>
          <div className="hidden sm:block">
            <div className="font-sora font-semibold text-sm text-text-main leading-tight">Isaac Pastén</div>
            <div className="font-mono text-[10px] text-text-muted leading-none">Admin · IA · Dev</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-text-main' : 'text-text-muted hover:text-text-main'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg bg-surface border border-border-dark"
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Certificaciones pill */}
          <a
            href="#certifications"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold hover:bg-gold/20 hover:border-gold/50 transition-all duration-200"
          >
            8 Certs
          </a>

          {/* CV link */}
          <a
            href="/cv"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-surface border border-border-dark text-text-muted hover:text-text-main hover:border-accent/40 text-xs font-semibold transition-all duration-200"
          >
            <FileText size={12} />
            CV
          </a>

          {/* Finance Nexus link */}
          <a
            href="/finance-nexus"
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-accent/10 border border-accent/30 text-accent text-xs font-semibold hover:bg-accent/20 hover:border-accent/50 transition-all duration-200"
          >
            Finance Nexus
          </a>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-surface border border-border-dark text-text-muted hover:text-text-main transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-base/95 backdrop-blur-md border-t border-border-dark"
          >
            <nav className="max-w-6xl mx-auto px-4 py-4 space-y-1" aria-label="Menú móvil">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-surface text-text-main border border-border-dark'
                      : 'text-text-muted hover:text-text-main'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 border-t border-border-dark flex flex-col gap-2">
                <a
                  href="#certifications"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gold/10 border border-gold/30 text-gold text-sm font-semibold"
                >
                  8 Certificaciones INACAP
                </a>
                <a
                  href="/cv"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface border border-border-dark text-text-main text-sm font-semibold"
                >
                  <FileText size={14} />
                  Ver CV Interactivo
                </a>
                <a
                  href="/finance-nexus"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent/10 border border-accent/30 text-accent text-sm font-semibold"
                >
                  Finance Nexus
                  <ExternalLink size={12} />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
