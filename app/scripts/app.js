'use strict';

var APP_VERSION = 'v0.0.1';
var API_VERSION = 'v0.0.0';
var NG_VERSION = angular.version.full + ' (' + angular.version.codeName + ')';

angular
	.module('hackbattle14PartyradioFrontendApp', [
		'ngRoute'
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/main', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/join', {
				templateUrl: 'views/join.html',
				controller: 'JoinCtrl'
			})
			.otherwise({
				redirectTo: '/join'
			});
	})
	.run(function($rootScope) {
		$rootScope.API_VERSION = API_VERSION;
		$rootScope.APP_VERSION = APP_VERSION;
	});
