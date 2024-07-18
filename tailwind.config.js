/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./bg.jpg')",
      },
      spacing: {
        70: '70%',
      },
    },
  },
  plugins: [],
}
