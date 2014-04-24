'use strict';

angular.module('hackbattle14PartyradioFrontendApp')
	.controller('MainCtrl', function ($scope, userService) {
		$scope.username = userService.getUsername();
	});
