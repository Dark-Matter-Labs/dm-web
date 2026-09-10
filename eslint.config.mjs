import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';

/**
 * Flat config, required by ESLint 9 — which `eslint-config-next@16` in turn
 * requires. `next lint` no longer exists in Next 16, so the `lint` script
 * calls the ESLint CLI directly.
 *
 * eslint-config-next 16 already ships flat config, so it is imported
 * directly rather than wrapped in FlatCompat.
 */
const config = [
  {
    ignores: ['.next/**', 'node_modules/**', 'out/**', 'build/**'],
  },
  ...nextCoreWebVitals,
];

export default config;
