import React, { useState, useEffect } from 'react';
import { ArrowUp, Terminal, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

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
    <footer className="border-t border-[#1F2430]/40 py-12 max-w-6xl mx-auto px-4 sm:px-6 relative">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#131722] border border-[#1F2430] flex items-center justify-center font-sora font-bold text-xs text-accent">
            IP
          </div>
          <span className="font-sora font-semibold text-sm text-[#E8EAED]">
            Isaac Pastén
          </span>
          <span className="text-[#1F2430]">•</span>
          <span className="font-mono text-xs text-[#8B92A5]">
            Ing. Adm. Empresas
          </span>
        </div>

        {/* Links rápidos */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-mono text-[#8B92A5] hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <div className="text-xs font-mono text-[#8B92A5] text-center md:text-right">
          © 2026 Isaac Pastén Díaz. Todos los derechos reservados.
        </div>
      </div>

      {/* Botón flotante de volver arriba */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-accent text-[#0B0E14] flex items-center justify-center shadow-lg shadow-accent/25 hover:bg-accent-hover transition-colors"
            aria-label="Volver arriba"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
