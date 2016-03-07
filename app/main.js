;(function(){
	'use strict';

	angular
		.module('ag_blog', [
			'ag_blog.home',
			'ag_blog.users',
			'ui.router',
		])
		.config(configAgBlog)
		.run(runAgBlog);

		function configAgBlog($urlRouterProvider, $provide){
			console.log('ag_blog::config');
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