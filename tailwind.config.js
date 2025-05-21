/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1A0933',
          light: '#2A1052',
          dark: '#0D041A',
        },
        neon: {
          yellow: '#FFEC19',
          pink: '#FF4DFF',
          cyan: '#19FFFF',
        },
      },
      boxShadow: {
        neon: '0 0 5px #FFEC19, 0 0 10px #FFEC19',
      },
    },
  },
  plugins: [],
};