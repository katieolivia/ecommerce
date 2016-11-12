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
		// var cart = req.session.cart;
		
		if (!req.session.cart) {
			req.session.cart = [];
		}
		// console.log('this is req.session.cart', req.session.cart)
		// if(!this.inreq.session.cart(req.body.id, req.session.cart)) {
		// 	console.log('XXX got into this if statement !inreq.session.cart')
		// 	req.session.cart.push(req.body);
		// }
		
		if (!req.session.cart.length) {
			console.log('array is empty')
			req.session.cart.push(req.body);
			res.send(req.session.cart);
			return;
		} 
		else {
			console.log('this is req.session.cart', req.session.cart)
			req.session.cart.forEach(function(obj) {
				console.log('obj.id', obj.id, 'reqbodyid', req.body.id)
				if(obj.id === req.body.id) {
					obj.quantity++;
					console.log('if')
					res.send(req.session.cart);
					return;
				}	
			})
		}
		
		req.session.cart.push(req.body);
		// req.session.cart = cart;
		res.send(req.session.cart);
		

	},
	getCart: function(req, res) {

		res.send(req.session.cart);
	},
	addOne: function(req, res) {
		var cart = req.session.cart;
		for(var i = 0; i < cart.length; i++) {
			if( cart[i].id === req.body.id) {
				cart[i].quantity ++;
			}
		}
		res.send(cart);
		
	},
	takeOne: function(req, res) {
		var cart = req.session.cart;
		for(var i = 0; i < cart.length; i++) {
			if(cart[i].id === req.body.id) {
				cart[i].quantity --;
				if(cart[i].quantity === 0) {
					cart.splice(i, i+1);
				};
			};
		};
		
		res.send(cart);
	},
	inCart: function(id, arr) {
		for(var i = 0; i < arr.length; i++) {
			if(arr[i].id === id) {
				console.log('incart function', true)
				return true;
			}
		}

	}



}