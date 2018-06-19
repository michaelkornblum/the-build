const StreamGulpTask = require('./classes/stream-gulp-task');
let fn = require('./functions/html-post');

let obj = {
  name: 'html:post',
  src: './build/**/*.html',
  dest: './build',
  fn,
};

const htmlPost = new StreamGulpTask(obj);
htmlPost.create();