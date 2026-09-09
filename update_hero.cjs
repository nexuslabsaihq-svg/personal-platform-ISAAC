const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.jsx', 'utf8');

// Update Titles
content = content.replace(
  `Construyo{' '}
              <span className="text-accent">procesos</span>{' '}
              <br className="hidden sm:block" />
              administrativos{' '}
              <br className="hidden sm:block" />
              que{' '}
              <span className="relative inline-block">
                funcionan.
                <motion.span
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent to-accent/0 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: reducedMotion ? '100%' : '100%' }}
                  transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
                />
              </span>`,
  `Estrategia{' '}
              <span className="text-accent">Empresarial</span>,{' '}
              <br className="hidden sm:block" />
              Optimización de Procesos{' '}
              <br className="hidden sm:block" />
              &{' '}
              <span className="relative inline-block">
                Soluciones Tecnológicas.
                <motion.span
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent to-accent/0 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: reducedMotion ? '100%' : '100%' }}
                  transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
                />
              </span>`
);

content = content.replace(
  `Ranking N°2 de cohorte`,
  `Ranking N°2 de 3 egresados`
);

content = content.replace(
  `5.9`,
  `5.9`
);

fs.writeFileSync('src/components/Hero.jsx', content);
