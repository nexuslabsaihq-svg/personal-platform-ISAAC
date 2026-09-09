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
        base: '#0B0E14',
        surface: '#151A24',
        'border-dark': '#262C3A',
        'text-main': '#F5F6F8',
        'text-muted': '#A8AFC0',
        accent: {
          DEFAULT: '#6B9BFF',
          hover: '#5A8AEE',
          glow: 'rgba(107, 155, 255, 0.25)',
          subtle: 'rgba(107, 155, 255, 0.10)',
        },
        gold: {
          DEFAULT: '#E5C158',
          hover: '#D4AF37',
          glow: 'rgba(229, 193, 88, 0.25)',
          subtle: 'rgba(229, 193, 88, 0.10)',
        },
        purple: {
          brand: '#9B7FFF',
          subtle: 'rgba(155, 127, 255, 0.10)',
        },
        emerald: {
          brand: '#4ADE80',
        },
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'draw-in': 'drawIn 1.5s ease-out forwards',
        'count-up': 'countUp 1.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-8px) rotate(1deg)' },
          '66%': { transform: 'translateY(-4px) rotate(-1deg)' },
        },
        drawIn: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'accent': '0 0 20px rgba(107, 155, 255, 0.3)',
        'accent-lg': '0 0 40px rgba(107, 155, 255, 0.4)',
        'gold': '0 0 20px rgba(229, 193, 88, 0.3)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.6)',
      },
      blur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}
