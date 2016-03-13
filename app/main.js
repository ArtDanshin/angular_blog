;(function(){
	'use strict';

	angular
		.module('ag_blog', [
			'ag_blog.home',
			'ag_blog.users',
			'ag_blog.navbar',
			'ag_blog.auth',
			'ui.router',
		])
		.config(configAgBlog)
		.run(runAgBlog);

		function configAgBlog($logProvider, $urlRouterProvider, $provide){
			$logProvider.debugEnabled(true); // Включение console.log

			$urlRouterProvider.otherwise('/');

			$provide.decorator('$log', function($delegate){
				$delegate.hello = function(_m){
					console.debug('_m', init)
				}

				return $delegate;
			})
		};

		function runAgBlog($rootScope){
			console.log('ag_blog::run=', $rootScope);
		};
})();