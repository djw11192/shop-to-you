const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
// mongoose.connect('mongodb://localhost/mean-angular5', { promiseLibrary: require('bluebird'), useNewUrlParser: true })
//   .then(() =>  console.log('connection succesful'))
//   .catch((err) => console.error(err));

const home = require('./api/routes/primary-router');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, '/dist')));
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/dist');
app.set('view engine', 'html');
// app.use('/', express.static(path.join(__dirname, 'dist')));
app.use('/', home);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;
