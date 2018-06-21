const uncss = require('postcss-uncss');
const cssnano = require('cssnano');
const { plumber, postcss } = require('gulp-load-plugins')();
const combiner = require('stream-combiner');

module.exports = opts =>
  combiner(
    plumber(),
    postcss([
      uncss(opts.uncss),
      cssnano(),
    ]))
  