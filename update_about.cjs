const fs = require('fs');
let c = fs.readFileSync('src/components/About.jsx', 'utf8');

c = c.replace(/grid-cols-1 lg:grid-cols-2/g, 'grid-cols-1 lg:grid-cols-12');
c = c.replace(/<div className="space-y-8">/g, '<div className="lg:col-span-7 space-y-8">');
c = c.replace(/<div id="skills" className="space-y-6">/g, '<div id="skills" className="lg:col-span-5 space-y-6">');

// Fix encoding and text
c = c.replace(/Isaac Patricio Past[^n]*n D[^a]*z/g, 'Isaac Patricio Pastén Díaz');
c = c.replace(/Ubicaci[^n]*n/g, 'Ubicación');
c = c.replace(/Atenci[^n]*n al Cliente/g, 'Atención al Cliente');
c = c.replace(/Gesti[^n]*n de Equipos/g, 'Gestión de Equipos');
c = c.replace(/Power BI B[^s]*sico/g, 'Power BI Básico');
c = c.replace(/Qui[^n]*n soy/g, 'Quién soy');
c = c.replace(/Ingenier[^a]*a en Administraci[^n]*n/g, 'Ingeniería en Administración');
c = c.replace(/Lider[^e]* equipos/g, 'Lideré equipos');
c = c.replace(/acad[^e]*micos/g, 'académicos');
c = c.replace(/integraci[^n]*n/g, 'integración');
c = c.replace(/s[^o]*lida formaci[^n]*n en administraci[^n]*n/g, 'sólida formación en administración');
c = c.replace(/Orquestaci[^n]*n/g, 'orquestación');

fs.writeFileSync('src/components/About.jsx', c);
