/**
 * Created by yaotaiyang on 2016/8/1.
 */

module.exports = {
    PATH: {
        'build': 'build',  //构建目录
        'JS': ['src/*.js', 'src/**/*.js', 'src/**/**/*.js', 'src/**/**/**/*.js'],
        'jsMini':['build/js/*.js'],
        'index': './src/index.html',
        'appEnter': './src/module/app.js',
        'appOut': 'build/js',
        'copyFile': ['src/static/fonts/*.*'],
        'IMG': ['src/static/images/*'],
        'CSS': ['src/static/css/*.css']
    }
}