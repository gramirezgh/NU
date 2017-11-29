'use strict';
var realTemApp = angular.module('realTempAppServices',[]);

realTemApp.factory('Temp',function () {
    return {
        celciusToFahrenheit: function (temp) {
            var tempInFahrenheit = 0.0;
            var tempInCelsius = temp;

            tempInFahrenheit = tempInCelsius * 9 / 5 + 32;
            return tempInFahrenheit;
        },
            celciusToKelvin: function (temp){
                var tempInKelvin = 0.0;
                var tempInFahrenheit = temp;

                tempInKelvin = tempInCelcius -273.15;
                return tempInKelvin;
            
        }
    }
});