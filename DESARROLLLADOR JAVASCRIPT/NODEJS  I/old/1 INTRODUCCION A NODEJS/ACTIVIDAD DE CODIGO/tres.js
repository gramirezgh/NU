// Desarrollar una aplicación en Node.js, en el que se realice las operaciones de suma,
// resta y multiplicación de los números que se envían por parámetros en una URL.
//

var http = require('http');
var url = require('url');

http.createServer(function (request,response) {
    response.writeHead(200,{'Content-Type':'text/plain'});
    var params = url.parse(request.url,true).query;
    var num1 = parseInt(params.num1);
    var num2 = parseInt(params.num2);

    var suma = num1+num2;
    var resta = num1-num2;
    var multiplicacion = num1*num2;
    var division = num1/num2;

    response.write("Suma "+num1+ " + "+num2+" = "+suma+"\n");

    response.write("Resta"+num1 +"-" +num2 +"="+resta+"\n");

    response.write("Multiplicacion"+num1 +"*" +num2 +"="+multiplicacion+"\n");

    response.write("division"+num1 +"/" +num2 +"="+division+"\n");

    response.end();
}).listen(3004, function () {
    console.log("corriendo en puerto http://127.0.0.1:3004/?num1=4&num2=4") ///asignando el valor 4 en variable num1 y num2  directamente
    ////tambien se puede utilizar y asignar los valores en el navegador
    console.log("corriendo en el puerto 3004")
});

