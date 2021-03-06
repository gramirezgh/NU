'use strict';
 var carApp  = angular.module('carApp',[
    'ngRoute',
    'ngAnimate',
    'carAppAnimations',
    'carAppControllers',
    'carAppServices'


 ]);

 carApp.config(['$routeProvider',
    function ($routeProvider) {
       $routeProvider.when('/cars',{
           templateUrl : 'partial/car-list.html',
           controller:'carListCtrl'
       }).when('/cars/:carId',{
           templateUrl: 'partial/car-detail.html',
           controller:'CarDetailCtrl'
       }).
       otherwise({
          redirectTo: '/cars'
       });
    }]);