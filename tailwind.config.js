/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F4B40F',
        'primary-hover': '#4C5AEC',
      },
      keyframes: {
        smoothBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        smoothBounce: 'smoothBounce 0.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
