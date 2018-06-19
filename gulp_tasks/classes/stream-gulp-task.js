const { task, src, dest } = require('gulp');
const BasicGulpTask = require('./basic-gulp-task');

module.exports = class StreamGulpTask extends BasicGulpTask {
  create() {
    return task(this.name, () =>
      src(this.src)
      .pipe(this.fn())
      .pipe(dest(this.dest))
    )
  }
}