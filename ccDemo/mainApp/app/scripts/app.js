'use strict';

/**
 * @ngdoc overview
 * @name mainAppApp
 * @description
 * # mainAppApp
 *
 * Main module of the application.
 */
angular
  .module('mainAppApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'mockupModule1App',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/start.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/videos.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
