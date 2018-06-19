const uncss = require('postcss-uncss');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const combiner = require('stream-combiner');

module.exports = () =>
  postcss([
    cssnano(),
    uncss({ 
      html: ['./build/**/*index.html'], 
    }), 
    cssnano(),
  ]);