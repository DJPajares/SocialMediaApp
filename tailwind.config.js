/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './containers/*.{js,jsx,ts,tsx}',
  ],
  theme: {
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
      text: {
        light: '#0c0a09',
        DEFAULT: '#0c0a09',
        dark: '#f0f0f0',
      },
      divider: {
        light: '#e5e5e5',
        DEFAULT: '#e5e5e5',
        dark: '#292524',
      },
    },
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
      // }
    },
  },
  plugins: [],
};
