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
        'gradient-glow': 'radial-gradient(600px circle at var(--tw-gradient-stops), transparent 60%)',
      },
      animation: {
        // Floating animations
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-delayed-slow': 'float 9s ease-in-out 3s infinite',

        // Pulse & glow animations
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'pulse-glow-slow': 'pulse-glow 5s ease-in-out infinite',

        // Spin & rotate animations
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin-reverse 20s linear infinite',
        'spin-slower': 'spin 40s linear infinite',
        'rotate-slow': 'rotate-slow 8s ease-in-out infinite',

        // Bounce & scale animations
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'bounce-delayed': 'bounce 2s ease-in-out 0.5s infinite',
        'scale-pulse': 'scale-pulse 2s ease-in-out infinite',

        // Shimmer & shine animations
        'shimmer': 'shimmer 2s linear infinite',
        'shine': 'shine 3s ease-in-out infinite',

        // Gradient animations
        'gradient-shift': 'gradient-shift 4s ease-in-out infinite',
        'gradient-rotate': 'gradient-rotate 6s linear infinite',

        // Blink & fade animations
        'blink': 'blink 1.5s ease-in-out infinite',
        'fade-in-out': 'fade-in-out 3s ease-in-out infinite',

        // Complex animations
        'float-rotate': 'float-rotate 8s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'morph': 'morph 8s ease-in-out infinite',

        // Text animations
        'text-shimmer': 'text-shimmer 3s linear infinite',
      },
      keyframes: {
        // Floating
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-8px) rotate(1deg)' },
          '66%': { transform: 'translateY(-4px) rotate(-1deg)' },
        },

        // Pulse glow
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(107, 155, 255, 0.3)' },
          '50%': { opacity: '0.7', boxShadow: '0 0 40px rgba(107, 155, 255, 0.5)' },
        },

        // Spin reverse
        'spin-reverse': {
          'from': { transform: 'rotate(360deg)' },
          'to': { transform: 'rotate(0deg)' },
        },

        // Rotate slow
        'rotate-slow': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },

        // Scale pulse
        'scale-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },

        // Shimmer
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },

        // Shine
        shine: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },

        // Gradient shift
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },

        // Gradient rotate
        'gradient-rotate': {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },

        // Blink
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },

        // Fade in out
        'fade-in-out': {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },

        // Float rotate
        'float-rotate': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-8px) rotate(5deg)' },
          '50%': { transform: 'translateY(-4px) rotate(0deg)' },
          '75%': { transform: 'translateY(-6px) rotate(-5deg)' },
        },

        // Orbit
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(60px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(60px) rotate(-360deg)' },
        },

        // Morph
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },

        // Text shimmer
        'text-shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },

      boxShadow: {
        'accent': '0 0 20px rgba(107, 155, 255, 0.3)',
        'accent-lg': '0 0 40px rgba(107, 155, 255, 0.4)',
        'accent-xl': '0 0 60px rgba(107, 155, 255, 0.5)',
        'gold': '0 0 20px rgba(229, 193, 88, 0.3)',
        'gold-lg': '0 0 40px rgba(229, 193, 88, 0.4)',
        'violet': '0 0 20px rgba(155, 127, 255, 0.3)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.6)',
        'glow': '0 0 30px rgba(107, 155, 255, 0.25)',
        'glow-lg': '0 0 50px rgba(107, 155, 255, 0.35)',
      },

      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'spring-smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'ease-sharp': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },

      cursor: {
        glow: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2732%27 height=%2732%27 viewBox=%270 0 32 32%27%3E%3Ccircle cx=%2716%27 cy=%2716%27 r=%276%27 fill=%27%236B9BFF%27 opacity=%270.5%27/%3E%3C/svg%3E") 16 16, auto',
      },

      spacing: {
        'safe': 'max(1rem, env(safe-area-inset-bottom))',
      },
    },
  },
  plugins: [],
}
