;(function(){
	'use strict';

	angular.module('ag_blog.home', [
		'ui.router',
	])
	.config(configHome)
	.controller('HomeCtrl', homeController)

	function homeController(){

	};

	function configHome($stateProvider){
		$stateProvider
			.state('Home', {
				url: '/',
				templateUrl: 'home/index.html'
			});
	}
})();