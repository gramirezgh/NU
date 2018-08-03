var net= require('net');
var client=net.connect({port:8000},function () {
    client.setEncoding('utf8');
    console.log('conectados');
    client.write('hola servidor');
});

process.stdin.resume();
process.stdin.on('data',function (chunk) {
    client.write(chunk);
});

client.on('data', function (chunk) {
     console.log(chunk);
});

client.on('close', function () {
   console.log('se cerro la conexion ');
});

client.on('error',function (err) {
    console.log('se ah perdido la conexion con el servidor')
})