const StreamGulpTask = require('./classes/stream-gulp-task');
const fn = require('./functions/html-post');

const obj = {
  name: 'html:post',
  src: './build/**/*.html',
  dest: './build',
  fn,
};

new StreamGulpTask(obj);