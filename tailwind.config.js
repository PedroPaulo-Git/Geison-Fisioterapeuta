/** @type {import('tailwindcss').Config} */
import Swdad from './src/assets/'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      backgroundImage: {
        'background-services': "url('./src/assets/backgroundservices.jpeg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        'regal-blue': '#0d9488',
        'blue-light':'#30ffea'
      },
    },
  },
  plugins: [],
}