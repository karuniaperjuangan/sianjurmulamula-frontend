/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const fontFamily = defaultTheme.fontFamily;
fontFamily['sans'] = [
  'Montserrat', // <-- Roboto is a default sans font now
  'sans-serif',
  'system-ui',
];

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: fontFamily,
    extend: {
      colors:{
        'smm-pink': '#FD0054',
        'smm-red': '#A80038',
        'smm-black': '#2B2024',
      },
      fontFamily: {
        'made-sunflower': ['Made Sunflower','Georgia', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

