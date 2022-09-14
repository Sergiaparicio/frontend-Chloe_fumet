/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    fontFamily: {
      'petit': ['Petit Formal Script','cursive','sans-serif'],
      'permanent': ['Permanent Marker','cursive','sans-serif'],
      'paprika': ['Paprika','cursive','sans-serif']
    },
    extend: {
      backgroundImage: {
        'atrapasueños': "url('./img/atrapasueños.jpg')",
      }
    }
  },
  plugins: [
    require('tw-elements/dist/plugin')
],
}