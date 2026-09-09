import React from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from './ui/RevealOnScroll';

// ─────────────────────────────────────────────────────────────────────────────
// IDIOMAS — Niveles verificados del perfil de Isaac
// ─────────────────────────────────────────────────────────────────────────────
const LANGUAGES = [
  {
    flag: '🇬🇧',
    language: 'Inglés',
    region: 'Reino Unido / EE.UU.',
    level: 'Intermedio',
    levelNum: 55,
    levelLabel: 'B1',
    color: 'accent',
  },
  {
    flag: '🇫🇷',
    language: 'Francés',
    region: 'Francia',
    level: 'Básico',
    levelNum: 25,
    levelLabel: 'A2',
    color: 'purple',
  },
  {
    flag: '🇮🇹',
    language: 'Italiano',
    region: 'Italia',
    level: '[Nivel a confirmar por Isaac]',
    levelNum: null, // A confirmar
    levelLabel: '—',
    color: 'gold',
    pending: true,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// HOBBIES — Placeholders editables
// TODO: Reemplazar con hobbies reales de Isaac (coordinar con él)
// ─────────────────────────────────────────────────────────────────────────────
const HOBBIES = [
  {
    icon: '🎵', // TODO: Reemplazar con hobby real #1 de Isaac
    title: 'Placeholder Hobby 1',
    description: 'TODO: Reemplazar con descripción real del primer hobbie de Isaac.',
  },
  {
    icon: '📚', // TODO: Reemplazar con hobby real #2 de Isaac
    title: 'Placeholder Hobby 2',
    description: 'TODO: Reemplazar con descripción real del segundo hobbie de Isaac.',
  },
  {
    icon: '🎮', // TODO: Reemplazar con hobby real #3 de Isaac
    title: 'Placeholder Hobby 3',
    description: 'TODO: Reemplazar con descripción real del tercer hobbie de Isaac.',
  },
  {
    icon: '🌍', // TODO: Reemplazar con hobby real #4 de Isaac
    title: 'Placeholder Hobby 4',
    description: 'TODO: Reemplazar con descripción real del cuarto hobbie de Isaac.',
  },
];

const LEVEL_COLORS = {
  accent: { bar: 'bg-accent', badge: 'bg-accent/10 text-accent border-accent/30' },
  gold: { bar: 'bg-gold', badge: 'bg-gold/10 text-gold border-gold/30' },
  purple: { bar: 'bg-violet-custom', badge: 'bg-violet-custom/10 text-violet-custom border-violet-custom/30' },
};

export default function HobbiesLanguages() {
  return (
    <section id="hobbies-idiomas" className="py-24 border-t border-border-dark/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* ── Idiomas ── */}
          <div>
            <RevealOnScroll>
              <p className="font-mono text-xs font-semibold tracking-wider text-accent uppercase mb-2">
                // Idiomas
              </p>
              <h2 className="text-2xl sm:text-3xl font-sora font-bold text-text-main mb-8">
                Lenguas
              </h2>
            </RevealOnScroll>

            <div className="space-y-5">
              {LANGUAGES.map((lang, i) => {
                const colors = LEVEL_COLORS[lang.color];
                return (
                  <RevealOnScroll key={lang.language} delay={i * 0.1}>
                    <div className={`p-4 rounded-2xl bg-surface border transition-all duration-200 ${
                      lang.pending ? 'border-gold/20' : 'border-border-dark hover:border-border-dark/80'
                    }`}>
                      <div className="flex items-center gap-4 mb-3">
                        {/* Flag */}
                        <span className="text-3xl leading-none" role="img" aria-label={lang.region}>
                          {lang.flag}
                        </span>

                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-sora font-semibold text-text-main">
                              {lang.language}
                            </h3>
                            <span className={`inline-flex items-center px-2 py-0.5 rounded-lg border text-[10px] font-mono font-semibold ${colors.badge}`}>
                              {lang.levelLabel}
                            </span>
                          </div>
                          <p className="text-xs text-text-muted mt-0.5">{lang.region}</p>
                        </div>
                      </div>

                      {/* Level bar */}
                      {lang.levelNum !== null ? (
                        <div className="space-y-1">
                          <div className="h-1.5 w-full bg-base rounded-full overflow-hidden border border-border-dark">
                            <motion.div
                              className={`h-full rounded-full ${colors.bar}`}
                              initial={{ width: 0 }}
                              animate={{ width: `${lang.levelNum}%` }}
                              transition={{ duration: 1.2, delay: i * 0.15 + 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                            />
                          </div>
                          <p className="text-xs text-text-muted">{lang.level}</p>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 mt-1">
                          <div className="h-1.5 flex-1 bg-base rounded-full border border-border-dark opacity-40" />
                          <p className="text-xs text-gold/80 italic">{lang.level}</p>
                        </div>
                      )}
                    </div>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>

          {/* ── Hobbies ── */}
          <div>
            <RevealOnScroll>
              <p className="font-mono text-xs font-semibold tracking-wider text-accent uppercase mb-2">
                // Hobbies
              </p>
              <h2 className="text-2xl sm:text-3xl font-sora font-bold text-text-main mb-8">
                Fuera del trabajo
              </h2>
            </RevealOnScroll>

            <div className="grid grid-cols-2 gap-4">
              {HOBBIES.map((hobby, i) => (
                <RevealOnScroll key={hobby.title} delay={i * 0.08}>
                  <div className="group p-4 rounded-2xl bg-surface border border-border-dark border-dashed hover:border-solid hover:border-accent/30 transition-all duration-200">
                    <span className="text-2xl mb-3 block">{hobby.icon}</span>
                    <h4 className="font-sora font-semibold text-sm text-text-muted group-hover:text-text-main transition-colors mb-1">
                      {hobby.title}
                    </h4>
                    <p className="text-xs text-text-muted/60 leading-relaxed">
                      {hobby.description}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll delay={0.4}>
              <p className="mt-4 text-xs font-mono text-text-muted/50 italic">
                * Contenido de hobbies pendiente de confirmación por Isaac
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
