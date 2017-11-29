'use strict';

var tempApp = angular.module("tempAppcontroller", []);

tempApp.controller('TempController', function (Temp, $scope) {
    $scope.resultInFahrenheit = 0.0;
    $scope.resultInKelvin = 0.0;
    $scope.tempCelcius = 0.0;

    $scope.convertTemperatures = function () {
        $scope.resultInFahrenheit = Temp.celcelciusToFahrenheit($scope.tempCelcius);
        $scope.resultInKelvin = Temp.celcelciusToKelvin($scope.tempCelcius);
    }
});