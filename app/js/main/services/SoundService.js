"use strict";
angular.module("mopfest2015")
.factory("SoundService", function() {
  var SoundService = {};

  SoundService.playSound = function () {
    var num = Math.floor((Math.random() * 3) + 1);
    var audio = new Audio("audio/" + num + ".mp3");
    audio.play();
  };

  SoundService.headSound = function () {
    var audio = new Audio("audio/4.mp3");
    audio.play();
  };

  return SoundService;
});
