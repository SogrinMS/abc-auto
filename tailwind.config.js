/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      DEFAULT: '15px',
      'md': '30px',
      'lg': '20px',
    },
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1024px',
    },
    extend: {},
  },
  plugins: [],
}
