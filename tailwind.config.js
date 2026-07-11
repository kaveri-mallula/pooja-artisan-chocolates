/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFAF5',
          100: '#FAF3EA',
          200: '#F5E8D5',
          300: '#EECFB0',
          DEFAULT: '#FAF3EA',
        },
        chocolate: {
          light: '#8B6343',
          DEFAULT: '#5A3A22',
          dark: '#3D2510',
          900: '#2A180A',
        },
        gold: {
          light: '#E2C98A',
          DEFAULT: '#C8A96A',
          dark: '#A68845',
          900: '#7D6330',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-down': 'fadeDown 0.6s ease-out forwards',
        'slide-left': 'slideLeft 0.8s ease-out forwards',
        'slide-right': 'slideRight 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C8A96A 0%, #E2C98A 50%, #C8A96A 100%)',
        'chocolate-gradient': 'linear-gradient(135deg, #3D2510 0%, #5A3A22 50%, #8B6343 100%)',
        'cream-gradient': 'linear-gradient(135deg, #FAF3EA 0%, #F5E8D5 100%)',
        'hero-overlay': 'linear-gradient(to bottom, rgba(42,24,10,0.7) 0%, rgba(42,24,10,0.4) 50%, rgba(42,24,10,0.8) 100%)',
      },
      boxShadow: {
        'luxury': '0 20px 60px rgba(90, 58, 34, 0.15), 0 8px 24px rgba(90, 58, 34, 0.1)',
        'luxury-lg': '0 30px 80px rgba(90, 58, 34, 0.2), 0 12px 40px rgba(90, 58, 34, 0.15)',
        'gold': '0 8px 32px rgba(200, 169, 106, 0.3)',
        'card': '0 4px 24px rgba(90, 58, 34, 0.08)',
        'card-hover': '0 16px 48px rgba(90, 58, 34, 0.18)',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}
