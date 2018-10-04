var express = require('express'),
app = express(),
server = require('http').createServer(app);

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');
var fs =require('fs');
var _ = require('lodash');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function (req, res) {
    res.write('hola mundo');
    res.end();
});

app.get('/usuarios',function (req, res) {   //// req = > request  |  res = > response
    var stream = fs.createReadStream(__dirname+'/base_datos.json');  /// createReadStream permite leer el flujo de datos
    stream.setEncoding('utf8');
    stream.pipe(res); /// limita el espacio d ememoria segun lo q se tenga disponible
});

app.post('/usuario', function (req , res) {
    var user = {
        "_id":"54b73e7e14f84d59250577c7",
        "age":28,
        "name":"nuevo usuario",
        "gender":"male",
        "email":"carpenterayers@gmail.com",
        "phone":"+1 (933) 527-3679"
    };

    var datos =[];
    var streamR = fs.createReadStream(__dirname+'/base_datos.json');  /// createReadStream permite leer el flujo de datos
    streamR.setEncoding('utf8');

    streamR.on('data', function (chunk) {
        chunk = JSON.parse(chunk);
        chunk.push(user);
        datos = chunk.slice();
    });

    streamR.on('end', function () {
        var streamW = fs.createWriteStream(__dirname+'/base_datos.json');
        streamW.write(JSON.stringify(datos));
        res.send(datos);
    });
});

app.put('/usuario', function (req, res) {
    var id="54b73e7e14f84d59250577c7";
    var datos = [];
    var streamR = fs.createReadStream(__dirname+'/base_datos.json');
    streamR.setEncoding('utf8');
    streamR.on('data', function (chunk) {
        chunk = JSON.parse(chunk);
        var index = _.findIndex(chunk, {'_id':id});
        chunk[index].name = "nombre editado";
        datos = chunk.slice();
    });

    streamR.on('end', function () {
        var streamW = fs.createWriteStream(__dirname+'/base_datos.json');
        streamW.write(JSON.stringify(datos));
        res.send(datos);
    });
});

app.delete('/usuario', function (req, res) {
    var id = "54b73e7e14f84d59250577c7";

    var datos = [];
    var streamR = fs.createReadStream(__dirname+'/base_datos.json')
    streamR.setEncoding('utf8');
    
    streamR.on('data', function (chunk) {
        chunk = JSON.parse(chunk);
        var index = _.findIndex(chunk, {'_id':id});
        console.log(index);
        delete chunk[index];
        datos = _.compact(chunk.slice());
    });

    streamR.on('end', function () {
        var streamW = fs.createWriteStream(__dirname+'/base_datos.json');
        streamW.write(JSON.stringify(datos));
        res.send(datos);
    });
});

var port = Number(process.env.PORT || 3000);
server.listen(port, function () {
   console.log('servidor corriendo en '+ port);
});

