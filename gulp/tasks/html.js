import gulp from 'gulp';
const browserSync = require('browser-sync').create();
import htmlmin from 'gulp-htmlmin';
import plumber from 'gulp-plumber';
import paths from '../paths';
// * import pug from 'gulp-pug';

// * конфигурация для таска
const config = {
    'html': {
        // * конфиг для таска если пишешь на обычном html
        'collapseWhitespace': true,
        'removeComments': true,
    },
    'pug': {
        // * конфиг для таска если используется pug

    }
};

// * описание таска
// * в зависимости от того испольуется ли pug или нет комментируй/раскомментируй строки
const html = () => gulp
    .src(paths.html.src)
    // * .src(paths.pug.src)
    // * .pipe(pug(config.pug))
    .pipe(plumber())
    .pipe(htmlmin(config.html))
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream());

export default html;
