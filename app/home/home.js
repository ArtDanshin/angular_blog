;(function(){
	'use strict';

	angular.module('ag_blog.home', [
		'ui.router',
	])
	.config(configHome)
	.controller('HomeCtrl', homeController)
	.constant('SOME_VAL', 'Некоторе значение')
	.service('home_service', homeService)
	.factory('home_factory', homeFactory)
	.provider('home_prov', homeProvider)

	function homeProvider() {
		// Configure private data
		var privateVal = 'Значение 1';

		return {
			setPrivate: function(_newVal){
				privateVal = _newVal;
			},
			$get: function(){
				function getPrivate() {
					return privateVal;
				}
				return {
					publicVal: 'Публичная переменная',
					getPrivate: getPrivate
				}
			}
		}
	}

	function homeFactory($log){
		$log.debug('homeService init');
	};

	function homeService($log){
		$log.debug('homeService init');

		var count = 0;

		this.add = function(){
			count++;
			return count;
		}

		this.rem = function(){
			count--;
			return count;
		}
	};

	function homeController($scope, $log, SOME_VAL, home_service, home_prov){
		var s = this;
		s.pageName = 'home';

		// $log.debug('home_service add', home_service.add(), home_service.add());
		// $log.debug('home_service add', home_service.rem());
		$log.debug('home_prov getProvider ', home_prov.getPrivate());
	};

	function configHome($stateProvider){
		$stateProvider
			.state('Home', {
				url: '/',
				templateUrl: 'home/index.html',
				controller: 'HomeCtrl',
				controllerAs: 'hc'
			});
	}
})();