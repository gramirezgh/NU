'use strict';

var weatherApp = angular.module('weatherApp',[
    'weatherAppControllers'
]).directive('ngWeather',function () {
    return{
        restrict: 'A',
        scope:{
            getCity:'='
        },
        template:'<h1 class="title forecast-font">El clima en : {{getCity.name}}</h1>>'+
                    '<div class="title">'+
                         '<div class="normal-font">'+
                             '<ul class="cast">'+
                                 '<span class="danger-font">Coordenadas</span>'+
                                  '<dl>'+
                                        '<dt>Latitud:</dt>'+
                                        '<dd>{{weather.coord.lat}}</dd>'+
                                        '<dt>Longitud:</dt>'+
                                        '<dt>{{weather.coord.lon}}</dt>'+
                                     '</dl>'+
                                     '<span class="danger-font">Informacion:</span>'+
                                    '<dl>'+
                                        '<dt>Pais:</dt>'+
                                        '<dd>{{weather.sys.country}}</dd>'+
                                    '</dl>'+
                                   '<span class="danger-font">Informacion:</span>'+
                                    '<dl>'+
                                        '<dt>Descripcion:</dt>'+
                                        '<dd>{{weather.weather[0}.description}}</dd>'+
                                    '</dl>'+
                                    '<span class="danger-font">Temperaturas y humedad:</span>'+
                                    '<dl>'+
                                        '<dt>Temperatura Promedio:</dt>'+
                                        '<dd>{{weather.main.temp}}°C</dd>'+
                                        '<dt>Temperatura Maxima:</dt>'+
                                        '<dd>{{weather.main.temp_max}}°C</dd>'+
                                        '<dt>Temperatura Minima:</dt>'+
                                        '<dd>{{weather.main.temp_min}}°C</dd>'+
                                        '<dt>Humedad:</dt>'+
                                        '<dd>{{weather.main.humidity}}°C</dd>'+
                                        '<dt>Presion Atmosferica:</dt>'+
                                        '<dd>{{weather.main.pressure}}°C</dd>'+
                                    '</dl>'+
                                    '<span class="danger-font">Viento:</span>'+
                                    '<dl>'+
                                        '<dt>Vevlocidad:</dt>'+
                                        '<dd>{{weather.wind.speed}}m/s</dd>'+
                                    '</dl>'+
                                '</ul>'+
                        '</div>'+
                   '</div>',

            controller:['$scope','$http','$interval',function ($scope,$http,$interval) {
                var url = "http://api.openweathermap/data/2.5/weather?id="
                $scope.getWeather = function (cityCode) {
                    var lang = '&lang=es';
                    var metric = '&units=metric';
                    var full_url = url + cityCode +lang+ metric;

                    $http.get(full_url)
                        .success(function (data, status, headers, config) {
                            $scope.weather=data;
                        }).error(function (data,status,headers,config) {
                           $scope.weather = "no se encontro el clima.";
                    });
                };
            }],
        link: function (scope, iElement, iAttrs, ctrl) {
            scope.getWeather(scope.getCity.code);
        }

    };
});

