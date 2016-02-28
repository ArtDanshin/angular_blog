;(function(){
	'use strict';

	angular.module('ag_blog.users', [])
		.controller('MainCtrl', ['$scope', function ($scope) {
			console.log('ng5::MainCtrl $scope=', $scope);
			$scope.message = 'Привет';
			this.message = 'Привет от this!';
		}])
})();