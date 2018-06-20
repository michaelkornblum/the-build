const StreamGulpTask = require('./classes/stream-gulp-task');
const fn = require('./functions/webpack-compile');

const obj = {
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

new StreamGulpTask(obj);