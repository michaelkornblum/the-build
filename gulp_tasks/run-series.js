const BasicGulpTask = require('./classes/basic-gulp-task');

BasicGulpTask.run('assets:prepare', [
  'clean:all',
  'vector:minify',
  'webpack:compile',
  'image:minify',
  'image:resize',
  'stylus:compile',
  'metalsmith:compile',
]);

BasicGulpTask.run('dev', [
  'server:start',
  'watch:image:minify',
  'watch:image:resize',
  'watch:stylus:compile',
  'watch:vector:minify',
  'watch:webpack:compile',
  'watch:metalsmith:compile',
]);

BasicGulpTask.run('build', [
  'css:post',
]);