'use strict';

/**
 * @ngdoc overview
 * @name mockupModule1App
 * @description
 * # mockupModule1App
 *
 * Main module of the application.
 */
angular
  .module('mockupModule1App', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/start.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/videos.html',
        controller: 'VideosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
