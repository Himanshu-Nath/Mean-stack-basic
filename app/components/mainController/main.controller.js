angular.module('dummyApp')
.controller('MainController', ['$state', function($state){
    var vm = this;
    vm.$state = $state;
    return vm;
}])