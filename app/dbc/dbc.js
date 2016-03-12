;(function(){
	'use strict';

	angular.module('ag_blog.dbc', [
		'firebase'
	])
	.constant('FURL', 'https://angular-blog-sd.firebaseio.com/')
	.factory('dbc', dbcFactory)

	function dbcFactory(FURL, $firebaseAuth){
		var obj = {};
		var ref = new Firebase(FURL);
		var auth = $firebaseAuth(ref);

		o.getRef = function() {
			return ref;
		}
		o.getAuth = function() {
			return auth;
		}
		o.getAuth = function() {
			return ref.getAuth();
		}

		return obj;
	}
})