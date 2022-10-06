module.exports = function (eleventyConfig) {
  // make sure we're watching for css changes in dev
  // eleventyConfig.addWatchTarget('./src/css/');
  // eleventyConfig.addPassthroughCopy('./src/assets');
  // eleventyConfig.addPassthroughCopy('./src/admin');

  eleventyConfig.addShortcode(
    'currentYear',
    () => `${new Date().getFullYear()}`
  );

  // eleventyConfig.addFilter('postDate', (dateObj) => {
  //   return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
  // });

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
