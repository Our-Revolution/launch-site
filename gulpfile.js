var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload'),
  sass = require('gulp-ruby-sass'),
  imagemin = require('gulp-imagemin'),
  autoprefixer = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
  return sass('./public/css/style.scss', {sourcemap: true})
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({
        browsers: ['last 2 versions','iOS 7', 'iOS 8', 'ie 9-11'],
        cascade: false
    }))
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

gulp.task('images', () =>
    gulp.src('./public/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./public/img'))
);

gulp.task('watch', function() {
  gulp.watch('./public/css/**/*.scss', ['sass']);
});

gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'bin/www',
    ext: 'js handlebars coffee',
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', function (chunk) {
      if(/^Express server listening on port/.test(chunk)){
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('default', [
  'sass',
  'develop',
  'watch'
]);
