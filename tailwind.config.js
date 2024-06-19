/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: '#00ADB5',
        darkGrey: '#222831',
        lightGrey: '#393E46',
        extraLightGrey: '#EEEEEE',
        warning: '#F27C7C',
      },
      fontFamily: {
        serif: ['"Roboto Slab"', 'serif'],
        sans: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
