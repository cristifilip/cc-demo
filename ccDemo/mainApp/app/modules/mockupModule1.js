'use strict';

/**
 * @ngdoc function
 * @name mockupModule1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mockupModule1App
 */
angular.module('mockupModule1App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
;'use strict';

/**
 * @ngdoc function
 * @name mockupModule1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mockupModule1App
 */
angular.module('mockupModule1App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
;'use strict';

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
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
