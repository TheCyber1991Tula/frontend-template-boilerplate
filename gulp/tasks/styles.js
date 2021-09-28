const gulp = require('gulp')
const autoprefixer = require('autoprefixer')
const browserSync = require('browser-sync').create()
const cleanCSS = require('gulp-clean-css')
const concat = require('gulp-concat')
const paths = require('../paths')
const plumber = require('gulp-plumber')
const postcss = require('gulp-postcss')
const postcssNested = require('postcss-nested')
const rename = require('gulp-rename')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')

const config = {
    sass: { outputStyle: 'compressed' },
    renameCss: { suffix: '.min' },
    cleanCSS: { compatibility: 'ie8' }
}

const styles = () => {
    return gulp
        .src(paths.styles.src)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass(config.sass))
        .pipe(cleanCSS(config.cleanCSS))
        .pipe(rename(config.renameCss))
        .pipe(postcss([autoprefixer, postcssNested]))
        .pipe(concat('style.min.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream())
}

export default styles
