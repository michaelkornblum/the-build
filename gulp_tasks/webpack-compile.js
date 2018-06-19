const StreamGulpTask = require('./classes/stream-gulp-task');
let fn = require('./functions/webpack-compile');

let obj = {
  name: 'webpack:compile',
  src: './scripts/main.js',
  dest: './assets/scripts/',
  watchDir: './scripts/**/*',
  watchTask: [
    'clean:webpack:compile',
    'webpack:compile',
    'metalsmith:compile',
    'server:reload',
  ],
  fn,
};

const webpackCompile = new StreamGulpTask(obj);
webpackCompile.all();