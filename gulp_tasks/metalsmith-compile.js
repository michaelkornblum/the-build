const BasicGulpTask = require('./classes/basic-gulp-task');
const fn = require('./functions/metalsmith-compile');

const obj = {
  name: 'metalsmith:compile',
  watchDir: [
    './src/**/*',
    './layouts/**/*',
  ],
  watchTask: [
    'metalsmith:compile',
    'server:reload',
  ],
  fn,
}

new BasicGulpTask(obj);