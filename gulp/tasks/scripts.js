const gulp = require('gulp');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');
const paths = require('../paths');

const config = {
    uglify: { toplevel: true },
};

const scripts = () =>
    gulp
        .src(paths.scripts.src, { sourcemaps: true })
        .pipe(plumber())
        .pipe(babel())
        .pipe(uglify(config.uglify))
        .pipe(concat('script.min.js'))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browserSync.stream());

export default scripts;
