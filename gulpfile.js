'use strict';
 
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
 
sass.compiler = require('node-sass');

gulp.task('stream', function () {
    return watch('css/**/*.css', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
});

gulp.task('callback', function () {
    return watch('css/**/*.css', function () {
        gulp.src('css/**/*.css')
            .pipe(gulp.dest('build'));
    });
}); 
 
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      grid: true,
      browsers: ['last 6 versions'],
      cascade: false
        }))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.scss',  gulp.parallel('sass'));
});

