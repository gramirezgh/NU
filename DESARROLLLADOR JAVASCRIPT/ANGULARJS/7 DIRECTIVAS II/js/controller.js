'use strict';

var weatherApp = angular.module('weatherAppControllers',[]);

weatherApp.controller('forecastController',[function ($scope) {
    $scope.cities = [
        {
            code:'3687238',
            name:'Cartaagena'
        },
        {
            code:'3688689',
            name:'Bogota'
        },
        {
            code:'3674962',
            name:'Medellin'
        },
        {
            code:'5128581',
            name:'New York'
        },
        {
            code:'6094817',
            name:'Otawa'
        },
        {
            code:'3911925',
            name:'La Paz'
        },
        {
            code:'2634715',
            name:'Washington'
        },
        {
            code:'4164138',
            name:'Miami'
        }
    ]
}]);