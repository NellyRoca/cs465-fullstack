var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
// Using cors to allow Localhost:4200 to use 3000

var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
var travelRouter = require('./app_server/routes/travel');
var apiRouter = require('./app_api/routes/index');

var hbs = require('hbs');

// Add Database
require('./app_api/models/db');

var app = express();

// ENABLE CORS
app.use(cors({
  origin: 'http://localhost:4200'
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));

//register handlebars partials (https://ww.npmjs.com/package.hbs)
hbs.registerPartials(__dirname + '/app_server/views/partials');

app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/travel', travelRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler - UPDATED, Error with Postman, this corrects it
app.use(function(err, req, res, next) {
  console.log("ERROR:", err);

  res.status(err.status || 500);

  // Force API response if route starts with /api OR accepts json
  if (req.originalUrl.startsWith('/api') || req.headers.accept?.includes('json')) {
    return res.json({
      message: err.message,
      error: err
    });
  }

  return res.send(err.message);
});

module.exports = app;