angular.module('shoes').service('mainService', function($http) {

	this.getShoes = function() {
		return $http({
			method: 'GET',
			url: '/api/shoes'
		}).then(function(response) {
			return response.data;
			
		})
	},

	this.createCart = function(item) {
		item.quantity = 1;
		var serviceVariable = this;
		return $http({
			method: 'POST',
			url: '/api/cart',
			data: item   //req.body
		}).then(function(response) {
			
			serviceVariable.cart = response;
		})
	},

	this.getCart = function() {
		return $http({
			method: 'GET',
			url: '/api/cart/display'
		}).then(function(response) {
			console.log('this is cart on service', response.data);
			return response.data
		})


	},

	this.addOne = function(item) {
		return $http({
			method: 'PUT',
			url: '/api/cart/update',
			data: item
		}).then(function(response) {
			return response.data;
		})
	}, 

	this.takeOne = function(item) {
		return $http({
			method: 'POST',
			url:'/api/cart/delete',
			data: item
		}).then(function(response) {
			return response.data;
		})
	}


})
