;(function(){
	'use strict';

	angular.module('ag_blog.home', [
		'ui.router',
	])
	.config(configHome)
	.controller('HomeCtrl', homeController)
	.constant('SOME_VAL', 'Некоторе значение')

	function homeController($scope, SOME_VAL){
		var s = this;
		s.pageName = 'home';
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