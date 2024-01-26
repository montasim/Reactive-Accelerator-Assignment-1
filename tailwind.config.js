/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#172227',
      'green': {
        500: '#00CC8C',
        800: '#038C61',
      },
      'white': {
        500: '#f8fff8',
        800: '#FFFFFF0D'
      },
      'clifford': '#da373d',
      'gray': '#a0a7b1',
      'navy': '#303030',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      container: {
        center: true,
        padding: "1.25rem",
      },
    },
  },
  plugins: [],
}
