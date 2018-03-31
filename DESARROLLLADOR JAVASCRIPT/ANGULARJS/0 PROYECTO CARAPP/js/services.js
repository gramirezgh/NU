'use strict';

/* Services */
/* Se aplica el uso de servicios*/
var carAppServices = angular.module('carAppServices',['ngResource']);

//Se declara el servicio Car! con una sola propiedad
carAppServices.factory('Car',['$resource',
    function ($resource) {
        return $resource('cars/:carId.json',{},{
           query:{method:'GET',params:{carId:'cars'},isArray:true}
        });
}]);