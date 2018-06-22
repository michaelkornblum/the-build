require('dotenv').config();
const { task, series } = require('gulp');
require('./gulp_tasks');

task('assets:prepare', series(
  'clean:all',
  'vector:minify',
  'webpack:compile',
  'image:minify',
  'image:resize',
  'stylus:compile',
  'metalsmith:compile',
));

task('dev', series(
  'server:start',
  'watch:image:minify',
  'watch:image:resize',
  'watch:stylus:compile',
  'watch:vector:minify',
  'watch:webpack:compile',
  'watch:metalsmith:compile',
));

task('build', series(
  'css:post',
  'html:post',
));
