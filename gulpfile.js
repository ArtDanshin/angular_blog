'use strict'

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	scss = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	ngAnnotate = require('gulp-ng-annotate'),
	webserver = require('gulp-webserver');

gulp.task('libsjs', function(){
	gulp.src([
		'app/bower/angular/angular.js',
		'app/bower/angular-route/angular-route.js'
		])
	.pipe(concat('libs.js'))
	.pipe(gulp.dest('builds/dev'))
});

gulp.task('js', function(){
	gulp.src([
		'app/home/**/*.js',
		'app/users/**/*.js',
	])
	.pipe(concat('app.js'))
	.pipe(gulp.dest('builds/dev'));
});

gulp.task('css', function(){
	gulp.src([
		'app/bower/angular/angular-csp.css'
	])
	.pipe(concat('theme.css'))
	.pipe(gulp.dest('builds/dev'));
});

gulp.task('scss', function(){
	gulp.src([
		'app/home/**/*.scss',
		'app/users/**/*.scss',
	])
	.pipe(scss())
	.pipe(concat('app.css'))
	.pipe(gulp.dest('builds/dev'));
});

gulp.task('watch', function(){
	gulp.watch('app/**/*.js', ['js']);
	gulp.watch('app/**/*.scss', ['scss']);
});

gulp.task('webserver', function(){
	gulp.src('builds/dev')
	.pipe(webserver({
		livereload: true,
		open: true
	}));
});

gulp.task('default', [
	'libsjs',
	'js',
	'css',
	'scss',
	'watch',
	'webserver'
]);