'use strict';
var carAppControllers = angular.module('carAppControllers', []);

carAppControllers.controller('CarListCtrl',['$scope','carroDetalle',
    function ($scope, carroDetalle) {
        // alert("Bienvenido a nuestra aplicacion de carros");
        // $scope.cars = Car.getCars();
        // $http.get('cars/cars.json').success(function(data) {
           $scope.cars = Car.query();
           $scope.orderProp = 'model';
        // });
        // $scope.carroDetalle = carroDetalle.getCarroDetalle();

        // $scope.carsDetail = carsDetail.getCarsDetail();
}]);

carAppControllers.controller('carDetailCtrl',['$scope','$routeParams','Car',function ($scope,$routeParams,Car) {
     $scope.car = Car.get({carId:$routeParams.carId},function(car){
         $scope.mainImageUrl=car.images[0];
     });
     $scope.setImage = function(imageUrl){
         $scope.mainImageUrl=imageUrl;
     }
}]);

