;(function(){
	'use strict';

	angular
		.module('ag_blog', [
			'ag_blog.users',
			'ui.router',
		])
		.config(configAgBlog)
		.run(runAgBlog);

		function configAgBlog(){
			console.log('ag_blog::config');
		};

		runAgBlog.$inject = ['$rootScope'];
		function runAgBlog($rootScope){
			console.log('ag_blog::run');
		};
})();