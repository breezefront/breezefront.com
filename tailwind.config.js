const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './_includes/**/*.html',
    './_layouts/*.html',
    './assets/*.{css,js}',
    './collections/**/*.{html,md}',
    './*.{html,md}',
  ],
  theme: {
    screens: {
      xs: '390px',
      ...defaultTheme.screens
    },
    extend: {
      screens: {
        'hover-none': {
          raw: '(hover: none)',
        },
        'hover-hover': {
          raw: '(hover: hover)',
        },
      },
      typography: {
        // see https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
        DEFAULT: {
          css: {
            a: {
              '&:hover': {
                textDecoration: 'none',
              },
            },
            blockquote: {
              fontWeight: '',
              fontStyle: '',
              color: colors.zinc[500],
            },
            'blockquote p:first-of-type::before': {
              content: '',
            },
            'blockquote p:last-of-type::after': {
              content: '',
            },
            code: {
              fontWeight: '',
              fontSize: '0.825em',
              background: colors.zinc[100],
              color: colors.zinc[700],
              padding: '.125rem .25rem',
              borderRadius: '.25rem',
              border: '1px solid #eaeaea',
            },
            'code::before': {
              content: '',
            },
            'code::after': {
              content: '',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
