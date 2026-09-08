import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll listener for background blur and spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy logic
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
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
          ? 'bg-[#0B0E14]/85 backdrop-blur-md border-b border-[#1F2430]/60 py-3.5 shadow-lg shadow-black/40'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand with JetBrains Mono terminal/developer aesthetic */}
        <a
          href="#home"
          className="flex items-center gap-2 text-[#E8EAED] hover:text-white transition-colors group"
        >
          <div className="w-8 h-8 rounded-lg bg-[#131722] border border-[#1F2430]/70 flex items-center justify-center text-accent group-hover:border-accent/50 transition-colors">
            <Terminal size={16} />
          </div>
          <span className="font-mono text-sm tracking-tight text-[#E8EAED] group-hover:text-accent transition-colors">
            isaac<span className="text-accent">.dev</span>
          </span>
        </a>

        {/* Desktop Nav with animated slider underline */}
        <nav className="hidden md:flex items-center gap-1 bg-[#131722]/50 p-1 rounded-xl border border-[#1F2430]/40">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`relative px-4 py-1.5 text-xs font-mono transition-colors ${
                  isActive ? 'text-accent font-medium' : 'text-[#8B92A5] hover:text-[#E8EAED]'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-accent rounded-full shadow-[0_0_8px_rgba(91,141,239,0.8)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button (Desktop) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-4 py-2 text-xs font-mono font-medium rounded-lg bg-[#131722] text-[#E8EAED] border border-[#1F2430]/80 hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(91,141,239,0.15)] transition-all"
          >
            ./contact
          </a>
        </div>

        {/* Mobile menu hamburger button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-[#131722] border border-[#1F2430]/60 text-[#8B92A5] hover:text-[#E8EAED] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer (Framer Motion) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#0B0E14]/95 border-b border-[#1F2430]/80 backdrop-blur-xl px-4 pt-3 pb-6 space-y-1.5"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-mono transition-colors ${
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
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center py-2.5 text-xs font-mono font-medium rounded-lg bg-accent text-[#0B0E14] hover:bg-accent-hover transition-colors font-semibold"
              >
                ./contact me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
