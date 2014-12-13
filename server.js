var express      = require('express');
var app          = express();
var path         = require('path');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var mongoose     = require('mongoose');
var servCtrl     = require('./server/controllers/servCtrl');
var routes       = require('./server/routes');

app.use(express.static(path.join(__dirname, '/client')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Connect to MongoDB
mongoose.connect('  mongodb://tejaswini:tejaswini@ds043180.mongolab.com:43180/kotamreddy');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	console.log("mongodb connected");  
});

// All API Calls routed to routes.js
app.use('/api', routes);

//Catch all requests
app.get('*', function(req, res) {
	res.sendFile(__dirname + '/client/index.html');
});


var port = process.env.OPENSHIFT_NODEJS_PORT
, ip = process.env.OPENSHIFT_NODEJS_IP ;

//Listen on port 3000
app.listen(port,ip, function() {
    console.log('Node server started....');
})
