"use strict";
angular.module("mopfest2015")
.controller("ScheduleController", function ($scope) {
  $scope.$emit("switchLink", {"nav": "second", "text": "Program"});
  var self = this;
  //self.guests = guests;
  console.log(self);
});
