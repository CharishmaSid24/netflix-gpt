/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none', /* For Internet Explorer */
          'scrollbar-width': 'none', /* For Firefox */
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none', /* For Chrome, Safari, Edge */
        },
      }, ['responsive', 'hover']);
    },
  ],
}

