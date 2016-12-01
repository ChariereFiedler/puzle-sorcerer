'use strict';

const gulp = require('gulp');
const path = require('path');

const config = {
   buildDirectory: './dist',
   srcDirectory: './src'
};

const ts = require('./gulp_tasks/typescript')(gulp, config);


gulp.task('copy:templates', () => {
   return gulp.src(path.join(config.srcDirectory, '/**/*.hbs'))
       .pipe(gulp.dest(config.buildDirectory))
});

gulp.task('watch', ()=> {
   gulp.watch(path.join(config.srcDirectory, '/**/*.ts'), ['typescript']);
   gulp.watch(path.join(config.srcDirectory, '/**/*.hbs'), ['copy:templates']);
});

gulp.task('build', ['typescript', 'copy:templates']);

gulp.task('default', ['build', 'watch']);