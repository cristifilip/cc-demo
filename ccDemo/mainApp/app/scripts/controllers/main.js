'use strict';

/**
 * @ngdoc function
 * @name mainAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mainAppApp
 */
angular.module('mainAppApp')
  .controller('ThirdCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
