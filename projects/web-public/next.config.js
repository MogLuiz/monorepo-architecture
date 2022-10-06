const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "@monorepo/utils",
  "@monorepo/design-system",
]);

/**
 * @type {import('next').NextConfig}
 */
module.exports = withPlugins([withTM], {
  trailingSlash: true,
});
