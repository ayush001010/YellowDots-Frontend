/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#F4B40F',
        'primary-hover': '#4C5AEC',
      },
    },
  },
  plugins: [],
}