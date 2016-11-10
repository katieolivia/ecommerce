var app = require('./server.js');
var db = app.get('db');



module.exports = {
	getAll: function(req, res) {
		var db = app.get('db');
		db.read_shoes(function(err, shoes){
			res.send(shoes);
		})
	},
	createCart: function(req, res) {
		if (!req.session.cart) {
			req.session.cart = [];
		}
		req.session.cart.push(req.body);
		console.log(77777777777777, req.session.cart);
		res.send(req.session.cart);
		

	}



}