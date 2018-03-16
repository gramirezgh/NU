'use strict';

var carAppControllers = angular.module('carAppControllers',[]);

carAppControllers.controller('carListCtrl',['$scope','Car',
    function ($scope, Car) {
       // $http.get('cars/cars.json').success(function (data) {
       $scope.cars = Car.query();
       $scope.orderProp = 'model';
}]);

carAppControllers.controller('CarDetailCtrl',['$scope', '$routeParams', 'Car',
    function ($scope, $routeParams, Car) {
       $scope.car = Car.get({carId:$routeParams.carId}, function (car) {
           $scope.mainImageUrl = car.images[0];
       });
       $scope.setImage=function (imageUrl) {
           $scope.mainImageUrl = imageUrl;
       }
}]);