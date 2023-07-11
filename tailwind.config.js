/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'smm-pink': '#FD0054',
        'smm-red': '#A80038',
        'smm-black': '#2B2024',
      },
      fontFamily: {
        'made-sunflower': ['Made Sunflower', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

