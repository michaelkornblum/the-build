const StreamGulpTask = require('./classes/stream-gulp-task');
const fn = require('./functions/stylus-compile');

const obj = {
  name: 'stylus:compile',
  src: './styles/main.styl',
  dest: './assets/styles/',
  watchDir: './styles/**/*',
  watchTask: [
    'clean:stylus:compile',
    'stylus:compile',
    'metalsmith:compile',
    'server:reload',
  ],
  fn,
};

new StreamGulpTask(obj);