
var express      = require('express');
var app          = express();
var path         = require('path');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var mongoose     = require('mongoose');
var servCtrl     = require('./server/controllers/servCtrl');

app.use(express.static(path.join(__dirname, '/client')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydb');


//API Calls
app.get('/store/carsData', servCtrl.carsData);
app.get('/store/carsDetail/:carid', servCtrl.carsDetail);
app.get('/store/routersData', servCtrl.routersData);
app.get('/store/routersDetail/:routerid', servCtrl.routersDetail);
app.get('/store/tvData', servCtrl.tvData);
app.get('/store/tvDetail/:tvid', servCtrl.tvDetail);

//Catch all requests
app.get('*', function(req, res) {
	res.sendFile(__dirname + '/client/store.html');
});

//Listen on port 3000
app.listen(3000, function() {
    console.log('Node server started....');
})
