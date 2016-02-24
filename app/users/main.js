;(function(){
	'use strict';

	var app = angular.module('ag_blog', []);

	app.config(function(){
		console.log('ag_blog::config');
	});

	app.run(function(){
		console.log('ag_blog::run');
	})

	app.controller('MainCtrl', ['$scope', function ($scope) {
		console.log('ng5::MainCtrl');
	}])
})();