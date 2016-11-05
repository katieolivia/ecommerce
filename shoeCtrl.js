var app = require('./server.js');
var db = app.get('db');



module.exports = {
	getAll: function(req, res) {
		var db = app.get('db');
		db.read_shoes(function(err, shoes){
			res.send(shoes);
		})
	}



}