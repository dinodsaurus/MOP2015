"use strict";
angular.module("mopfest2015")
.factory("SoundService", function(localStorageService) {
  var SoundService = {};
  var sound = localStorageService.get("sound");
  SoundService.toggleSound = function (s) {
    sound = s;
    if(!s){
      localStorageService.set("sound", "");
    }else{
      localStorageService.set("sound", s);
    }
  };

  SoundService.playSound = function () {
    //var num = Math.floor((Math.random() * 3) + 1);
    if(sound){
      var audio = new Audio("audio/1.mp3");
      audio.play();
    }
  };

  SoundService.headSound = function () {
    if(sound){
      var audio = new Audio("audio/4.mp3");
      audio.play();
    }
  };

  return SoundService;
});
