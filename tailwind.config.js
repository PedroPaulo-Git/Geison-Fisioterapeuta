/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      colors: {
        'regal-blue': '#0d9488',
        'blue-light':'#30ffea'
      },
    },
  },
  plugins: [],
}