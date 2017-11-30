'use strict';
var carAppControllers = angular.module('carAppControllers', []);

carAppControllers.controller('CarListCtrl'['$scope','Car','carroDetalle',
    function ($scope, Car, carroDetalle) {
        // alert("Bienvenido a nuestra aplicacion de carros");
        $scope.cars = Car.getCars();
        $scope.carroDetalle = carroDetalle.getCarroDetalle();
        // $scope.carsDetail = carsDetail.getCarsDetail();
}]);