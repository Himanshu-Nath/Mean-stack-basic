angular.module('dummyApp')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
    .state('dashboard', {
        url: '/dashboard',
        controller: 'DashboardController',
        controllerAs: 'DCtrl',
        templateUrl: 'app/components/dashboard/dashboard.view.html'
    })
}])