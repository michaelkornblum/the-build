const combiner = require('stream-combiner');
const {
  plumber,
  responsiveImages,
  ifEnv,
  smushit
} = require('gulp-load-plugins')();
const { riOpts } = require('./helpers/gulp-helpers');

const types = ['*.jpg', '*.jpeg', '*.png', '*.gif', '*.svg'];
const sizes = [380, 420, 768, 992, 1200];
const opts = riOpts(types, sizes);

module.exports = () =>
  combiner(
    plumber(),
    responsiveImages(opts),
    ifEnv('production', smushit({verbose: true}))
  );