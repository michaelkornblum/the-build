const { task, watch, series } = require('gulp');
const del = require('del');
const { init, reload } = require('browser-sync').create();

module.exports = class BasicGulpTask {
  constructor(obj) {
    for (let prop in obj) {
      this[prop] = obj[prop];
    }

    this.create();

    if (obj.hasOwnProperty('watchDir') && obj.hasOwnProperty('watchTask')) {
      if(obj.watchTask.indexOf(`clean:${this.name}` !== -1)) {
        this.clean();
      }
      this.watch();
    }
  }
  
  create() {
    return task(this.name, (cb) => {
      this.fn();
      cb();
    });
  }

  watch() {
    return task(`watch:${this.name}`, (cb) => {
      watch(this.watchDir, series(...this.watchTask));
      cb();
    });
  }

  clean() {
    return task(`clean:${this.name}`, (cb) => {
      del(this.dest);
      cb();
    });
  }
  
  static serverStart(src='./build') {
    return task('server:start', (cb) => {
      init({
        server: {
          baseDir: src,
        },
      });
      cb();
    }); 
  }

  static serverReload() {
    return task('server:reload', (cb) => {
      reload();
      cb();
    });
  }

  static cleanAll() {
    return task('clean:all', (cb) => {
      del(['./assets/**/*', './build/**/*']);
      cb();
    });
  }

  static run(name, tasks) {
    return task(name, series(...tasks))
  }
};