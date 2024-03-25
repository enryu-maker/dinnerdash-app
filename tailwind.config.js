/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "poppins":"Poppins"
      },
      colors:{
        // "primary": "#386641",
        "primary": "#2d6a4f",

      }
    },
  },
  plugins: [],
}

