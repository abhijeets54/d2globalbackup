/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#051b38',
        customYellow: '#ddb21d'
      },
      keyframes: {'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1'

      }
    },
  },
  plugins: [],
}

