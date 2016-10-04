/**
 * Created by yaotaiyang on 2016/8/1.
 */

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    rev = require("gulp-append-rev"),
    config = require('./config');
gulp.task('usemin', function() {
    gulp.src(config.PATH.CSS)
        .pipe($.usemin())
        .pipe(rev({root:"build"}))
        .pipe(gulp.dest('build/css'));
    gulp.src(config.PATH.index)
        .pipe($.usemin())
        .pipe(rev({root:"build"}))
        .pipe(gulp.dest('build/'));

    return;
});