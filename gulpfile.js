'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () => {
  const module = require.resolve('svelte');

  return gulp.src(module).pipe(babel({
    presets: ['es2015'],
    compact: true
  }))
  .pipe(gulp.dest('dist'));
});
