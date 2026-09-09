/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: '#F7F5F0',
        surface: '#FFFFFF',
        'surface-warm': '#FAF8F5',
        'border-dark': 'rgba(15, 23, 42, 0.08)',
        'border-subtle': 'rgba(15, 23, 42, 0.05)',
        'text-main': '#0F172A',
        'text-muted': '#475569',
        accent: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
          glow: 'rgba(37, 99, 235, 0.20)',
          subtle: 'rgba(37, 99, 235, 0.08)',
        },
        gold: {
          DEFAULT: '#D97706',
          hover: '#B45309',
          glow: 'rgba(217, 119, 6, 0.20)',
          subtle: 'rgba(217, 119, 6, 0.08)',
        },
        'violet-custom': '#7C3AED',
        'violet-subtle': 'rgba(124, 58, 237, 0.08)',
        'green-custom': '#059669',
        'green-subtle': 'rgba(5, 150, 105, 0.08)',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'mesh-1': 'meshFloat1 24s ease-in-out infinite',
        'mesh-2': 'meshFloat2 28s ease-in-out infinite',
        'mesh-3': 'meshFloat3 20s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-8px) rotate(1deg)' },
          '66%': { transform: 'translateY(-4px) rotate(-1deg)' },
        },
        meshFloat1: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(60px, -80px) scale(1.1)' },
          '66%': { transform: 'translate(-40px, 50px) scale(0.95)' },
        },
        meshFloat2: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(-80px, -60px) scale(1.15)' },
        },
        meshFloat3: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(70px, 60px) scale(1.08)' },
        },
      },
      boxShadow: {
        'accent': '0 4px 20px rgba(37, 99, 235, 0.25)',
        'accent-lg': '0 8px 30px rgba(37, 99, 235, 0.35)',
        'gold': '0 4px 20px rgba(217, 119, 6, 0.25)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 20px 35px -10px rgba(15, 23, 42, 0.12), 0 8px 16px -4px rgba(15, 23, 42, 0.06)',
        'wallet': '0 -4px 25px rgba(15, 23, 42, 0.06), 0 10px 25px rgba(15, 23, 42, 0.08)',
        'wallet-active': '0 25px 50px -12px rgba(15, 23, 42, 0.22), 0 0 0 1px rgba(37, 99, 235, 0.25)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'wallet': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
    },
  },
  plugins: [],
}