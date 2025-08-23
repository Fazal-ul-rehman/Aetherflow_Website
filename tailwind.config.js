
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb'
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        cardReveal: {
          '0%': { opacity: 0, transform: 'translateY(10px) scale(0.98)' },
          '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 700ms ease-out both',
        cardReveal: 'cardReveal 500ms ease-out both',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(37,99,235,0.25)'
      }
    },
  },
  plugins: [],
}
