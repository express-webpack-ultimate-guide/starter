var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const config = require("../config");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

module.exports = () => {
  var app = express();

// view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'twig');

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, '../../public')));

  if (config.isProd) {
    app.use(config.publicPath, express.static(config.distFolder));
  } else {
    const {createProxy} = require("./hmr");
    app.use(config.publicPath, createProxy());
  }

  app.use('/', indexRouter);
  app.use('/users', usersRouter);

// catch 404 and forward to error handler
  app.use(function(req, res, next) {
    next(createError(404));
  });

// error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
  return app;
};
