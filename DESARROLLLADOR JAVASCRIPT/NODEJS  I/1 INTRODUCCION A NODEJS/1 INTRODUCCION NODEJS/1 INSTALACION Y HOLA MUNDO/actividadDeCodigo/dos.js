var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
     response.writeHead(200, {'Content-Type':'text/plain'});
     var params = url.parse(request.url, true).query;
     var numeroUno = parseInt(params.numeroUno);
     var numeroDos = parseInt(params.numeroDos);

     var suma = numeroUno+numeroDos;
     var resta = numeroUno-numeroDos;
     var multiplicacion = numeroUno*numeroDos;

     response.write("El primer numero es : "+numeroUno+"\n");
     response.write("El segundo numero es : "+numeroDos+"\n\n\n");

     response.write("La suma es : "+suma+"\n");
     response.write("La resta es : "+resta+"\n");
     response.write("La multiplicacion es : "+multiplicacion+"\n");

    response.end();
}).listen(5000);
console.log("Servidor corriendo en el puerto 5000");