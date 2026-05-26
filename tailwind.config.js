/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B2545',
          light: '#1A3A6B',
          dark: '#071830',
        },
        accent: {
          DEFAULT: '#2D6A4F',
          light: '#52B788',
          dark: '#1B4332',
        },
        slate: {
          750: '#374151',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-oswald)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero':       ['88px',  { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'hero-sm':    ['52px',  { lineHeight: '0.95', letterSpacing: '-0.01em' }],
        'section':    ['54px',  { lineHeight: '1.0' }],
        'section-sm': ['40px',  { lineHeight: '1.0' }],
        'stats':      ['72px',  { lineHeight: '1.0' }],
        'card-title': ['24px',  { lineHeight: '1.2' }],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0B2545 0%, #1A3A6B 50%, #071830 100%)',
        'cta-gradient': 'linear-gradient(135deg, #2D6A4F 0%, #1B4332 100%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
