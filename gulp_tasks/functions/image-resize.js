const combiner = require('stream-combiner');
const {
  plumber,
  responsiveImages,
  ifEnv,
  smushit
} = require('gulp-load-plugins')();

module.exports = opts =>
  combiner(
    plumber(),
    responsiveImages(opts.responsiveImages),
    ifEnv('production', smushit(opts.smushit))
  );