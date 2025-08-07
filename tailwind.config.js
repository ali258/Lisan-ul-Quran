/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./App.tsx",
    "./index.js"
  ],
  theme: {
    extend: {
      colors: {
        // Quran-inspired color palette
        primary: {
          50: '#fef7f0',
          100: '#fdecd8',
          200: '#fbd5b0',
          300: '#f8b87a',
          400: '#f5933d',
          500: '#f2751a',
          600: '#e35a0f',
          700: '#bc4410',
          800: '#963714',
          900: '#7a3014',
          950: '#421607',
        },
        secondary: {
          50: '#fef7f0',
          100: '#fdecd8',
          200: '#fbd5b0',
          300: '#f8b87a',
          400: '#f5933d',
          500: '#d2691e',
          600: '#bc4410',
          700: '#963714',
          800: '#7a3014',
          900: '#421607',
        },
        beige: {
          50: '#fefefe',
          100: '#fefefe',
          200: '#fefdfb',
          300: '#fdfaf5',
          400: '#faf5e6',
          500: '#f5f5dc',
          600: '#e6d7c3',
          700: '#d4c4a8',
          800: '#c2b18d',
          900: '#b09e72',
        },
        dark: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#0d0d0d',
        }
      },
      fontFamily: {
        'amiri': ['Amiri', 'serif'],
        'arabic': ['Scheherazade New', 'Amiri', 'Noto Naskh Arabic', 'serif'], // Multiple Arabic fonts for better diacritics
        'urdu': ['Noto Nastaliq Urdu', 'serif'], // System font
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      boxShadow: {
        'quran': '0 4px 20px rgba(139, 69, 19, 0.15)',
        'quran-lg': '0 8px 30px rgba(139, 69, 19, 0.2)',
      },
    },
  },
  plugins: [],
} 