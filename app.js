var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

require('dotenv').config();

// DATABASE FIRST
require('./app_api/models/db');

// PASSPORT (AFTER MODELS)
var passport = require('passport');
require('./app_api/config/passport');

// ROUTES
var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
var travelRouter = require('./app_server/routes/travel');
var apiRouter = require('./app_api/routes/index');

var hbs = require('hbs');

var app = express();

// CORS
app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// VIEW ENGINE
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(__dirname + '/app_server/views/partials');
app.set('view engine', 'hbs');

// MIDDLEWARE
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// JWT / PASSPORT INIT
app.use(passport.initialize());

// ROUTES
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/travel', travelRouter);
app.use('/api', apiRouter);

// 404
app.use(function(req, res, next) {
  next(createError(404));
});

// ERROR HANDLER
app.use(function(err, req, res, next) {
  console.log("ERROR:", err);

  res.status(err.status || 500);

  if (req.originalUrl.startsWith('/api') || req.headers.accept?.includes('json')) {
    return res.json({
      message: err.message,
      error: err
    });
  }

  res.send(err.message);
});

module.exports = app;