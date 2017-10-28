let gulp = require('gulp');
let browserSync = require('browser-sync').create();

gulp.task('serve', _serveFn);

function _serveFn() {
  browserSync.init({
    server: {
      baseDir: '.',
      index: './index.html'
    },
    reloadDelay: 0,
    port: 8080
  });
}