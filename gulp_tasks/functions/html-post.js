const { plumber, htmlmin } = require('gulp-load-plugins')();
const critical = require('critical').stream;
const combiner = require('stream-combiner');

module.exports = () =>
  combiner(
    plumber(),
    critical({
      base: './build',
      inline: true,
      minify: true,
    }),
    htmlmin({ collapseWhitespace: true })
  );