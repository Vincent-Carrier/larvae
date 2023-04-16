const defaults = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*{.blade.php,.antlers.html}',
    './resources/js/**/*{.js,.ts}',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', ...defaults.fontFamily.sans],
      },
      colors: {
        neutral: defaults.colors.gray,
        brand: defaults.colors.blue,
        accent: defaults.colors.pink,
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
}
