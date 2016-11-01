var gulp = require('gulp');
var sass = require('gulp-sass');
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('pages', function() {
  // Gets .html and .nunjucks files in pages
  gulp.src('src/pages/**/*.html')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['src/templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('dist/pages'))
});


gulp.task('js', function () {
  gulp.src('bower_components/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('dist/js'));
  gulp.src('bower_components/materialize/dist/js/materialize.min.js')
    .pipe(gulp.dest('dist/js'));
  gulp.src('src/js/ui.js').pipe(gulp.dest('dist/js'));
});


gulp.task('css', ['fonts'], function () {
  gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('fonts', function () {
  gulp.src('bower_components/materialize/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('default', ['js', 'css', 'pages']);