const BasicGulpTask = require('./classes/basic-gulp-task');
let fn = require('./functions/metalsmith-compile');

let obj = {
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

const metalsmithCompile = new BasicGulpTask(obj);
metalsmithCompile.create();
metalsmithCompile.watch();