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
      
    },
  },
  plugins: [],
}
