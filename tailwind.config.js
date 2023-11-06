/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './client/templates/**/*.html',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    colors: {
      primary: '#aa8453',
      secondary: '#222',
    },
    extend: {
      fontFamily: {
        'sans': ['"Noto Sans"', 'sans-serif'],
        'serif': ['"Noto Serif"', 'serif'],
      },
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

