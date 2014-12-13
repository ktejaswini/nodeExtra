var items = require('../models/items');

var gumball = items.gumballs ;

module.exports.list = function (req, res) {
	console.log('inside list ctrl');
	gumball.find({}, function (err, results) {
		res.send(results);
	});
}

module.exports.listOne = function (req, res) {
	console.log('Inside listOne');
	var id = req.params.id;
	gumball.findOne({'serial': id}, function (err, results) {
		if(err) {
			res.json(err);
		}
		else {
			res.json(results);
		}
	});
}

module.exports.delMachine = function (req, res) {
	console.log('Inside delctrl');
	var id = req.params.id;
	console.log('going to delete '+id);
	gumball.remove({'serial':id},function(err,result) { console.log('delete success')});
}

module.exports.newMachine = function (req, res) {
	console.log('inside newMachine');
	var newMac = new gumball({model:'100',serial:'137',inventory:'10'})
	console.log(newMac);
	newMac.save(function (err, result) {
		if(err) {
			res.json(err);
		}
		else {
			console.log('server add success');
			res.json(result);
		}
	})
}

module.exports.insert = function (req, res) {
	var id = req.params.id;
	gumball.findOne({serial:id}, function (err, results) {
		if(err) {
			res.json(err);
		}
		else {
			if(results.state == 'wait') {
				results.state = 'turn';
				results.save(function (err, result) {
					if(err) {
						res.json(err);
					}
					else {
						res.json(result);
					}
				});
			}
			else {
				res.json(results);
			}
		}
	});
}

module.exports.turn = function (req, res) {
	var id = req.params.id;
	gumball.findOne({serial:id}, function (err, results) {
		if(err) {
			res.json(err);
		}
		else {
			if(results.state == 'turn') {
				results.inventory = results.inventory - 1 ;
				if(results.inventory == 0) {
					results.state = 'sold out'
				}
				else {
					results.state = 'wait';
				}
				results.save(function (err, result) {
					if(err) {
						res.json(err);
					}
					else {
						res.json(result);
					}
				});
			}
			else {
				res.json(results)
			}
		}
	});
}