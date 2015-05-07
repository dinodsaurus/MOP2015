"use strict";
angular.module("mopfest2015", [
  "constants",
  "ui.router",
  "templates",
  "sticky",
  "LocalStorageModule",
  "uiGmapgoogle-maps"
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
        templateUrl: "guests/views/guests.html"
       }
    }
  })
  .state("main.location", {
    url: "/location",
    views: {
      "content": {
        controller: "LocationController",
        controllerAs: "location",
        templateUrl: "location/views/location.html"
       }
    }
  })
  .state("main.partners", {
    url: "/partners",
    views: {
      "content": {
        templateUrl: "partners/views/partners.html"
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
