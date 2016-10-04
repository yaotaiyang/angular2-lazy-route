/**
 * Created by yaotaiyang on 2016/8/1.
 */

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    config = require('./config'),
    proxy = require('http-proxy-middleware');

gulp.task('connect', function () {
    $.connect.server({
		port: 9900,
        root: 'build',
        livereload: true,
        middleware:function(connect,opt){
            return [
                proxy('/api', {// configure proxy middleware
                    // context: '/' will proxy all requests
                    // use: '/api' to proxy request when path starts with '/api'
                    target: 'http://localhost:3333',
                    changeOrigin:true    // for vhosted sites, changes host header to match to target's host
                })
        ]}
    });
});