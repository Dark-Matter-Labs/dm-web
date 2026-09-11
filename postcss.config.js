/**
 * Tailwind 4 ships its own PostCSS plugin and handles vendor prefixing
 * internally, so `tailwindcss` is replaced by `@tailwindcss/postcss` and
 * autoprefixer is no longer needed.
 */
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
