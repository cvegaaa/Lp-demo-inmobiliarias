/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FBF8F3',
          100: '#F5EFE6',
          200: '#EBE2D4',
        },
        ink: {
          900: '#1A1814',
          800: '#2A2620',
          700: '#3D372E',
          500: '#6B6358',
          400: '#8A8278',
        },
        clay: {
          400: '#C27A4E',
          500: '#B06A3E',
          600: '#9A5A32',
          700: '#7E4828',
        },
        sage: {
          500: '#7C8471',
          600: '#656D5B',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
    },
  },
  plugins: [],
};
