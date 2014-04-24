'use strict';

describe('Controller: EchonestCtrl', function () {

  // load the controller's module
  beforeEach(module('hackbattle14PartyradioFrontendApp'));

  var EchonestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EchonestCtrl = $controller('EchonestCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
