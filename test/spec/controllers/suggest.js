'use strict';

describe('Controller: SuggestCtrl', function () {

  // load the controller's module
  beforeEach(module('hackbattle14PartyradioFrontendApp'));

  var SuggestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SuggestCtrl = $controller('SuggestCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
