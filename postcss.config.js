const postcssPresetEnv = require('postcss-preset-env');

module.exports = (cfg) => {
  const devMode = cfg.env === 'development';

  return {
    map: devMode ? 'inline' : null,
    plugins: [
      require('postcss-import')(),
      require('autoprefixer')(),
      require('postcss-preset-env')(),
      devMode ? null : require('cssnano')(),
    ],
  };
};
