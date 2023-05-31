/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  cacheDirectory: './node_modules/.cache/remix',

  ignoredRouteFiles: ['**/.*', '**/*.spec.tsx'],
  watchPaths: ['./app', './src', '../../packages'],

  serverDependenciesToBundle: ['@acme/guidelines'],
  serverModuleFormat: 'cjs',

  future: {
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,

    unstable_dev: true,
  },
};
