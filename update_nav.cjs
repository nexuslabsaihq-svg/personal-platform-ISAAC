const fs = require('fs');
let c = fs.readFileSync('src/components/Navbar.jsx', 'utf8');

c = c.replace(
  /{ id: 'process', label: 'Process', href: '#process' },/g,
  "{ id: 'process', label: 'Process', href: '#process' },\n  { id: 'galeria', label: 'Galería', href: '#galeria' },"
);

fs.writeFileSync('src/components/Navbar.jsx', c);
