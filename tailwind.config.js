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
    },
    fontFamily: {
      gloria: ['Gloria Hallelujah', 'cursive'],
    },
  },
  plugins: [],
}
