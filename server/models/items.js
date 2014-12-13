var mongoose = require('mongoose');

var gumballSchema = mongoose.Schema({
	model: String,
	serial: String,
	inventory: String,
	state: String
});


module.exports.gumballs = mongoose.model('gumballMachine', gumballSchema);
