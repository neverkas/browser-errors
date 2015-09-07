var gulp 	= require('gulp'),
  connect = require('gulp-connect')
  concat 	= require('gulp-concat');
 
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});
 
gulp.task('js', function(){
	gulp.src(['source/logs.js', 'source/db.js'])
//	.pipe(concat('source/script.js'))
	.pipe(connect.reload());
});

gulp.task('html', function () {
  //gulp.src('./app/*.html')
  gulp.src(['./index.html'])
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  //gulp.watch(['js'], ['html']);
//  gulp.watch(['./source/*.js', './*.html'], ['js', 'html']);
  gulp.watch(['./source/script.js', './*.html'], ['js', 'html']);
});
 
gulp.task('default', ['connect', 'watch']);