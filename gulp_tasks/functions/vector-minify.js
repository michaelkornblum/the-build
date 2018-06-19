const {
  plumber,
  ifEnv,
  svgo,
} = require('gulp-load-plugins')();
const combiner = require('stream-combiner');

module.exports = () =>
  combiner(
    plumber(),
    ifEnv('production', svgo()),
  );