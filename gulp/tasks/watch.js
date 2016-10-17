var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config');

gulp.task('watch', function(){
	watch(config.less.all, function(){
		gulp.start('less');
	})
	watch(config.sass.all, function(){
		gulp.start('sass');
	})
})