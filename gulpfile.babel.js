import { task, series, parallel } from 'gulp';
import scripts from './gulp/tasks/scripts';
import styles from './gulp/tasks/styles';
import html from './gulp/tasks/html';
import clean from './gulp/tasks/clean';
import watching from './gulp/tasks/watch';
import images from './gulp/tasks/images';

task('dev', watching);
task('build', series(clean, parallel(html, styles, scripts, images)));
