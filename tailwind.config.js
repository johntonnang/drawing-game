/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      blue: '#203E87',
      green: '#33C165',
      orange: '#DF9201',
      'bg-blue': '#4570C6',
      white: '#FFF',
      black: '#000',
      yellow: '#FFFF00',
      purple: '#800080',
      pink: '#FFC0CB',
      'blue-color': '#0000FF',
      red: '#FF0000',
      'green-color': '#008000',
    },
    fontFamily: {
      gloria: ['Gloria Hallelujah', 'cursive'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
