var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');

var index = require('./routes/index');
var about = require('./routes/about');
var action = require('./routes/action');
var issues = require('./routes/issues');
var candidates = require('./routes/candidates');
var signup = require('./routes/signup');
var volsignup = require('./routes/volunteer-signup');
var extra = require('./routes/extra');
var privacypolicy = require('./routes/privacy-policy');
var revredirect = require('./routes/revredirect');
var success = require('./routes/success');
var redirects = require('./routes/redirects');

var app = express();

var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

// view engine setup

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  partialsDir: ['views/partials/'],
  helpers: {
    stringToSlug: function (string) {return string.replace(/\s+/g, '-').toLowerCase();}
  }
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/about', about);
app.use('/action', action);
app.use('/issues', issues);
app.use('/candidates', candidates);
app.use('/signup', signup);
app.use('/volunteer-signup', volsignup);
app.use('/stop-the-tpp', extra);
app.use('/privacy-policy', privacypolicy);
app.use('/act', revredirect);
app.use('/success', success);
app.use('/tpp', redirects);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err,
            title: 'error'
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
        title: 'error'
    });
});


module.exports = app;
