let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let sassCompiler = require('gulp-sass');

gulp.task('serve', _serveFn);
gulp.task('compile-sass', _compileSass);


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

function _compileSass() {
  gulp.src('./sass/*')
    .pipe(sassCompiler().on('error', sassCompiler.logError))
    .pipe(gulp.dest('./css'));
}