/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize:{
        xsmall:".85rem",
      },
      colors:{
        xdark:"#141514",
        xdarker:"#212023",
        xgrey:"#777679",
        xwhite:"#FEFFFE",
      }
    },
  },
  plugins: [],
}
