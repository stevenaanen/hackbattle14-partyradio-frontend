'use strict';

angular.module('hackbattle14PartyradioFrontendApp')
  .controller('SuggestCtrl', function ($scope, $http) {

	$scope.$watch('suggestion', function(newValue, oldValue) {
		if (newValue !== '' && newValue !== oldValue) {
			$http.jsonp('http://api.deezer.com/search?q=' + encodeURIComponent(newValue) + '&limit=6&&output=jsonp&callback=JSON_CALLBACK').success(function(data) {
				console.log(data);
			    $scope.autocomplete = data.data
			});

		}

	});
  });
