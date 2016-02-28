;(function(){
	'use strict';

	angular
		.module('ag_blog', ['ag_blog.users'])
		.config(function(){
			console.log('ag_blog::config');
		})
		.run(function(){
			console.log('ag_blog::run');
		})
})();