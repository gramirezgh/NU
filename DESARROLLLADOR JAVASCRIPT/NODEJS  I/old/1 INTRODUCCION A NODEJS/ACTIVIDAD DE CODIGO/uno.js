// Realizar el proceso de instalación de Node.js para su sistema operativo.

// Después de la instalación, desarrollar una aplicación haciendo uso de Node.js, en la que
// se visualice la frase "Hola Mundo!". Ésta frase deberá ser mostrada en la consola de
// comandos y en el navegador. La siguiente imagen es una muestra de la aplicación:

var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end("HOLA DESDE NODE JS FAVIOOOOOOOO!!!!!");
}).listen(3000);
console.log("corriendo en http://127.0.0.1:3000");
