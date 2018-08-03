var net = require('net');
var server =  net.createServer(function (con) {
    con.on('data',function (chunk) {
        console.log('dato enviado desde cliente'+chunk);
        con.write('repetimos: '+chunk);
    });

    con.on('close', function () {
        console.log('cliente cerro la conexion');
    });

    con.on('error', function (err) {
        console.log('se ah perdido la conexion con el cliente');
    });
}).listen(8000);
console.log("escuchando en el puerto 8000");