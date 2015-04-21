"use strict";
angular.module("mopfest2015", [
  "constants",
  "ui.router",
  "templates"
])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state("home", {
    url: "/",
    templateUrl: "js/main/views/home.html",
    controller: "MainController"
  });

  $urlRouterProvider.otherwise("/");
})
;
