const { plumber, htmlmin } = require('gulp-load-plugins')();
const critical = require('critical').stream;
const combiner = require('stream-combiner');

module.exports = opts =>
  combiner(
    plumber(),
    critical(opts.critical),
    htmlmin(opts.htmlmin)
  );