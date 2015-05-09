"use strict";

angular.module("mopfest2015")
.controller("GuestsController", function ($scope) {
  $scope.$emit("switchLink", {"nav": "third", "text": "Gosti"});

});
