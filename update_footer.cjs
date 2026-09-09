const fs = require('fs');
let c = fs.readFileSync('src/components/Footer.jsx', 'utf8');

const closingPhrase = `      {/* Frase final de cierre */}
      <div className="mb-12 text-center">
        <h2 className="text-xl sm:text-2xl font-sora font-bold tracking-tight text-slate-900 mb-3">
          "Los mejores procesos son los que se pueden automatizar."
        </h2>
        <p className="text-sm font-mono text-blue-600 font-semibold">
          — Isaac Pastén Díaz
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6">`;

c = c.replace(/<div className="flex flex-col md:flex-row items-center justify-between gap-6">/, closingPhrase);

c = c.replace(/Isaac Past[^n]*n D[^a]*z/g, 'Isaac Pastén Díaz');
c = c.replace(/Isaac Past[^n]*n/g, 'Isaac Pastén');
c = c.replace(/Bot[^n]*n flotante/g, 'Botón flotante');
c = c.replace(/Links r[^q]*pidos/g, 'Links rápidos');

fs.writeFileSync('src/components/Footer.jsx', c);
