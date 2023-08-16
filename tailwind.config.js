const defaultTheme = require('tailwindcss/defaultTheme');
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  darkMode: "class",
  content: [
    'src/**/*.tsx',
  ],
  theme: {
    extend: {
      container: {
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
        }
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
      },
      fontFamily: {
        'sans': ['var(--font-montserrat)', ...defaultTheme.fontFamily.sans],
      },
    },
  }
});
