;(function () {
	'use strict';

	angular.module('ag_blog.auth', [
		'ag_blog.dbc'
	])
	.factory('auth', authFactory)
	.controller('AuthCtrl', AuthController)
	.config(authConfig)

	function AuthController($log) {
		var s = this;
		$log.hello('ag_blog::auth::AuthCtrl')
		
	}

	function authFactory(dbc) {
		var obj = {};

		return obj;
	}

	function authConfig($stateProvider) {
		$stateProvider
			.state('auth', {
				templateUrl: 'auth/auth.html',
				url: '/auth',
				controller: 'AuthCtrl',
				controllerAs: 'ac'
			})
	}
})()