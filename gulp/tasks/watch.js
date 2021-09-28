const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const paths = require('../paths')
const styles = require('./styles')
const scripts = require('./scripts')
const html = require('./html')

const watch = () => {
    browserSync.init({
        server: {
            baseDir: ''
        },
        port: 3000,
        open: true,
        notify: false
    })

    gulp.watch(paths.scripts.src, scripts).on('change', browserSync.reload)
    gulp.watch(paths.styles.src, styles).on('change', browserSync.reload)
    gulp.watch(paths.html.src, html).on('change', browserSync.reload)
}

export default watch
