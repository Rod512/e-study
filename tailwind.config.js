/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brightBackground: '#FDFBEE',
        brightGreen: "#539165",
        lightGreen: "#959595"
      }
    },
  },
  plugins: [],
}