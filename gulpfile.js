var gulp = require('gulp'),
    wrench = require('wrench');

wrench.readdirSyncRecursive('./gulp').filter(function (file) {
    return (/\.(js|coffee)$/i).test(file);
}).map(function (file) {
    require('./gulp/' + file);
});
var arrtask = ['connect', 'webpack', 'watch'];
if(!gulp.env.dev){
    arrtask = arrtask.concat(["copy","imageMin","usemin"]);
}
gulp.task('default', arrtask);
