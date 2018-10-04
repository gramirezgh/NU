var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type':'text/plain'});
    var params = url.parse(request.url, true).query;
    var numero = parseInt(params.numero);
    response.write("Ascendiendo : "+numero+" a 100 \n");

    for (var i=numero; i<=100; i+=5){
        numero += 5;
        console.log("el valor del i en el for es :" +i)
        console.log("el valor del numero en el for es :" +numero)
        response.write("-"+i+"\n");
    }
    response.end();
}).listen(5000);
console.log("Servidor ejecutandose en el puerto 5000");