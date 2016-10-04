/**
 * Created by yaotaiyang on 2016/8/1.
 */

var gulp = require('gulp'),
    config = require('./config');

//JS检测任务
gulp.task('copy', function () {
    return gulp.src(config.PATH.copyFile)
        .pipe(gulp.dest('./build/fonts'));
});