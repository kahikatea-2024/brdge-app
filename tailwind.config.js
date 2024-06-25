/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: '#00ADB5',
        darkGrey: '#BBBBBB',
        lightGrey: '#EEEEEE',
        extraLightGrey: '#000000',
        warning: '#F27C7C',
        ddarkGrey: '#222831',
        dlightGrey: '#393E46',
        dextraLightGrey: '#EEEEEE',
      },
      fontFamily: {
        serif: ['"Roboto Slab"', 'serif'],
        sans: ['Poppins','Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
