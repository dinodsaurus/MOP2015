"use strict";

describe("Main Conttroller tests", function(){
  var scope,controller;

  beforeEach(module("mopfest2015"));

  describe("List of awesome things", function () {
    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      controller = $controller("MainController", {
        $scope: scope
      });
    }));

    it("should define more than 5 awesome things", inject(function() {
      expect(scope.currentActive).toBeFalsy();
    }));
  });
});
