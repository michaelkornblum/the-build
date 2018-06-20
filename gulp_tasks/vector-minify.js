const StreamGulpTask = require('./classes/stream-gulp-task');
const fn = require('./functions/vector-minify');

const obj = {
  name: 'vector:minify',
  src: './vectors/*',
  dest: './assets/vectors/',
  watchDir: './vectors/**/*',
  watchTask: [
    'clean:vector:minify',
    'vector:minify',
    'metalsmith:compile',
    'server:reload',
  ],
  fn,
};

new StreamGulpTask(obj);