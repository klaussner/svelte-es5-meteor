'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');

gulp.task('default', () => {
  return browserify(require.resolve('svelte'), {
    standalone: 'svelte'
  })
  .transform('babelify', {
    presets: ['es2015'],
    compact: false
  })
  .bundle()
  .pipe(source('svelte.js'))
  .pipe(gulp.dest('dist'));
});
