var express      = require('express');
var path         = require('path');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var mongoose     = require('mongoose');

var servCtrl     = require('./server/controllers/servCtrl');

var app = express();

mongoose.connect('mongodb://localhost:27017/mydb');

console.log(mongoose.connection.readyState);

app.use(express.static(path.join(__dirname, '/client')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//------------------------------------------------------


// app.all('*', function(req, res) {
// 	res.sendFile(__dirname + '/client/store.html');
// });

app.get('/store', function(req, res) {
    res.sendfile(__dirname + '/client/store.html');
});

app.get('/store/cars', function(req, res) {
    res.sendFile(__dirname + '/client/store.html');
});

app.get('/store/routers', function(req, res) {
    res.sendFile(__dirname + '/client/store.html');
});

app.get('/store/tv', function(req, res) {
    res.sendFile(__dirname + '/client/store.html');
});

app.get('/store/cars/:carid', function(req, res) {
    res.sendFile(__dirname + '/client/store.html');
});

app.get('/store/routers/:routerid', function(req, res) {
    res.sendFile(__dirname + '/client/store.html');
});

app.get('/store/tv/:tvid', function(req, res) {
    res.sendFile(__dirname + '/client/store.html');
});

//API Calls

app.get('/store/carsData', servCtrl.carsData);
app.get('/store/carsDetail/:carid', servCtrl.carsDetail);

app.get('/store/routersData', servCtrl.routersData);
app.get('/store/routersDetail/:routerid', servCtrl.routersDetail);

app.get('/store/tvData', servCtrl.tvData);
app.get('/store/tvDetail/:tvid', servCtrl.tvDetail);

//------------------------------------------------------

app.listen(3000, function() {
    console.log('Node server started....');
})


