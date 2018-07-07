const StreamGulpTask = require('./classes/stream-gulp-task');
const fn = require('./functions/image-resize');
const { riOpts } = require('./functions/helpers/gulp-helpers');

const types = ['*.jpg', '*.jpeg', '*.png', '*.gif', '*.svg'];
const sizes = [380, 420, 768, 992, 1198];
const responsiveImages = riOpts(types, sizes);

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
  opts: {
    responsiveImages,
    smushit: {
      verbose: true,
    },
  },
};

new StreamGulpTask(obj);