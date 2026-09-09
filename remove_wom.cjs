const fs = require('fs');
let c = fs.readFileSync('src/components/Portfolio.jsx', 'utf8');

c = c.replace(/\{\s*title:\s*'An[^\']*WOM Chile',\s*badge:\s*'Acad[^\']*',\s*badgeColor:\s*'[^\']*',\s*description:\s*'Informe de evaluaci.*?telecomunicaciones\.',\s*tags:\s*\[.*?\],\s*link:\s*'\#',\s*bgGlow:\s*'[^\']*',\s*accentColor:\s*'[^\']*',\s*\},/s, '');

fs.writeFileSync('src/components/Portfolio.jsx', c);
