'use strict';

/**
 * @ngdoc function
 * @name mockupModule1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mockupModule1App
 */
angular.module('mockupModule1App')
  .controller('VideosCtrl', ["$scope", "YoutubeService", function ($scope, YoutubeService) {
        YoutubeService.getVideos().then(function(data) {
            $scope.videos = data.data;
        });

  }]);
