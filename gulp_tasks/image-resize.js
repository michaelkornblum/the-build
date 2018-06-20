const StreamGulpTask = require('./classes/stream-gulp-task');
const fn = require('./functions/image-resize');

const obj = {
  name: 'image:resize',
  src: './images/resize/*',
  dest: './assets/images/resize/',
  watchDir: './images/resize/',
  watchTask: [
    'clean:image:resize',
    'image:resize',
    'metalsmith:compile',
    'server:reload',
  ],
  fn,
};

new StreamGulpTask(obj);