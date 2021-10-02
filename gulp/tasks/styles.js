const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const postcssNested = require('postcss-nested');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const paths = require('../paths');

const config = {
    sass: { outputStyle: 'compressed' },
    renameCss: { suffix: '.min' },
    cleanCSS: { compatibility: 'ie8' },
};

const styles = () =>
    gulp
        .src(paths.styles.src)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass(config.sass))
        .pipe(cleanCSS(config.cleanCSS))
        .pipe(postcss([autoprefixer, postcssNested]))
        .pipe(concat('style.min.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());

export default styles;
