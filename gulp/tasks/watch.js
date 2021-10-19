import { watch } from 'gulp';
import paths from '../paths';
import styles from './styles';
import scripts from './scripts';
import html from './html';

const browserSync = require('browser-sync').create();

// * описание таска
const watching = () => {
    browserSync.init({
        server: {
            baseDir: paths.serve.dir
        },
        port: 3000,
        open: true,
        notify: false,
    });
    watch(paths.scripts.src, scripts).on('change', browserSync.reload);
    watch(paths.styles.src, styles).on('change', browserSync.reload);
    watch(paths.html.src, html).on('change', browserSync.reload);
};

export default watching;
