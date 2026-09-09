import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, ArrowRight, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * AppleWalletStack
 * Reusable vertical card stack inspired by Apple Wallet.
 * Features luxury credential card design, smooth 400ms spring-easing,
 * expansion on click/hover, z-index elevation, and contextual action buttons.
 */
export default function AppleWalletStack({
  items = [],
  peekHeight = 74,
  expandedOffset = 260,
  className = '',
  allowToggleAll = true,
}) {
  const [selectedIndex, setSelectedIndex] = useState(0); // Card 0 active by default for immediate clarity
  const [allExpanded, setAllExpanded] = useState(false);
  const reducedMotion = useReducedMotion();

  const handleCardClick = (idx) => {
    if (allExpanded) {
      setAllExpanded(false);
      setSelectedIndex(idx);
      return;
    }
    setSelectedIndex((prev) => (prev === idx ? null : idx));
  };

  const getAccentTheme = (color) => {
    switch (color) {
      case 'gold':
        return {
          pill: 'bg-amber-500/10 text-amber-700 border-amber-500/30',
          indicator: 'bg-amber-500',
          borderHover: 'hover:border-amber-500/40',
          glow: 'rgba(217, 119, 6, 0.15)',
          tag: 'bg-amber-50 text-amber-800 border-amber-200/80',
          cta: 'bg-amber-600 hover:bg-amber-700 text-white shadow-sm',
          iconBg: 'bg-amber-100/70 text-amber-700 border-amber-200',
        };
      case 'purple':
      case 'violet':
        return {
          pill: 'bg-purple-500/10 text-purple-700 border-purple-500/30',
          indicator: 'bg-purple-600',
          borderHover: 'hover:border-purple-500/40',
          glow: 'rgba(124, 58, 237, 0.15)',
          tag: 'bg-purple-50 text-purple-800 border-purple-200/80',
          cta: 'bg-purple-600 hover:bg-purple-700 text-white shadow-sm',
          iconBg: 'bg-purple-100/70 text-purple-700 border-purple-200',
        };
      case 'green':
      case 'emerald':
        return {
          pill: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30',
          indicator: 'bg-emerald-600',
          borderHover: 'hover:border-emerald-500/40',
          glow: 'rgba(5, 150, 105, 0.15)',
          tag: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
          cta: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm',
          iconBg: 'bg-emerald-100/70 text-emerald-700 border-emerald-200',
        };
      case 'blue':
      case 'accent':
      default:
        return {
          pill: 'bg-blue-500/10 text-blue-700 border-blue-500/30',
          indicator: 'bg-blue-600',
          borderHover: 'hover:border-blue-500/40',
          glow: 'rgba(37, 99, 235, 0.15)',
          tag: 'bg-blue-50 text-blue-800 border-blue-200/80',
          cta: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm',
          iconBg: 'bg-blue-100/70 text-blue-700 border-blue-200',
        };
    }
  };

  // Compute container total height
  const collapsedTotalHeight = items.length > 0 
    ? (items.length - 1) * peekHeight + (selectedIndex !== null ? expandedOffset + 180 : 200)
    : 300;

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      {/* Control bar / Helper bar */}
      <div className="flex items-center justify-between gap-3 mb-6 px-1">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
          <span className="inline-block w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span>Haz clic en una tarjeta para desplegar el contenido</span>
        </div>

        {allowToggleAll && items.length > 1 && (
          <button
            type="button"
            onClick={() => {
              setAllExpanded(!allExpanded);
              if (!allExpanded) setSelectedIndex(null);
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 hover:bg-white border border-slate-200/80 text-slate-700 text-xs font-semibold shadow-sm transition-all hover:shadow hover:border-blue-300"
          >
            <Layers size={13} className="text-blue-600" />
            {allExpanded ? 'Contraer pila (Wallet)' : 'Desplegar todas'}
          </button>
        )}
      </div>

      {/* Mode A: All Expanded Cascade */}
      {allExpanded ? (
        <div className="space-y-5">
          {items.map((item, idx) => {
            const theme = getAccentTheme(item.accent);
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id ?? idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="relative rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 p-6 sm:p-7 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    {Icon && (
                      <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${theme.iconBg}`}>
                        <Icon size={20} />
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md border ${theme.pill}`}>
                          {item.badge ?? `0${idx + 1}`}
                        </span>
                        {item.category && (
                          <span className="text-xs font-medium text-slate-500 uppercase tracking-wider font-mono">
                            {item.category}
                          </span>
                        )}
                      </div>
                      <h3 className="font-sora font-bold text-lg sm:text-xl text-slate-900 mt-1">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  {item.year && (
                    <span className="text-xs font-mono font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                      {item.year}
                    </span>
                  )}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {item.description}
                </p>

                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {item.tags.map((tag) => (
                      <span key={tag} className={`text-xs font-mono px-2.5 py-1 rounded-lg border ${theme.tag}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {item.meta && item.meta.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 border-t border-slate-100 mb-5 text-xs text-slate-600">
                    {item.meta.map((m, mIdx) => (
                      <div key={mIdx} className="flex items-center gap-2">
                        {m.icon ? <m.icon size={13} className="text-slate-400 shrink-0" /> : <CheckCircle2 size={13} className="text-blue-600 shrink-0" />}
                        <span className="font-medium text-slate-500">{m.label}:</span>
                        <span className="font-semibold text-slate-800 truncate">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {item.action && (
                  <div className="pt-3 border-t border-slate-100 flex justify-end">
                    <a
                      href={item.action.href}
                      target={item.action.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold ${theme.cta} transition-all`}
                    >
                      {item.action.label}
                      <ArrowRight size={13} />
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      ) : (
        /* Mode B: Apple Wallet Stack Layout */
        <div
          className="relative w-full transition-all duration-500 ease-out"
          style={{ height: collapsedTotalHeight }}
        >
          {items.map((item, idx) => {
            const isSelected = selectedIndex === idx;
            const theme = getAccentTheme(item.accent);
            const Icon = item.icon;

            // Calculate card Y position
            let translateY = 0;
            if (selectedIndex === null) {
              // Idle cascade: each card drops by peekHeight
              translateY = idx * peekHeight;
            } else if (idx <= selectedIndex) {
              // Cards above and including the selected card
              translateY = idx * 56;
            } else {
              // Cards below the selected card: push down by expanded offset
              translateY = selectedIndex * 56 + expandedOffset + (idx - selectedIndex) * 56;
            }

            const zIndex = isSelected ? 40 : 10 + idx;

            return (
              <motion.div
                key={item.id ?? idx}
                layout={!reducedMotion}
                onClick={() => handleCardClick(idx)}
                initial={false}
                animate={{
                  y: translateY,
                  scale: isSelected ? 1.01 : 1,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 1, 0.5, 1], // Smooth 400ms Apple cubic-bezier
                }}
                className={`absolute left-0 right-0 cursor-pointer select-none rounded-2xl border transition-shadow duration-300 ${
                  isSelected
                    ? 'bg-white shadow-wallet-active border-blue-500/40 ring-1 ring-blue-500/20'
                    : `bg-white/95 backdrop-blur-md border-slate-200/90 shadow-wallet ${theme.borderHover} hover:shadow-card-hover`
                }`}
                style={{
                  zIndex,
                  transformOrigin: 'top center',
                }}
                role="button"
                tabIndex={0}
                aria-expanded={isSelected}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(idx);
                  }
                }}
              >
                {/* ── CARD HEADER / PEEK TAB ── */}
                <div className="p-5 sm:p-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5 min-w-0">
                    {Icon && (
                      <div
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl border flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          theme.iconBg
                        } ${isSelected ? 'scale-105 shadow-sm' : ''}`}
                      >
                        <Icon size={19} />
                      </div>
                    )}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] sm:text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md border ${theme.pill}`}>
                          {item.badge ?? `0${idx + 1}`}
                        </span>
                        {item.category && (
                          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-medium truncate">
                            {item.category}
                          </span>
                        )}
                      </div>
                      <h3 className="font-sora font-bold text-base sm:text-lg text-slate-900 truncate mt-0.5">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {item.year && (
                      <span className="hidden sm:inline-flex text-xs font-mono font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                        {item.year}
                      </span>
                    )}
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center border transition-transform duration-300 ${
                        isSelected
                          ? 'rotate-180 bg-blue-50 border-blue-200 text-blue-600'
                          : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      <ChevronDown size={14} />
                    </div>
                  </div>
                </div>

                {/* ── EXPANDED CARD BODY ── */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                      className="px-5 pb-6 sm:px-6 sm:pb-7 border-t border-slate-100 pt-4 overflow-hidden"
                    >
                      {/* Description */}
                      <p className="text-sm text-slate-600 leading-relaxed mb-5">
                        {item.description}
                      </p>

                      {/* Tags */}
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`text-xs font-mono px-2.5 py-1 rounded-lg border ${theme.tag}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Meta list */}
                      {item.meta && item.meta.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 border-t border-slate-100 mb-5 text-xs text-slate-600">
                          {item.meta.map((m, mIdx) => (
                            <div key={mIdx} className="flex items-center gap-2">
                              {m.icon ? (
                                <m.icon size={13} className="text-slate-400 shrink-0" />
                              ) : (
                                <CheckCircle2 size={13} className="text-blue-600 shrink-0" />
                              )}
                              <span className="font-medium text-slate-500">{m.label}:</span>
                              <span className="font-semibold text-slate-800 truncate">{m.value}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Action Button */}
                      {item.action && (
                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-xs font-mono text-slate-400">
                            Credencial interactiva · Isaac Pastén
                          </span>
                          <a
                            href={item.action.href}
                            target={item.action.href.startsWith('http') ? '_blank' : '_self'}
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold ${theme.cta} transition-all`}
                          >
                            {item.action.label}
                            <ArrowRight size={13} />
                          </a>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
