const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const htmlmin = require('gulp-htmlmin')
const paths = require('../paths')
const plumber = require('gulp-plumber')

const config = {
    html: {
        collapseWhitespace: true,
        removeComments: true
    }
}

const html = () => {
    return gulp
        .src(paths.html.src)
        .pipe(plumber())
        .pipe(htmlmin(config.html))
        .pipe(gulp.dest(paths.html.dest))
        .pipe(browserSync.stream())
}

export default html
