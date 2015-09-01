var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');

gulp.task('make', function () {
  gulp.src('source/*.js')
  .pipe(concat('script.js'))
  .pipe(uglify())
  .pipe(gulp.dest('source/build/'))
});

/*
var gulp = require('gulp');
var requirejs = require('requirejs');

gulp.task('make', function () {
    var config = {
        baseUrl: 'js',
        name: 'main',
        out: 'build/script.js',
        //findNestedDependencies: true,
        //skipSemiColonInsertion: true,
        //optimize: 'none'
    };

    requirejs.optimize(config, function (buildResponse) {
        console.log(buildResponse);
    });
});
*/