const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const apiRouter = require('./routes/api');
const session = require('express-session')
require("./tools/initialization")();



const app = express();


///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////setting up session////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

app.use(session({
	key: "user_sid",
	secret: "somerandomstuff",
	resave: false,
	saveUninitialized: false,
	cookie: {
		expires: 600000,
	}
}));

app.use(cookieParser());

app.use(function (req, res, next) {
	if (req.cookies.user_sid && !req.session.user) {
		res.clearCookie("user_sid");
	};

	next();
});

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////view engine setup/////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////data base setup///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

// handle mongoose collection.ensureIndex warn
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb://localhost:27017/article-bloger-comments', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});


///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////end points and midlles wares/////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);




// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;