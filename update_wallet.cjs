const fs = require('fs');

const code = `import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

// Define the gradient backgrounds for the cards
const STACK_THEMES = {
  blue: 'bg-gradient-to-br from-blue-900 to-blue-600 text-white',
  green: 'bg-gradient-to-br from-emerald-800 to-emerald-600 text-white',
  gold: 'bg-gradient-to-br from-amber-700 to-yellow-600 text-white',
  default: 'bg-white text-slate-900'
};

const TEXT_THEMES = {
  blue: { title: 'text-white', subtitle: 'text-blue-100', text: 'text-blue-50', border: 'border-blue-400/30' },
  green: { title: 'text-white', subtitle: 'text-emerald-100', text: 'text-emerald-50', border: 'border-emerald-400/30' },
  gold: { title: 'text-white', subtitle: 'text-amber-100', text: 'text-amber-50', border: 'border-amber-400/30' },
  default: { title: 'text-slate-900', subtitle: 'text-slate-500', text: 'text-slate-600', border: 'border-slate-200' }
};

export default function AppleWalletStack({ items, peekHeight = 76, expandedOffset = 300, stackTheme = 'default' }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const reducedMotion = useReducedMotion();
  const containerRef = useRef(null);

  // Mouse position for glare effect
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e, index) => {
    if (reducedMotion || selectedIndex !== index) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const handleCardClick = (idx) => {
    setSelectedIndex(selectedIndex === idx ? null : idx);
  };

  const toggleExpandAll = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(items.length - 1);
    }
  };

  const containerHeight =
    selectedIndex === null
      ? items.length * peekHeight + 20
      : items.length * 56 + expandedOffset + 40;

  const bgClass = STACK_THEMES[stackTheme] || STACK_THEMES.default;
  const tc = TEXT_THEMES[stackTheme] || TEXT_THEMES.default;

  return (
    <div className="w-full max-w-2xl mx-auto" ref={containerRef}>
      <div className="flex justify-end mb-6">
        <button
          onClick={toggleExpandAll}
          className="text-xs font-mono font-semibold text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1.5 bg-white/50 px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm"
        >
          {selectedIndex !== null ? 'Contraer pila' : 'Expandir pila'}
        </button>
      </div>

      <div
        className="relative w-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{ height: containerHeight }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); setMousePos({ x: 50, y: 50 }); }}
      >
        {items.map((item, idx) => {
          const isSelected = selectedIndex === idx;
          const Icon = item.icon;

          let translateY = 0;
          if (selectedIndex === null) {
            translateY = idx * peekHeight;
            if (isHovered && idx === items.length - 1) {
              translateY += 10;
            }
          } else if (idx <= selectedIndex) {
            translateY = idx * 56;
          } else {
            translateY = selectedIndex * 56 + expandedOffset + (idx - selectedIndex) * 56;
          }

          const zIndex = isSelected ? 40 : 10 + idx;

          return (
            <motion.div
              key={item.id ?? idx}
              layout={!reducedMotion}
              onClick={() => handleCardClick(idx)}
              onMouseMove={(e) => handleMouseMove(e, idx)}
              initial={false}
              animate={{
                y: translateY,
                scale: isSelected ? 1.02 : 1,
              }}
              transition={{
                duration: 0.4,
                ease: [0.25, 1, 0.5, 1],
              }}
              className={\`absolute left-0 right-0 cursor-pointer select-none rounded-2xl transition-shadow duration-300 \${bgClass} \${tc.border} \${
                isSelected
                  ? 'shadow-2xl shadow-slate-900/40 border ring-1 ring-white/20'
                  : 'shadow-xl shadow-slate-300/40 border hover:shadow-2xl'
              }\`}
              style={{
                zIndex,
                transformOrigin: 'top center',
                overflow: 'hidden'
              }}
            >
              {/* Glare Effect */}
              {isSelected && !reducedMotion && (
                <div 
                  className="absolute inset-0 opacity-40 pointer-events-none mix-blend-overlay"
                  style={{
                    background: \`radial-gradient(circle at \${mousePos.x}% \${mousePos.y}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)\`
                  }}
                />
              )}

              <div className="relative z-10">
                {/* CARD HEADER */}
                <div className="p-5 sm:p-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5 min-w-0">
                    {Icon && (
                      <div className={\`w-10 h-10 sm:w-11 sm:h-11 rounded-xl border flex items-center justify-center shrink-0 transition-transform duration-200 \${tc.border} \${isSelected ? 'scale-105 bg-white/20' : 'bg-white/10'}\`}>
                        <Icon size={19} className="text-white" />
                      </div>
                    )}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={\`text-[10px] sm:text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md border \${tc.border} bg-white/10\`}>
                          {item.badge ?? \`0\${idx + 1}\`}
                        </span>
                        {item.category && (
                          <span className={\`text-[11px] font-mono uppercase tracking-wider font-medium truncate \${tc.subtitle}\`}>
                            {item.category}
                          </span>
                        )}
                      </div>
                      <h3 className={\`font-sora font-bold text-base sm:text-lg truncate mt-0.5 \${tc.title}\`}>
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {item.year && (
                      <span className={\`hidden sm:inline-flex text-xs font-mono font-semibold px-2.5 py-1 rounded-lg border \${tc.border} bg-white/10\`}>
                        {item.year}
                      </span>
                    )}
                    <div className={\`w-7 h-7 rounded-full flex items-center justify-center border transition-transform duration-300 \${tc.border} bg-white/10 \${isSelected ? 'rotate-180' : ''}\`}>
                      <ChevronDown size={14} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* EXPANDED CARD BODY */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                      className={\`px-5 pb-6 sm:px-6 sm:pb-7 border-t pt-4 \${tc.border}\`}
                    >
                      <p className={\`text-sm leading-relaxed mb-5 \${tc.text}\`}>
                        {item.description}
                      </p>

                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-5">
                          {item.tags.map((tag) => (
                            <span key={tag} className={\`text-xs font-mono px-2.5 py-1 rounded-lg border \${tc.border} bg-white/10\`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {item.meta && item.meta.length > 0 && (
                        <div className={\`grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 border-t mb-5 text-xs \${tc.border}\`}>
                          {item.meta.map((m, mIdx) => (
                            <div key={mIdx} className="flex items-center gap-2">
                              {m.icon ? <m.icon size={13} className={\`shrink-0 \${tc.subtitle}\`} /> : <CheckCircle2 size={13} className="shrink-0 text-white" />}
                              <span className={\`font-medium \${tc.subtitle}\`}>{m.label}:</span>
                              <span className="font-semibold truncate">{m.value}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {item.action && (
                        <div className={\`pt-3 border-t flex items-center justify-between \${tc.border}\`}>
                          <span className={\`text-xs font-mono \${tc.subtitle}\`}>Credencial interactiva • Isaac Pastén</span>
                          <a
                            href={item.action.href}
                            target={item.action.href.startsWith('http') ? '_blank' : '_self'}
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white text-slate-900 hover:bg-slate-100 transition-all shadow-sm"
                          >
                            {item.action.label}
                            <ArrowRight size={13} />
                          </a>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
\`;

fs.writeFileSync('src/components/ui/AppleWalletStack.jsx', code);
