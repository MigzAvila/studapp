var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var fundingRouter = require('./routes/index');
var municipalityRouter = require('./routes/index')
var urRouter = require('./routes/index')
var managementRouter = require('./routes/index')
var schoolRouter = require('./routes/index')

var bRouter = require('./routes/index');
var bfundingRouter = require('./routes/index');
var bmunicipalityRouter = require('./routes/index')
var burRouter = require('./routes/index')
var bmanagementRouter = require('./routes/index')
var bschoolRouter = require('./routes/index')

var aRouter = require('./routes/index');
var pfundingRouter = require('./routes/index');
var pmunicipalityRouter = require('./routes/index')
var purRouter = require('./routes/index')
var pmanagementRouter = require('./routes/index')
var pschoolRouter = require('./routes/index')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);



app.use('/users', usersRouter);

app.use('/funding', fundingRouter);
app.use('/municipality', municipalityRouter);
app.use('/ur', urRouter);
app.use('/management', managementRouter);
app.use('/school', schoolRouter);




app.use('/bfunding', bfundingRouter);
app.use('/bmunicipality', bmunicipalityRouter);
app.use('/bur', burRouter);
app.use('/bmanagement', bmanagementRouter);
app.use('/bschool', bschoolRouter);




app.use('/pfunding', pfundingRouter);
app.use('/pmunicipality', pmunicipalityRouter);
app.use('/pur', purRouter);
app.use('/pmanagement', pmanagementRouter);
app.use('/pschool', pschoolRouter);







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

module.exports = app;
