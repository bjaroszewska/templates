var gulp = require('gulp');
var notify = require('gulp-notify');
var stylus = require('gulp-stylus');

gulp.task('stylus', function () {
    return gulp.src('./1/*.styl')
      .pipe(stylus())
      .pipe(notify("Stylus was compiled correctly!"))
      .pipe(gulp.dest('./1/'));
});

gulp.task('watch', function () {
    gulp.watch('./1/*.styl', ['stylus']);
});

gulp.task('default', ['watch']);