angular.module('mockupModule1App')
    .factory("Youtube", ["$http",
    function ($http) {
        return {
            getVideos: function () {
                return $http.get('http://gdata.youtube.com/feeds/api/videos?alt=json');
            }
        }
    }
]);