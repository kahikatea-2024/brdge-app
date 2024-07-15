/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      padding: {
        cover: '56.25%', // 16:9 aspect ratio
        cover2: '75%', // 3:4 aspect ratio
        cover3: '56.25%', // 16:9 aspect ratio
      },
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
        sans: ['Poppins', 'Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
