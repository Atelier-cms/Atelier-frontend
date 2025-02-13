/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        sans : [ 'Harmonia Sans', 'sans-serif'], // Add Harmonia Sans as default sans font
      },
      boxShadow: {
        'cyan-inner': 'inset 0 0 20px 2px rgba(10, 255, 255,0.57)',
      },
    },
  },
  plugins: [],
}

