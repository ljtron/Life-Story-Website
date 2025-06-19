/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      colors: {
        burgundy: {
          light: '#BD4356',
          DEFAULT: '#8B2635',
          dark: '#6A1D28',
        },
        cream: {
          light: '#FFFCF8',
          DEFAULT: '#FFF8F0',
          dark: '#F8E9D8',
        },
        teal: {
          light: '#29B7C5',
          DEFAULT: '#177E89',
          dark: '#0F5964',
        },
      },
    },
  },
  plugins: [],
};