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
        surface: '#131722',
        'border-dark': '#1F2430',
        'text-main': '#E8EAED',
        'text-muted': '#8B92A5',
        accent: {
          DEFAULT: '#5B8DEF',
          hover: '#4A7BDC',
          glow: 'rgba(91, 141, 239, 0.15)',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E2C25D',
          dark: '#B08E20',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
