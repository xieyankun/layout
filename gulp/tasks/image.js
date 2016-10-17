var gulp = require('gulp');
var config = require('../config').images;

gulp.task('image', function(){
	return gulp.src(config.src)
		.pipe(gulp.dest(config.dest))
})
