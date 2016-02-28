;(function(){
	'use strict';

	angular.module('ag_blog.users', [
		'ui.router',
	])
	.controller('UsersCtrl', usersController)
	.config(configUsers)

	function usersController($scope) {
		console.log('ng5::UsersCtrl $scope=', $scope);
		var s = this;

		s.users = [{
			name: 'Artem',
			age: 25
		}];
	}

	function configUsers($stateProvider) {
		$stateProvider
			.state('Users', {
				url: '/users',
				templateUrl: 'users/index.html',
				controller: 'UsersCtrl',
				controllerAs: 'uc'
			});
	}
})();