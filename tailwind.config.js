/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}","./public/index.html"],
  theme: {
    extend: {
      borderColor : {
        primary : 'rgb(85 81 327)',
        secondary : '#2b2d77',
      }
    },
    fontFamily: {
      'hero-font' : 'Libertinus+Serif'
    }
  },
  plugins: [],
}
