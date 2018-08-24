var createError = require('http-errors');
var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var passportSetup = require('./config/passport-setup');
var logger = require('morgan');
var mongoose = require('mongoose');
var cookieSession = require('cookie-session');
var keys = require('./config/keys');
var router = require('./routes/routes');
var authRouter = require('./routes/auth.routes');
var dashboardRouter = require('./routes/dashboard.routes');

var app = express();

// Cookies
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000, //One day converted from miliseconds
  keys: [keys.session.cookieKey]
}))

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main',
}));
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);
app.use('/auth', authRouter);
app.use('/dashboard', dashboardRouter);

// catch 404 and forward to error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Connect to MongoDB
mongoose.connect(keys.mongodb.dbURI, {
  useNewUrlParser: true
}, () => {
  console.log('Connected to DB!');
});

module.exports = app;