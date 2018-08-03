
var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hola mundo Favio');
}).listen(3000);
console.log("Servidor corriendo en htttp://127.0.0.1:3000");

