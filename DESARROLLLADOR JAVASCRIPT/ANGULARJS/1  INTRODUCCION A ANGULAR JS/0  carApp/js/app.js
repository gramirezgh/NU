'use strict';

var carApp = angular.module('carApp', [
    'ngRoute',
    'carAppControllers',
    'carAppServices'
]);

carApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/cars',{
                  templateUrl:'partials/carList.html',
                  controller:'CarListCtrl'
        }).
        when('/cars/:carId',{
            templateUrl:'partials/carDetail.html',
            controller:'carDetailCtrl'
        }).
        otherwise({
            redirectTo:'/cars'
        });
}]);