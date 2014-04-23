'use strict';

var APP_VERSION = 'v0.0.1';
var API_VERSION = 'v0.0.0';

angular
  .module('hackbattle14PartyradioFrontendApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope) {
    $rootScope.API_VERSION = API_VERSION;
    $rootScope.APP_VERSION = APP_VERSION;
  });
