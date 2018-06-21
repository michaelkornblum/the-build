const StreamGulpTask = require('./classes/stream-gulp-task');
const fn = require('./functions/css-post');

const obj = {
  name: 'css:post',
  src: './build/assets/styles/*.css',
  dest: './build/assets/styles/',
  fn,
  opts: {
    uncss: {
      html: ['./build/**/*index.html'],
    },
  },
};

new StreamGulpTask(obj);
