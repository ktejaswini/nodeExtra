'use strict';

var storeApp = angular.module('storeApp', [
  'ngRoute',
  'clientCtrl',
  'ngResource'
]);

storeApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider.
      when('/store', {
        templateUrl: 'views/index.html',
        controller: 'indexCtrl'
      }).
      when('/store/cars', {
        templateUrl: 'views/cars.html',
        controller: 'carsCtrl'
      }).
      when('/store/cars/:carid', {
        templateUrl: 'views/carsDetail.html',
        controller: 'carsDetailCtrl'
      }).
      when('/store/routers',{
        templateUrl: 'views/routers.html',
        controller: 'routersCtrl'
      }).
      when('/store/routers/:routerid',{
        templateUrl: 'views/routersDetail.html',
        controller: 'routersDetailCtrl'
      }).
      when('/store/tv',{
        templateUrl: 'views/tv.html',
        controller: 'tvCtrl'
      }).
      when('/store/tv/:tvid',{
        templateUrl: 'views/tvDetail.html',
        controller: 'tvDetailCtrl'
      }).
      otherwise({
        redirectTo: '/store'
      });

      $locationProvider.html5Mode(true);

  });