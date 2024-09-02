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
        SaansRegular: ['SaansTRIAL-Regular', 'system-ui'],
        SaansMed: ['SaansTRIAL-Medium', 'system-ui'],
      },
      colors: {
        'grey-1': '#E2E2E2',
        'grey-2': '#585858',
        'grey-3': '#A8A8A8',
        'grey-4': '#7D7D7D',
        'grey-5': '#E1E1E1',
        'grey-6': '#E3E3E3',
        'grey-7': '#848484',
      },
      fontSize: {
        lg: '15px',
        xl: '16px',
        '2xl': '18px',
        '3xl': '20px',
        '4xl': '24px',
        '5xl': '32px',
        '6xl': '36px',
        '7xl': '56px',
      },
      lineHeight: {
        12: '26px',
        13: '33px',
        14: '42px',
        15: '54.7px',
        16: '60px',
      },
      screens: {
        matrix: '',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
};
