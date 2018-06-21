const combiner = require('stream-combiner');
const {
  plumber, 
  ifEnv, 
  smushit 
} = require('gulp-load-plugins')();

module.exports = opts =>
  combiner(
    plumber(),
    ifEnv('production',
      smushit(opts.smushit)
    )
  );