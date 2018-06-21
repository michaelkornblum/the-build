const StreamGulpTask = require('./classes/stream-gulp-task');
const fn = require('./functions/html-post');

const obj = {
  name: 'html:post',
  src: './build/**/*.html',
  dest: './build',
  fn,
  opts: {
    critical: {
      base: './build',
      inline: true,
      minify: true,
    },
    htmlmin: {
      collapseWhitespace: true,
    },
  },
};

new StreamGulpTask(obj);