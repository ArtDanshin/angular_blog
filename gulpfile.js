'use strict'

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	scss = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	plumber = require('gulp-plumber'),
	ngAnnotate = require('gulp-ng-annotate'),
	webserver = require('gulp-webserver');

gulp.task('libsjs', function(){
	gulp.src([
		'app/bower/angular/angular.js',
		'app/bower/angular-ui-router/release/angular-ui-router.js',
		'app/bower/firebase/firebase.js',
		'app/bower/angularfire/dist/angularfire.js'
		])
	.pipe(concat('libs.js'))
	.pipe(gulp.dest('builds/dev'))
});

gulp.task('js', function(){
	gulp.src([
		'app/*.js',
		'app/dbc/**/*.js',
		'app/home/**/*.js',
		'app/users/**/*.js'
	])
	.pipe(plumber())
	.pipe(ngAnnotate())
	// .pipe(uglify())
	.pipe(concat('app.js'))
	.pipe(gulp.dest('builds/dev'));
});

gulp.task('css', function(){
	gulp.src([
		'app/bower/angular/angular-csp.css',
		'app/bower/bootstrap/dist/css/bootstrap.css'
	])
	.pipe(concat('theme.css'))
	.pipe(gulp.dest('builds/dev'));
});

gulp.task('scss', function(){
	gulp.src([
		'app/*.scss',
		'app/home/**/*.scss',
		'app/users/**/*.scss'
	])
	.pipe(plumber())
	.pipe(scss())
	.pipe(concat('app.css'))
	.pipe(gulp.dest('builds/dev'));
});

gulp.task('watch', function(){
	gulp.watch('app/*.js', ['js']);
	gulp.watch('app/dbc/*.js', ['js']);
	gulp.watch('app/users/*.js', ['js']);
	gulp.watch('app/home/*.js', ['js']);
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