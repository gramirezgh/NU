'use strict';
var carListApp = angular.module('carListAppController',[]);

carListApp.controller('ListController',function ($scope) {
    $scope.appTitle = "CarList App 2014";
    $scope.formHeader = "Agregar un carro a la Lista";
    $scope.deleteText = "Elminar";
    $scope.addText = "Agregar";
    $scope.formTextBrand="Marca";
    $scope.formTextYear = "Año";

    $scope.brand;
    $scope.year;

    $scope.cars = [
        {
            brand : 'BMW 4QT',
            year : '2014'
        },
        {
            brand : 'CHEVROLET CORVETTE',
            year : '2010'
        },
        {
            brand : 'BMW 4QT',
            year : '2014'
        },
        {
            brand : 'Ford Mustang',
            year : '2011'
        },
        {
            brand : 'Mac Laren',
            year : '2010'
        },
        {
            brand : 'chevrolet camaro',
            year : '2011'
        },
        {
            brand : 'chevrolet corvette',
            year : '2013'
        },
        {
            brand : 'Ferrari California',
            year : '2008'
        }
    ];

    $scope.addCar = function () {
        var car = {brand : $scope.brand,
                   year: $scope.year};
            $scope.cars.push(car);

    };
    $scope.deleteCar = function (idx) {
        $scope.cars.splice(idx,1);
       }

});