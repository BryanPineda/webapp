const gulp = require('gulp');
const sass = require('gulp-sass');
const nunjucks = require('gulp-nunjucks');
const bourbon = require('bourbon').includePaths;
const prettify = require('gulp-html-prettify');

gulp.task('sass', function () {
  return gulp.src('src/scss/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('nunjucks', function() {
  return gulp.src('src/*.html')
        .pipe(nunjucks.compile())
        .pipe(prettify({indent_char: ' ', indent_size: 2}))
        .pipe(gulp.dest('dist/views'));
});

gulp.task('bootstrap', function() {
  return gulp.src('node_modules/bootstrap/dist/js/bootstrap.js')
        .pipe(gulp.dest('dist/assets/js'));
});

gulp.task('jquery', function() {
  return gulp.src('node_modules/bootstrap/node_modules/jquery/dist/jquery.js')
        .pipe(gulp.dest('dist/assets/js'));
});

gulp.task('tether', function() {
  return gulp.src('node_modules/bootstrap/node_modules/tether/dist/js/tether.js')
        .pipe(gulp.dest('dist/assets/js'));
});

gulp.task('json', function() {
  return gulp.src('src/js/**/*.*')
        .pipe(gulp.dest('dist/assets/js'));
});

gulp.task('img', function() {
  return gulp.src('src/images/**/*.*')
        .pipe(gulp.dest('dist/assets/img'));
});

gulp.task('default',['sass','nunjucks','bootstrap','jquery','tether', 'json', 'img']);