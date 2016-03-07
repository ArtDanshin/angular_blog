;(function(){
	'use strict';

	angular.module('ag_blog.users', [
		'ui.router',
	])
	.controller('UsersCtrl', usersController)
	.config(configUsers)

	function usersController($scope, $log, SOME_VAL) {
		$log.log('ng5::UsersCtrl $scope=', $scope);
		var s = this;

		$log.log('Some_Val = ', SOME_VAL);

		s.users = [{
			name: 'Artem',
			age: 25
		}];

		s.addUser = function(_user){
			s.users.push(_user);
		};

		s.remUser = function(_index){
			s.users.splice(_index,1);
		}
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