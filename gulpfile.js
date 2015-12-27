/**
 * Created by vajoy on 2015/12/26.
 */
var path = require('path');
var gulp = require('gulp'),
    babel = require("gulp-babel"),
    sass = require('gulp-sass'),
    mincss = require('gulp-mini-css'),
    clean = require('gulp-clean'),
    gutil = require("gulp-util"),
    embed = require("gulp-embed"),
    webpack = require("webpack");

var webpack_conf = require("./webpack.config.js");

var raw_view = './src/views',
    com_view = './dist/views',
    raw_css = './src/css',
    com_css = './dist/css',
    raw_js = './src/js',
    com_js = './dist/js';

gulp.task("webpack", function(callback) {  //暂时不用
    webpack(webpack_conf, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        callback && callback();
    });
});

gulp.task("babel", function() {
    return gulp.src([raw_js + '/**/*.js', '!' + raw_js + '/page/**/*.js'])
        .pipe(babel())
        .pipe(gulp.dest(com_js));
});

gulp.task('sass', function () {
    gulp.src([raw_css + '/**/*.scss', '!'+raw_css + '/component/**/*.scss'])
        .pipe(sass())
        .pipe(mincss())
        .pipe(gulp.dest(com_css))
});

gulp.task('embed',['sass'], function () {
    gulp.src(raw_view + '/**/*.ejs')
        .pipe(embed())
        .pipe(gulp.dest(com_view))
});


gulp.task('default',function () {
    gulp.run('sass', 'babel', 'embed', 'webpack');
});