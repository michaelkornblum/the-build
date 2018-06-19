const combiner = require('stream-combiner');
const {
  plumber, 
  ifEnv, 
  smushit 
} = require('gulp-load-plugins')();

module.exports = () =>
  combiner(
    plumber(),
    ifEnv('production',
      smushit({
        verbose: true
      })
    )
  );