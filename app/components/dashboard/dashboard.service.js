angular.module('dummyApp')
.factory('DashboardService', ['$http', '$q', function($http, $q) {
    var DashboardService = {};

    DashboardService.getMoviesList = function() {
        var deferred = $q.defer();
        $http.get('/api/movie/list')
        .then(function (response) {
            deferred.resolve(response.data);
        }, function (response) {
            deferred.reject("Error");
        })
        return deferred.promise;
    }

    return DashboardService;
}])