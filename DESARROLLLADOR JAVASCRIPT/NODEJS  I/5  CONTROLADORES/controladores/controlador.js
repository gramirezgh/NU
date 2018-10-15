var path = require('path');
var fs = require('fs');
var _ = require('lodash');
var ObjectId = require('objectid');

exports.obtener_usuarios = function (req, res, next) {
    var stream = fs.createReadStream(__dirname+'/../base_datos.json');
    stream.setEncoding('utf8');
    var cuerpo = '';

    stream.on('data', function (chunk) {
       cuerpo += chunk;
    });

    stream.on('end', function () {
        try{
            var data = JSON.parse(cuerpo);
        }catch(err){
            res.statusCode = 400;
            return res.end('error: '+err.message);
        }

        console.log(data);
        req.usuarios = data;
        next();
    });
};

exports.agregar_usuario = function (req, res, next) {
    var user = {
        "_id":new ObjectId(),
        "age":req.body.edad,
        "name":req.body.nombre,
        "gender":req.body.sexo,
        "email":req.body.email,
        "phone":req.body.telefono
    };
    var cuerpo = '';
    var streamR = fs.createReadStream(__dirname+'/../base_datos.json');
    streamR.setEncoding('utf8');

    streamR.on('data', function (chunk) {
        cuerpo+=chunk;
    });

    streamR.on('end', function () {
       try{
           var streamW = fs.createWriteStream(__dirname+'/../base_datos.json');
           var data = JSON.parse(cuerpo);
           data.push(user);
           streamW.write(JSON.stringify(data));
       }catch(err){
           res.statusCode = 400 ;
           return res.end('error : '+err.message);
       }
       next();
    });
};

exports.editar_usuario = function (req, res, next) {
    var id = "54b73e7e306710843c7eeeea";
    var datos = [];
    var streamR = fs.createReadStream(__dirname+'/../base_datos.json');
    streamR.setEncoding('utf8');

    streamR.on('data', function (chunk) {
        chunk =JSON.parse(chunk);
        var index = _.findIndex(chunk, {'_id':id});
        chunk[index].name="nombre editado";
        datos = chunk.slice();
    });

    streamR.on('end', function () {
       var streamW = fs.createWriteStream(__dirname+'/../base_datos.json');
       streamW.write(JSON.stringify(datos));
       res.send(datos);
       next();
    });
};

exports.eliminar_usuario = function (req, res, next) {
    var id = "54b73e7e306710843c7eeeea";
    var datos = [];
    var streamR = fs.createReadStream(__dirname+'/../base_datos.json');
    streamR.setEncoding('utf8');

    streamR.on('data', function (chunk) {
        chunk = JSON.parse(chunk);
        var index = _.findIndex(chunk, {'_id':id});
        console.log(index);
        delete chunk[index];
        datos = _.compact(chunk.slice());
    });
    streamR.on('end', function () {
        var streamW = fs.createWriteStream(__dirname+'/../base_datos.json');
        streamW.write(JSON.stringify(datos));
        res.send(datos);
        next();
    });
};

exports.render_html = function (page, object) {
    return function (req, res) {
        res.render(page, object);
    }
}