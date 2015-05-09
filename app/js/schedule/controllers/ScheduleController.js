"use strict";
angular.module("mopfest2015")
.controller("ScheduleController", function ($scope, GuestService) {
  $scope.$emit("switchLink", {"nav": "second", "text": "Program"});
  var self = this,
      guests;
  //self.guests = guests;
  self.activeDay = 1;
  GuestService.getGuests().then(data => {
    guests = data;
    self.guests = data.guests;
  });
  self.switchDay = function (day) {
    if(!day){
      day = "";
      self.activeDay = 1;
    }else{
      self.activeDay = day;
    }
    self.guests = guests["guests" + day];
  };
});
