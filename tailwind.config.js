/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'neueMontreal': ['neueMontreal', 'sans-serif'],
        'neueMontrealLight': ['neueMontrealLight', 'sans-serif'],
        'neueMontrealBold': ['neueMontrealBold', 'sans-serif'],
      },
      colors: {
        'light-bg': 'hsl(231, 32%, 91%)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        '.writing-vertical-lr': {
          'writing-mode': 'vertical-lr'
        }
      }
      addUtilities(newUtilities)
    }
  ],
}
