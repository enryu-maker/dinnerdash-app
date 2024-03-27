/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "poppins":"Poppins",
        "nunito":"Nunito",

      },
      colors:{
        // "primary": "#386641",
        "primary": "#2d6a4f",

      }
    },
  },
  plugins: [],
})

