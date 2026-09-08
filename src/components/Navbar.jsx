import React, { useState, useEffect } from 'react';
import { Menu, X, Briefcase } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 shadow-lg shadow-black/20'
          : 'bg-zinc-950/60 backdrop-blur-sm border-b border-zinc-800/40'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 text-zinc-100 hover:text-white transition-colors group"
        >
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/70 flex items-center justify-center font-bold text-xs tracking-wider text-zinc-200 group-hover:border-zinc-500 transition-colors">
            IP
          </div>
          <span className="font-semibold text-sm sm:text-base tracking-tight text-zinc-200 group-hover:text-white">
            Isaac Pastén
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3.5 py-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60 rounded-lg transition-all"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-3.5 py-1.5 text-sm font-medium text-zinc-200 bg-zinc-900 border border-zinc-700/80 hover:bg-zinc-800 hover:text-white rounded-lg transition-all"
          >
            Contáctame
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 rounded-lg transition-colors"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 border-b border-zinc-800/80 backdrop-blur-xl px-4 pt-2 pb-5 space-y-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-2.5 text-sm font-medium text-zinc-100 bg-zinc-900 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              Contáctame
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
