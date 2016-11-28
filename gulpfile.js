'use strict';

const gulp = require('gulp');

const ts = require('./gulp_tasks/typescript')(gulp, {buildDirectory: 'src'});

gulp.task('watch', ()=> {
   gulp.watch(('src/**/*.ts'), ['typescript']);
});

gulp.task('build', ['typescript']);

gulp.task('default', ['build', 'watch']);