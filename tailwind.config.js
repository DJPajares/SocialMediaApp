/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './containers/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      flexGrow: {
        '1/2': 0.5,
      },
      flexShrink: {
        '1/2': 0.5,
      },
      // fontFamily: {
      //   sans: [
      //     'Lato',
      //     ...defaultTheme.fontFamily.sans,
      //   ]
      // },
      colors: {
        primary: '#0369a1',
        secondary: '#c2410c',
        tangerine: {
          light: '#ff9e4f',
          DEFAULT: '#ff7f00',
          dark: '#c2410c',
        },
        background: {
          light: '#f0f0f0',
          DEFAULT: '#f0f0f0',
          dark: '#1c1917',
        },
        subbackground: {
          light: colors.stone[50],
          DEFAULT: colors.neutral[50],
          dark: colors.neutral[800],
        },
        text: {
          light: colors.neutral[950],
          DEFAULT: colors.neutral[950],
          dark: colors.neutral[50],
        },
        subtext: {
          light: colors.neutral[500],
          DEFAULT: colors.neutral[500],
          dark: colors.neutral[500],
        },
        border: {
          light: colors.neutral[700],
          DEFAULT: colors.neutral[700],
          dark: colors.neutral[800],
        },
        divider: {
          light: colors.neutral[300],
          DEFAULT: colors.neutral[300],
          dark: colors.neutral[600],
        },
        icon: {
          light: colors.neutral[950],
          DEFAULT: colors.neutral[950],
          dark: colors.neutral[50],
        },
      },
    },
  },
  plugins: [],
};
