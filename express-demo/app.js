var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var handlebarsRouter = require('./routes/handlebars-examples');

const bodyParser = require('body-parser')


var app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Deshabilita el response header x-powered-by que Express inicializa con el valor Express
//app.disable('x-powered-by')

// Configurando motor de plantillas, hbs - handlebars
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'hbs');
app.set('view options', { layout: './layouts/main' });


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view cache', true)

app.use('/', indexRouter);
app.use('/handlebars-examples', handlebarsRouter);

// captura los 404 y reenvia al controlador de errores
app.use(function(req, res, next) {
  next(createError(404));
});

// controlador de errores
app.use(function(err, req, res, next) {
  
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // renderizando la vista de error
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
