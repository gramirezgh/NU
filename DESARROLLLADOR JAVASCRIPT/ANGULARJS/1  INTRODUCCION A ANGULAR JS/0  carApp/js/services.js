'use strict';

var carAppServices = angular.module('carAppServices', []);

carAppServices.factory('carroDetalle',[
    function () {
        return {
            notify: function (msg) {
                alert(msg);
            },
            getCars: function () {
                var cars = [{
                      "name": "NEW QASHAQUI",
                      "snippet": "MADE WHIT YOU IN MIND TO GIVE YOU THE HIGHEST QUALITY"
                    },
                    {
                        "name": "Veloster",
                        "snippet": "SPORTY LIKE A COUPE ROOMY LIKE A JEDAN"
                    },
                    {
                        "name": "Navara",
                        "snippet": "The Navara is all about freedom including fredom of choice"
                    }];
                return cars;
            },
            getCarroDetalle: function () {
                 var carroDetalle = [{
                     "nombreV": "Toyota Serrano",
                     "modelo": "44FFGGK",
                     "descripcion":"Para todo terreno",
                     "idUnico":"1"
                 },
                 {
                     "nombreV": "Toyota Montero",
                     "modelo": "454578JJ",
                     "descripcion":"4X4",
                     "idUnico":2
                 }
                 ];
                 return carroDetalle;
            }
            // },
            // getCarsDetail: function () {
            //     var carsDetail = [{
            //        "nombreV":"Toyoya Serrano",
            //        "modelo":"44F85A",
            //        "descripcion":"Para todo terreno 4X4",
            //        "idUnico":1
            //     }];
            //     return carsDetail;
            // }
        }
    }]);
