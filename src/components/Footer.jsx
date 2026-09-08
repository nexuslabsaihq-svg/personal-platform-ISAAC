import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-[#1F2430]/40 py-10 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8B92A5]">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#E8EAED]">isaac.dev</span>
          <span>•</span>
          <span>Isaac Patricio Pastén Díaz</span>
        </div>
        <div className="flex items-center gap-3">
          <span>React + Vite + Framer Motion</span>
          <span>•</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
