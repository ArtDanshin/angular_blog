;(function(){
	'use strict';

	angular
		.module('ag_blog', [])
		.config(function(){
			console.log('ag_blog::config');
		})
		.run(function(){
			console.log('ag_blog::run');
		})
		.controller('MainCtrl', ['$scope', function ($scope) {
			console.log('ng5::MainCtrl $scope=', $scope);
			$scope.message = 'Привет';
			this.message = 'Привет от this!';
		}])
})();