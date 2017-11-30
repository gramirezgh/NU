'use strict';
var tempApp = angular.module('tempAppServices', []);

tempApp.factory('Temp', function () {
    return {
        celciusToFahrenheit: function (temp) {
            var varFahrenheit = 0.0;
            var varCelcius = temp;

            varFahrenheit = varCelcius * 9 / 5 + 32;
            return varFahrenheit;
        },

        celciusToKelvin: function (temp) {
            var varKelvin = 0.0;
            var varCelcius = temp;

            varKelvin = varCelcius - 273.15;
            return varKelvin;
        }
    }
});





























