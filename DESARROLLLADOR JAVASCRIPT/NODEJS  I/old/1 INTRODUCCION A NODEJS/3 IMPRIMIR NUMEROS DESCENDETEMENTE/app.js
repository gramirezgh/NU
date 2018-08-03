var http = require('http');
var url = require('url');

http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    var params = url.parse(request.url,true).query;
    var numero = params.numero;
    response.write("descendiendo"+numero+"a 0: \n");

    var descendenteAsync = function(number, callback){
        for (var i=number; i>=0;i--){
            callback(i);
        }
    }
    descendenteAsync(numero, function (i) {
        response.write("-"+i+"\n");
    });
    response.end();
}).listen(3001);
console.log("Servidor Corriendo")