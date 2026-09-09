const fs = require('fs');
let content = fs.readFileSync('src/components/Navbar.jsx', 'utf8');

// 1. Background color
content = content.replace(/bg-\[#F7F5F0\]/g, 'bg-[#F8F7F4]');

// 2. Logo replacement
const oldLogo = `<div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-sora font-bold text-xs text-blue-600 shadow-sm group-hover:border-blue-400 group-hover:shadow transition-all duration-200">
            IP
          </div>`;
const newLogo = `<div className="relative w-10 h-10 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/60 flex items-center justify-center shadow-sm group-hover:border-blue-400 group-hover:shadow transition-all duration-300">
            {/* Asymmetric IP typography */}
            <span className="font-sora font-extrabold text-lg text-[#0A1128] tracking-tighter ml-[-2px] mt-[-2px] z-10">I</span>
            <span className="font-sora font-extrabold text-lg text-amber-600 tracking-tighter ml-[-4px] mt-[4px]">P</span>
            {/* Diagonal subtle stroke */}
            <div className="absolute w-[2px] h-[60%] bg-blue-600/20 rotate-[35deg]" />
          </div>`;
content = content.replace(oldLogo, newLogo);

// 3. Fix names and weird chars
content = content.replace(/Isaac Past[^\w]n/, 'Isaac Pastén');
content = content.replace(/Admin \? IA \? Dev/, 'Admin • IA • Dev');
content = content.replace(/text-slate-900 leading-tight/g, 'text-[#0A1128] tracking-tight leading-tight');

fs.writeFileSync('src/components/Navbar.jsx', content);
