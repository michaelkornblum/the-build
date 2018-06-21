const { task, src, dest } = require('gulp');
const BasicGulpTask = require('./basic-gulp-task');

module.exports = class StreamGulpTask extends BasicGulpTask {
  create() {
    if (this.opts) {
      return task(this.name, () =>
        src(this.src)
          .pipe(this.fn(this.opts))
          .pipe(dest(this.dest)));
    } else {
      return task(this.name, () =>
        src(this.src)
        .pipe(this.fn())
        .pipe(dest(this.dest)));
    }
  }
}