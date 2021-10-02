const gulp = require('gulp');
const styles = require('./gulp/tasks/styles');
const scripts = require('./gulp/tasks/scripts');
const html = require('./gulp/tasks/html');
const clean = require('./gulp/tasks/clean');
const watch = require('./gulp/tasks/watch');

const dev = gulp.series(watch);
const build = gulp.series(clean, gulp.parallel(html, styles, scripts));

exports.build = build;
exports.dev = dev;
