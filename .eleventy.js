const { DateTime } = require('luxon');
const esbuild = require('esbuild');

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/sass/');
  eleventyConfig.addWatchTarget('./src/js/');

  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/admin');

  eleventyConfig.on('eleventy.before', async () => {
    await esbuild.build({
      entryPoints: ['src/js/index.js'],
      bundle: true,
      outfile: 'public/js/bundle.js',
      sourcemap: true,
      target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    });
  });

  eleventyConfig.addShortcode(
    'currentYear',
    () => `${new Date().getFullYear()}`
  );

  eleventyConfig.addFilter('postDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
  });

  eleventyConfig.addFilter('filterFeatured', (artists) =>
    artists.filter((artist) => {
      return artist.data.featured;
    })
  );

  eleventyConfig.addCollection('artists', (collectionApi) => {
    const artists = collectionApi.getFilteredByTags('artist');
    return artists
      .filter((artist) => artist.active)
      .sort((a, b) => (a.data.name > b.data.name ? 1 : -1));
  });

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      data: '_data',
      includes: '_includes',
      input: 'src',
      output: 'public',
    },
  };
};
