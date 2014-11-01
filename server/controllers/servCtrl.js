var items = require('../models/items');

var cars = items.carsRecords ;
var routers = items.routersRecords ;
var tv = items.tvRecords ;

//cars
module.exports.carsData = function (req, res) {
	cars.find({}, function (err, results) {
		res.send(results);
	});
}

module.exports.carsDetail = function (req, res) {
	var carid = req.params.carid;
	console.log(carid);
	cars.findOne({carid:carid}, function (err, results) {
		res.send(results);
	});
}
//cars-end

//routers

module.exports.routersData = function (req, res) {
	routers.find({}, function (err, results) {
		res.send(results);
	});
}

module.exports.routersDetail = function (req, res) {
	var routerid = req.params.routerid;
	routers.findOne({routerid:routerid}, function (err, results) {
		res.send(results);
	});
}

//routers-end

//tv

module.exports.tvData = function (req, res) {
	tv.find({}, function (err, results) {
		console.log(results);
		res.send(results);
	});
}

module.exports.tvDetail = function (req, res) {
	var tvid = req.params.tvid;
	tv.findOne({tvid:tvid}, function (err, results) {
		res.send(results);
	});
}

//tv-end

