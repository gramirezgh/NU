var controlador = require('../controllers/controlador');

var routes = function(app){
	app.get('/', function (req, res){
		res.render('index');
	});

	app.get('/usuarios/crear', function (req, res){
		res.render('crear_usuario');
	});

	app.get('/usuarios', controlador.obtener_usuarios, function (req, res){
		res.render('ver_usuario',{
			usuarios : req.usuarios
		});
	});

	app.post('/usuario', controlador.agregar_usuario, function (req, res){
		res.redirect('/usuarios');
	});

	app.get('/editar/usuario/:id', controlador.get_usuario_by_id, function (req, res){
		res.render('editar_usuario', {
			usuario : req.usuario
		});
	});

	app.put('/editar/usuario/:id', controlador.editar_usuario, function (req, res){
		res.redirect('/usuarios');
	});

	app.delete('/eliminar/usuario/:id', controlador.eliminar_usuario, function (req, res){
		res.redirect('/usuarios');
	});
};

module.exports = routes;
