"use strict";
angular.module("mopfest2015")
.directive("stackList", function() {
  return {
    restrict: "A",
    template: "<ul><li ng-repeat='tech in technologies'>{{tech}}</li></ul>",
    controller: function($scope, $log) {
      $scope.technologies = ["Angular", "SASS", "Modernizer", "Gulp"];
    }
  };
});
