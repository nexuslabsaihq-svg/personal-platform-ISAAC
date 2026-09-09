const fs = require('fs');

let c = fs.readFileSync('src/components/Portfolio.jsx', 'utf8');

c = c.replace(
  /{ id: 'tech-stack', label: 'Tech Stack', icon: Cpu },/g,
  "{ id: 'skills', label: 'Agentic Skills', icon: Cpu },"
);

c = c.replace(
  /const TECH_STACK = \{[\s\S]*?\};\n/g,
  `const DOWNLOADABLE_SKILLS = [
  { id: 'nostradamuz', name: 'NOSTRADAMUZ v4', category: 'Arquitectura de Agentes', color: 'blue', url: '/skills/nostradamuz.md' },
  { id: 'context', name: 'Context Engineering Master', category: 'Ingeniería de Prompts', color: 'purple', url: '/skills/context-engineering.md' },
  { id: 'marketing', name: 'Agente de Marketing', category: 'Automatización', color: 'green', url: '/skills/agente-marketing.md' },
  { id: 'chronos', name: 'Chronos Matemática', category: 'Lógica Estructural', color: 'gold', url: '/skills/chronos-matematica.md' },
  { id: 'slides', name: 'Google Slides Design Elite', category: 'Presentaciones', color: 'blue', url: '/skills/google-slides-elite.md' }
];

const SKILL_THEMES = {
  blue: 'bg-blue-50 border-blue-200 text-blue-700',
  purple: 'bg-purple-50 border-purple-200 text-purple-700',
  green: 'bg-emerald-50 border-emerald-200 text-emerald-700',
  gold: 'bg-amber-50 border-amber-200 text-amber-700'
};
`
);

const techStackRenderBlock = `{/* TECH STACK */}
            {activeTab === 'tech-stack' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {Object.entries(TECH_STACK).map(([category, items], ci) => (
                  <RevealOnScroll key={category} delay={ci * 0.1}>
                    <div className="p-5 rounded-2xl bg-surface border border-border-dark space-y-4">
                      <h3 className="text-sm font-sora font-semibold text-text-main flex items-center gap-2">
                        <Sparkles size={14} className="text-accent" />
                        {category}
                      </h3>
                      <div className="space-y-2">
                        {items.map((item) => (
                          <div key={item.name} className="flex items-center justify-between py-1.5 border-b border-border-dark/50 last:border-0">
                            <span className="text-sm text-text-muted">{item.name}</span>
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-base border border-border-dark text-text-muted">
                              {item.level}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            )}`;

const skillsRenderBlock = `{/* AGENTIC SKILLS */}
            {activeTab === 'skills' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {DOWNLOADABLE_SKILLS.map((skill, ci) => {
                  const theme = SKILL_THEMES[skill.color] || SKILL_THEMES.blue;
                  return (
                    <RevealOnScroll key={skill.id} delay={ci * 0.1}>
                      <div className="p-5 h-full rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                        <div>
                          <span className={\`inline-block text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md border \${theme} mb-3\`}>
                            {skill.category}
                          </span>
                          <h3 className="text-base font-sora font-bold text-slate-900 leading-tight">
                            {skill.name}
                          </h3>
                        </div>
                        <a 
                          href={skill.url} 
                          download
                          className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-white hover:bg-blue-600 transition-colors mt-auto"
                        >
                          Descargar .md
                          <ArrowRight size={14} />
                        </a>
                      </div>
                    </RevealOnScroll>
                  );
                })}
              </div>
            )}`;

// In case the encoding of Portfolio.jsx has different whitespace or exact characters, let's use a regex replace for the tech stack block
c = c.replace(/\{\/\* TECH STACK \*\/\}[\s\S]*?(?=\{\/\*|$)/, skillsRenderBlock + '\n          ');

fs.writeFileSync('src/components/Portfolio.jsx', c);
