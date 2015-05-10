"use strict";
angular.module("mopfest2015")
.controller("ScheduleController", function ($scope, GuestService, $state, $stateParams,$location, $anchorScroll, $timeout) {
  $scope.$emit("switchLink", {"nav": "second", "text": "Program"});
  var self = this,
      guests,
      day = $stateParams.day,
      guest = $stateParams.guest;

  $anchorScroll.yOffset = 115;
  if(day){
    self.activeDay = day;
  }else{
    self.activeDay = 1;
  }

  GuestService.getGuests().then(data => {
    guests = data;
    if(day){
      self.guests = data["guests" + day];
    }else{
      self.guests = data.guests;
    }
    if(guest){
      self.guests.forEach(gu => {
        if(gu.id === parseInt(guest, 10)){
          gu.active = true;
          $timeout(function () {
            $location.hash("guest" + guest);
            $anchorScroll();
          });
        }
      });
    }
  });
  self.activateGuest = function (guest) {
    guest.active = !guest.active;
    console.log(guest);
    $state.go("main.schedule",{ "guest": guest.id, "day": self.activeDay }, {notify: false});
  };
  self.switchDay = function (day) {
    if(!day){
      day = "";
      self.activeDay = 1;
    }else{
      self.activeDay = day;
    }
    self.guests = guests["guests" + day];
    $state.go("main.schedule",{ "day": day, "guest": "" }, {notify: false});
  };
});
