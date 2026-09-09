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
  { id: 'galeria', label: 'Galería', href: '#galeria' },
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
          ? 'bg-[#F7F5F0]/90 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-sm shadow-slate-900/5'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 text-slate-900 hover:text-blue-600 transition-colors group"
        >
          <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-sora font-bold text-xs text-blue-600 shadow-sm group-hover:border-blue-400 group-hover:shadow transition-all duration-200">
            IP
          </div>
          <div className="hidden sm:block">
            <div className="font-sora font-semibold text-sm text-slate-900 leading-tight">Isaac Pastén</div>
            <div className="font-mono text-[10px] text-slate-500 leading-none">Admin · IA · Dev</div>
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
                  isActive ? 'text-slate-900 font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg bg-white border border-slate-200 shadow-sm"
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
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold hover:bg-amber-100 transition-all duration-200 shadow-sm"
          >
            8 Certs
          </a>

          {/* CV link */}
          <a
            href="/cv"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/80 border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-blue-300 text-xs font-semibold shadow-sm transition-all duration-200"
          >
            <FileText size={12} className="text-blue-600" />
            CV
          </a>

          {/* Finance Nexus link */}
          <a
            href="/finance-nexus"
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold hover:bg-blue-100 hover:border-blue-300 transition-all duration-200 shadow-sm"
          >
            Finance Nexus
          </a>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 shadow-sm transition-colors"
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
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg"
          >
            <nav className="max-w-6xl mx-auto px-4 py-4 space-y-1" aria-label="Menú móvil">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-50 text-blue-700 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href="/cv"
                  className="flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold"
                >
                  <FileText size={13} className="text-blue-600" /> Ver Currículum Completo
                </a>
                <a
                  href="/finance-nexus"
                  className="flex items-center justify-center gap-2 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold shadow-sm"
                >
                  Explorar Finance Nexus
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
