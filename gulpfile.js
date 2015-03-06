var gulp = require('gulp'),
    qunit = require('gulp-qunit');

gulp.task('test', function() {
    return gulp.src('./indexQUnit.html')
        .pipe(qunit());
});

gulp.task('go', function(){

	console.log("oi!");

});