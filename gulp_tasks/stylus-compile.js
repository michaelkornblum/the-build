const StreamGulpTask = require('./classes/stream-gulp-task');
let fn = require('./functions/stylus-compile');

let obj = {
  name: 'stylus:compile',
  src: './styles/main.styl',
  dest: './assets/styles',
  watchDir: './styles/**/*',
  watchTask: [
    'clean:stylus:compile',
    'stylus:compile',
    'metalsmith:compile',
    'server:reload',
  ],
  fn,
};

const stylusCompile = new StreamGulpTask(obj);
stylusCompile.all();