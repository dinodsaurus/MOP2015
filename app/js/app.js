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
    templateUrl: "main/views/home.html",
    controller: "HomeController",
    controllerAs: "home"
  });

  $urlRouterProvider.otherwise("/");
})
;
