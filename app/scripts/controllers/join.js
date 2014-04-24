'use strict';

angular.module('hackbattle14PartyradioFrontendApp')
.controller('JoinCtrl', function ($scope, $window, $location) {

	var SPOTIFY_API_PARAMS = {
		client_id: '276ce81b0ea94785a7412a1a11dbb153',
		redirect_uri: 'http://127.0.0.1:9000/#/join',
		scope: 'user-read-private',
		// scope: 'user-read-private playlist-read-private',
		response_type: 'token'
	};


	// check if already redirected from spotify login
	var token = $location.search.access_token;
	console.log('token: ' + token);
	$scope.authorized = false;
	if (token !== undefined) {
		$scope.authorized = true;
	}


	$scope.authenticate = function() {
		console.log('authenticate to ' +'https://accounts.spotify.com/authorize?' + toQueryString(SPOTIFY_API_PARAMS));
		$window.location.href = 'https://accounts.spotify.com/authorize?' + toQueryString(SPOTIFY_API_PARAMS);
	};


	function toQueryString(obj) {
		var parts = [];
		for (var i in obj) {
			if (obj.hasOwnProperty(i)) {
				parts.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]));
			}
		}
		return parts.join('&');
	}

	});

