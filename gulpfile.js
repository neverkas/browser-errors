// gulpjs concat connect

var gulp  = require('gulp'),
  connect = require('gulp-connect')
  concat  = require('gulp-concat');
 
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});
 
gulp.task('js', function(){
//  gulp.src(['app/source/logs.js', 'app/source/db.js'])
  gulp.src(['app/source/*.js'])
//  .pipe(concat('source/script.js'))
//  .pipe(gulp.dest('.'))
//  .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src(['app/*.html'])
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['app/source/*.js', 'app/*.html'], ['js', 'html']);
});
 
gulp.task('default', ['connect', 'watch']);