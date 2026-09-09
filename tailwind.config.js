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
        // Nombres sin colisión con paleta Tailwind built-in
        'violet-custom': '#9B7FFF',
        'violet-subtle': 'rgba(155, 127, 255, 0.10)',
        'green-custom': '#4ADE80',
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
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-8px) rotate(1deg)' },
          '66%': { transform: 'translateY(-4px) rotate(-1deg)' },
        },
      },
      boxShadow: {
        'accent': '0 0 20px rgba(107, 155, 255, 0.3)',
        'accent-lg': '0 0 40px rgba(107, 155, 255, 0.4)',
        'gold': '0 0 20px rgba(229, 193, 88, 0.3)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.6)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}