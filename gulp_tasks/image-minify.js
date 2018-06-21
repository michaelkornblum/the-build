const StreamGulpTask = require('./classes/stream-gulp-task');
const fn = require('./functions/image-minify');

const obj = {
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
  opts: {
    smushit: {
      verbose: true,
    },
  },
};

new StreamGulpTask(obj);
