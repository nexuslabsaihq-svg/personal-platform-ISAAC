const fs = require('fs');
const path = require('path');

const files = {
  'nostradamuz.md': '# NOSTRADAMUZ v4\nArquitectura de Agentes...',
  'context-engineering.md': '# Context Engineering Master\nDocumento...',
  'agente-marketing.md': '# Agente de Marketing\nAutomatización...',
  'chronos-matematica.md': '# Chronos Matemática\nLógica Estructural...',
  'google-slides-elite.md': '# Google Slides Design Elite\nPresentaciones...'
};

for (const [filename, content] of Object.entries(files)) {
  fs.writeFileSync(path.join('public/skills', filename), content);
}
