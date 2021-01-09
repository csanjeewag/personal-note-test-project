var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var fileupload = require('express-fileupload');


var notesRouter = require('./routes/note');

// mongodb connect
var mongoose = require('mongoose');
var dbconfig = require('./config/db');
mongoose.set('useCreateIndex', true);
mongoose.connect(dbconfig.mongodb, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log("Successfully Create Mongodb Connection :) ");
});

var app = express();

// view engine setup
app.use(express.static(__dirname + '/local_store'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileupload());

app.use('/api/v1/note', notesRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(req.app.get('env'));
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
