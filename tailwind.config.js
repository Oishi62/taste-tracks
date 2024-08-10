/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ['"Playwrite DK Uloopet"', 'cursive'],
      },
    },
  },
  plugins: [],

  theme: {
    extend: {
      colors: {
        'custom-light-green': '#cdffcd',
        'custom-dark-green': '#91ee91',
      },
    },
  },
}