'use strict';

var tempApp = angular.module('tempAppcontroller', []);

tempApp.controller('TempController', function ($scope, Temp) {
    $scope.resultInFahrenheit = 0.0;
    $scope.resultInKelvin = 0.0;
    $scope.tempCelcius = 0.0;

    $scope.convertTemperatures = function () {
        $scope.resultInFahrenheit = Temp.celciusToFahrenheit($scope.tempCelcius);
        $scope.resultInKelvin = Temp.celciusToKelvin($scope.tempCelcius);
    }
});