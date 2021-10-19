import { task, series, parallel } from 'gulp';
import styles from './gulp/tasks/styles';
import scripts from './gulp/tasks/scripts';
import html from './gulp/tasks/html';
import clean from './gulp/tasks/clean';
import watching from './gulp/tasks/watch';

task('dev', watching);
task('build', series(clean, parallel(html, styles, scripts)));
