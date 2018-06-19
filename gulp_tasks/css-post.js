const StreamGulpTask = require('./classes/stream-gulp-task');
let fn = require('./functions/css-post');

let obj = {
  name: 'css:post',
  src: './build/assets/styles/*.css',
  dest: './build/assets/styles/',
  fn,
};

const cssPost = new StreamGulpTask(obj);
cssPost.create();