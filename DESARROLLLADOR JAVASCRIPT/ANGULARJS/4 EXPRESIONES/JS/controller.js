'use strict';
var smartExpressionApp = angular.module('oneTimeAppController',[]);
smartExpressionApp.controller('singleBindController',function ($scope) {
    var counter = 0;
    $scope.names = [
        {
            name : 'favio'
        },
        {
            name : 'jhoel'
        },
        {
            name : 'raul'
        },
        {
            name : 'kail'
        },
        {
            name : 'mauricio'
        }
    ];

    $scope.nextName = function (clickEvent) {
        $scope.name = $scope.names[counter % $scope.names.length].name;
        counter++;
    };

});

