/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        FKregular: ['"FKGroteskTrial-Regular"', 'system-ui'],
        FKmedium: ['"FKGroteskTrial-Medium"', 'system-ui'],
        FKlight: ['"FKGroteskTrial-Light"', 'system-ui'],
        PPbook: ['"PPNeueMontreal-Book"', 'system-ui'],
        PPmedium: ['"PPNeueMontreal-Medium"', 'system-ui'],
      },
      colors: {
        'grey-1': '#E2E2E2',
        'grey-2': '#595959',
        'grey-3': '#A8A8A8',
        'grey-4': '#7D7D7D',
        'grey-5': '#E1E1E1',
      },
      fontSize: {
        xl: '15px',
        '2xl': '17px',
        '3xl': '20px',
        '4xl': '26px',
        '5xl': '30.38px',
        '6xl': '36px',
        '7xl': '56px',
      },
      lineHeight: {
        13: '30px',
        14: '36px',
        15: '54.7px',
        16: '60px',
      },
      screens: {
        'matrix': '1195px',
      },
    },
  },
  plugins: [],
};
