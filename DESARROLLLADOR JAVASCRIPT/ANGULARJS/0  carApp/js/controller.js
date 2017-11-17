'use strict';
var carAppControllers = angular.module('carAppControllers', []);

carAppControllers.controller('CarListCtrl', ['$scope',
    function ($scope, Car) {
        // alert("Bienvenido a nuestra aplicacion de carros");
        $scope.cars = [{
            "name":"NEW QASHQAI",
            "snippet": "MADE WHIT YOU IN MIND TO GIVE YOU THE HIGJEST QUIALITY"
        },
        {
             "name":"veloster",
             "snippet":"SPORTY LIKE A COUPE. ROMMY LIKE A SEDAM."
        },
        {
            "name":"Navara",
            "snippet":"THE NAVARA IS ALL ABOUT FREEDOM INCLUDING FREEDOM OF CHOICE."
        }];
}]);