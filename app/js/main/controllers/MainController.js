"use strict";

angular.module("mopfest2015")
.controller("MainController", function ($scope) {
  var self = this;
  self.color = "green";
  self.currentActive = false;
  this.toggleMenu = function () {
    self.menu = !self.menu;
  };
  this.changeColor = function (color) {
    self.color = color;
  };
});
