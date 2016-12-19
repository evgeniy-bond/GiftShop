var gulp = require("gulp");
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var uncss = require('gulp-uncss');
var htmlmin = require('gulp-htmlmin');
var combineMq = require('gulp-combine-mq');


gulp.task('default', function() {
	gulp.src('css/style.css')
	.pipe(autoprefixer({
		browsers: ['last 4 versions'],
		cascade: false
	}))
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(notify("Done!"))
	.pipe(combineMq({
        beautify: true
    }))
	.pipe(gulp.dest('css-final/'));
});


gulp.task('minify-css', function() {
  return gulp.src('css/style.css')
    .pipe(rename('style.min.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css-final/'));
});



