"use strict";

angular.module("mopfest2015")
.controller("MainController", function (localStorageService, $window, $scope) {
  var self = this;
  self.headText = "Digital world<br/> in focus";
  self.color = localStorageService.get("color") || "green";
  self.currentActive = false;
  this.toggleMenu = function () {
    self.menu = !self.menu;
  };
  this.changeColor = function (color) {
    self.color = color;
    localStorageService.set("color", color);
  };
  this.switchLink = function (active) {
    $window.scrollTo(0, 0);
    self.menu = false;
    console.log(active);
    self.currentActive = active;
    self.menuHover = active;
  };
  $scope.$on("switchLink", function (ev, attr) {
    self.headText = attr.text;
    self.currentActive = attr.nav;
    self.menuHover = attr.nav;
    self.headImg = generateImage();
  });

  function generateImage(){
    var rand = Math.floor((Math.random() * 26) + 1);
    return {"background-image": "url(img/cover/cover" + rand + ".png)"};
  }

  self.headImg = generateImage();
});
