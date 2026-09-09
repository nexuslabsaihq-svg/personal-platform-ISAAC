const fs = require('fs');
let c = fs.readFileSync('src/components/Portfolio.jsx', 'utf8');

c = c.replace(/const TECH_STACK = \{[\s\S]*?\};\r?\n/, `const DOWNLOADABLE_SKILLS = [
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
`);

fs.writeFileSync('src/components/Portfolio.jsx', c);
