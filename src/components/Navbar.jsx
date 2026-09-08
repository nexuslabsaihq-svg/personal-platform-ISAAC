import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
  { id: 'process', label: 'Process', href: '#process' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ['home', 'about', 'skills', 'portfolio', 'process', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
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
          ? 'bg-[#0B0E14]/90 backdrop-blur-md border-b border-[#1F2430]/60 py-3 shadow-xl shadow-black/40'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="#home"
          className="flex items-center gap-2.5 text-[#E8EAED] hover:text-white transition-colors group"
        >
          <div className="w-8 h-8 rounded-lg bg-[#131722] border border-[#1F2430] flex items-center justify-center font-sora font-bold text-xs text-accent group-hover:border-accent/60 transition-colors shadow-sm">
            IP
          </div>
          <div className="flex flex-col">
            <span className="font-sora font-semibold text-sm tracking-tight text-[#E8EAED] group-hover:text-white leading-tight">
              Isaac Pastén
            </span>
            <span className="font-mono text-[10px] text-[#8B92A5] tracking-wider">
              PORTAFOLIO
            </span>
          </div>
        </a>

        {/* Links centrados (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#131722]/60 px-3 py-1.5 rounded-full border border-[#1F2430]/60 backdrop-blur-sm">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`relative px-3.5 py-1 text-xs font-mono transition-colors ${
                  isActive ? 'text-accent font-medium' : 'text-[#8B92A5] hover:text-[#E8EAED]'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-accent rounded-full shadow-[0_0_8px_rgba(91,141,239,0.8)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Botón Descargar CV (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="mailto:isaacipp1709@gmail.com?subject=Solicitud%20de%20CV%20-%20Isaac%20Past%C3%A9n"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-[#0B0E14] font-sora font-semibold text-xs hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(91,141,239,0.35)] transition-all"
          >
            <FileText size={14} />
            <span>Descargar CV</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href="mailto:isaacipp1709@gmail.com?subject=Solicitud%20de%20CV%20-%20Isaac%20Past%C3%A9n"
            className="px-3 py-1.5 rounded-full bg-accent text-[#0B0E14] font-sora font-semibold text-xs"
          >
            CV
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#131722] border border-[#1F2430] text-[#8B92A5] hover:text-[#E8EAED] transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-[#0B0E14]/95 border-b border-[#1F2430]/80 backdrop-blur-xl px-4 pt-3 pb-6 space-y-1"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-mono transition-colors ${
                    isActive
                      ? 'bg-[#131722] text-accent border border-accent/30 font-medium'
                      : 'text-[#8B92A5] hover:text-white hover:bg-[#131722]/50'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="text-xs text-accent">●</span>}
                </a>
              );
            })}
            <div className="pt-3">
              <a
                href="mailto:isaacipp1709@gmail.com?subject=Solicitud%20de%20CV%20-%20Isaac%20Past%C3%A9n"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-accent text-[#0B0E14] font-sora font-semibold text-xs"
              >
                <FileText size={15} />
                <span>Solicitar / Descargar CV</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
