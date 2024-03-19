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
        FKregular: ['"FKGroteskTrial-Regular"', 'sans-serif'],
        FKmedium: ['"FKGroteskTrial-Medium"', 'sans-serif'],
        FKlight: ['"FKGroteskTrial-Light"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
