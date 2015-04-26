"use strict";
angular.module("mopfest2015", [
  "constants",
  "ui.router",
  "templates",
  "sticky",
  "LocalStorageModule"
])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state("main", {
    abstract: true,
    templateUrl: "main/views/main.html"
  })
  .state("main.home", {
    url: "/",
    views: {
      "content": {
        controller: "HomeController",
        templateUrl: "main/views/home.html"
       }
    }
  })
  .state("main.schedule", {
    url: "/schedule",
    views: {
      "content": {
        controller: "ScheduleController",
        controllerAs: "schedule",
        templateUrl: "schedule/views/schedule.html"
       }
    }
  })
  .state("main.guests", {
    url: "/guests",
    views: {
      "content": {
        controller: "ScheduleController",
        controllerAs: "schedule",
        templateUrl: "schedule/views/schedule.html"
       }
    }
  })
  .state("main.location", {
    url: "/location",
    views: {
      "content": {
        controller: "ScheduleController",
        controllerAs: "schedule",
        templateUrl: "schedule/views/schedule.html"
       }
    }
  })
  .state("main.partners", {
    url: "/partners",
    views: {
      "content": {
        controller: "ScheduleController",
        controllerAs: "schedule",
        templateUrl: "schedule/views/schedule.html"
       }
    }
  })
  .state("main.info", {
    url: "/ifo",
    views: {
      "content": {
        controller: "ScheduleController",
        controllerAs: "schedule",
        templateUrl: "schedule/views/schedule.html"
       }
    }
  });

  $urlRouterProvider.otherwise("/");
})
;
