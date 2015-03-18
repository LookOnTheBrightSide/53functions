var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	minifyCss = require('gulp-minify-css'),
	minifyHTML = require('gulp-minify-html'),
    qunit = require('gulp-qunit');


gulp.task('minify-css',function(){
	return gulp.src('./public/*.css')
	.pipe(minifyCss({keepBreaks:true}))
	.pipe(gulp.dest('minifiedCss'));
});

gulp.task('minijs',function(){
	gulp.src('*.js').pipe(uglify()).pipe(gulp.dest('minJs'));
});

gulp.task('minify-html', function() {
  var opts = {
    conditionals: true,
    spare:true
  };
 
  return gulp.src('./public/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('minifiedHtml'));
});







gulp.task('test', function() {
    return gulp
    	.src('./indexQUnit.html')
        .pipe(qunit());
});