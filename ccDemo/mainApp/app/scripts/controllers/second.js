'use strict';

/**
 * @ngdoc function
 * @name mainAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mainAppApp
 */
angular.module('mainAppApp')
  .controller('SecondCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
