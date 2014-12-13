'use strict';

var gumballApp = angular.module('gumballApp', [
  'ngRoute',
  'clientCtrl',
  'ngResource'
]);

gumballApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider.
      when('/index', {
        templateUrl: 'views/entry.html',
      }).
      when('/edit', {
        templateUrl: 'views/editMachines.html',
        controller: 'editCtrl'
      }).
      when('/edit/:id', {
        templateUrl: 'views/editMachines.html',
        controller: 'delCtrl'
      }).
      when('/add', {
        templateUrl: 'views/editMachines.html',
        controller: 'addCtrl'
      }).
      when('/select/:id', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
      }).
      when('/select', {
        templateUrl: 'views/selectMachine.html',
        controller: 'selectCtrl'
      }).
      when('/insert/:id', {
        templateUrl: 'views/main.html',
        controller: 'insertCtrl'
      }).
      when('/turn/:id', {
        templateUrl: 'views/main.html',
        controller: 'turnCtrl'
      }).
      otherwise({
        redirectTo: '/index'
      });

      $locationProvider.html5Mode(true);

  });