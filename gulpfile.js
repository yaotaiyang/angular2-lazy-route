var gulp = require('gulp'),
    wrench = require('wrench');

wrench.readdirSyncRecursive('./gulp').filter(function (file) {
    return (/\.(js|coffee)$/i).test(file);
}).map(function (file) {
    require('./gulp/' + file);
});
var arrtask = ['connect', 'webpack', 'watch'];

//arrtask = arrtask.concat(["copy","imageMin","jshint","usemin"]);
arrtask = arrtask.concat(["copy","usemin"]);
gulp.task('default', arrtask);
