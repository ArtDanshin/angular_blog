;(function(){
	'use strict';

	angular.module('ag_blog.users', [
		'ui.router',
	])
	.controller('MainCtrl', mainController)
	.config(configUsers)

	function mainController($scope) {
		console.log('ng5::MainCtrl $scope=', $scope);
		$scope.message = 'Привет';
		this.message = 'Привет от this!';
	}

	function configUsers($stateProvider) {
		$stateProvider
			.state('Users', {
				url: '/users',
				templateUrl: 'users/index.html'
			});
	}
})();