var _ = require('lodash');
var Usuario = require('../models/usuarios');

exports.obtener_usuarios = function (req, res, next){
	
	Usuario.find(function (err, usuarios){
		if (!err) {
			req.usuarios = usuarios;
			next();
		}else{
			console.log(err);
			res.status(500).send("Algo malo ha ocurrido!");
		}


	});

};

exports.get_usuario_by_id = function(req, res, next){
	Usuario.findOne({_id : req.params.id})
	.exec(function(err, usuario){

		if (!err) {
			if (usuario) {
				req.usuario = usuario;
				next();
			}else{
				res.send("Usuario no existe.");
			}
		}else{
			res.send("Hubo un error: "+err);
		}
	});
}

exports.agregar_usuario = function (req, res, next){
	
	var user = new Usuario({
		nombre : req.body.nombre,
		edad : req.body.edad,
		sexo : req.body.sexo,
		email : req.body.email,
		telefono : req.body.telefono
	});

	user.save(function (err, usuario){
		if (!err) {
			res.status(201);
			next();
		}else{
			console.log(err);
			res.status(500).send("Algo malo ha ocurrido!");
		}
	});
};

exports.editar_usuario = function (req, res, next){
	Usuario.findOneAndUpdate(req.params.id,
		{nombre : req.body.nombre,
		edad : req.body.edad,
		sexo : req.body.sexo,
		email : req.body.email,
		telefono : req.body.telefono}
	,function(err, usuario){
		if (!err) {
			if (usuario) {
				next();
			}else{
				res.send("Usuario no existe.");
			}
		}else{
			res.send("Hubo un error: "+err);
		}
	})

};

exports.eliminar_usuario = function (req, res, next){
	Usuario.findByIdAndRemove(req.params.id, function(){
		next();
	});

};

