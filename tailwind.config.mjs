/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        navy: '#1B3A5C',
        gold:  '#C8A951',
      },
      fontFamily: {
        heading: ['Georgia', 'serif'],
        body:    ['system-ui', 'Calibri', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
