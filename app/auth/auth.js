;(function(){
	'use strict';

	angular.module('ag_blog.auth', [
		'ag_blog.dbc'
	])
	.factory('auth', authFactory)
	.controller('AuthCtrl', AuthController)
	.config(authConfig)

	function AuthController($log) {
		var s = this;
		$log.log('ag_blog::auth::AuthCtrl');
		
		s.signinUser = {
			email: null,
			password: null
		};

		s.signupUser = {
			fullName: null,
			email: null,
			password: null
		};

		s.signin = function(){

		}

		s.signup = function(){

		}
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
			.state('auth.signin', {
				templateUrl: 'auth/signin.html',
				url: '/signin'
			})
			.state('auth.signup', {
				templateUrl: 'auth/signup.html',
				url: '/signup'
			})
			.state('auth.forgot', {
				templateUrl: 'auth/forgot.html',
				url: '/forgot'
			})
	}
})();