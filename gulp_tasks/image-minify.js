const StreamGulpTask = require('./classes/stream-gulp-task');
let fn = require('./functions/image-minify');

let obj = {
  name: 'image:minify',
  src: './images/minify/*',
  dest: './assets/images/minify/',
  watchDir: './images/minify/**/*',
  watchTask: [
    'clean:image:minify',
    'image:minify',
    'metalsmith:compile',
    'server:reload',
  ],
  fn,
};

const imageMinify = new StreamGulpTask(obj);
imageMinify.all();