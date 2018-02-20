angular.module('dummyApp')
.controller('DashboardController', ['$state', 'appConfig', 'DashboardService', 
function($state, appConfig, DashboardService) {
    var vm = this;

    init();
    function init() {
        getMoviesList();
    }

    function getMoviesList() {
        DashboardService.getMoviesList()
        .then(function (response) {
            console.log(response);
            vm.movies = response.result;
        }, function (error) {
            console.log(error);
        })
    }
}])