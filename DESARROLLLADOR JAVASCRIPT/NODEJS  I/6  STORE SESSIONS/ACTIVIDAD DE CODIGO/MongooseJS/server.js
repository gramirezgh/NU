var express = require('express'),
	app = express(),
	server = require('http').createServer(app);

//Logger de peticiones http
var logger = require('morgan');
//Parsea las cookies y pobla el objeto req.cookies con un objeto de llaves, que tiene el nombre de la cookie
var cookieParser = require('cookie-parser');
//Parsea el cuerpo de las peticiones y respuestas http
var bodyParser = require('body-parser');

var methodOverride = require('method-override');

var path = require('path');
var fs = require('fs');
var _ = require('lodash');

//Requerimos Swig
var swig = require('swig');

//Con esto le decimos a express, que motor de template utilizar, a lo que asignamos Swig.
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

//En desarrollo deshabilitamos el cacheo de templates, pero en un entorno de desarrollo es esencial, para el optimo rendimiento.
//Leccion 4
app.set('view cache', false);
swig.setDefaults({ cache: false });

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}))
app.use(express.static(path.join(__dirname, 'public')));


//Creamos nuestro propio filtro
//Leccion 4
swig.setFilter('uniqObject', function(input, f){
	return _.uniq(input, f);
});

var routes = require('./routes/routes');
routes(app);

var port = Number(process.env.PORT || 3000);

server.listen(port, function(){
	console.log('Servidor corriendo en: '+port);
});