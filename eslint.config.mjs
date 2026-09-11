import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

/**
 * Flat config, required by ESLint 9 — which `eslint-config-next@16` in turn
 * requires. `next lint` no longer exists in Next 16, so the `lint` script
 * calls the ESLint CLI directly.
 *
 * eslint-config-next 16 already ships flat config, so it is imported
 * directly rather than wrapped in FlatCompat.
 *
 * `prettier/recommended` must come last: it registers the Prettier plugin,
 * reports formatting drift as a lint error, and — via the bundled
 * eslint-config-prettier — switches off the stylistic rules that would
 * otherwise disagree with Prettier. It reads .prettierrc.json, so the
 * `lint` and `format` scripts cannot drift apart.
 */
const config = [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'out/**',
      'build/**',
      'public/**',
      'next-env.d.ts',
    ],
  },
  ...nextCoreWebVitals,
  prettierRecommended,
];

export default config;
