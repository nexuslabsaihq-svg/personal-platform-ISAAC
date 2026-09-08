import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-10 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-zinc-400">Isaac Patricio Pastén Díaz</span>
          <span>•</span>
          <span>Portafolio Profesional</span>
        </div>
        <div className="flex items-center gap-4">
          <span>React + Vite + Tailwind CSS</span>
          <span>•</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
