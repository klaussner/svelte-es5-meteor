'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () => {
  return gulp.src(require.resolve('svelte')).pipe(babel({
    presets: ['es2015'],
    compact: true
  }))
  .pipe(gulp.dest('dist'));
});
