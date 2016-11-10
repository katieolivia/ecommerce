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
		var serviceVariable = this;
		return $http({
			method: 'POST',
			url: '/api/cart',
			data: item   //req.body
		}).then(function(response) {
			console.log( "this is response", response)
			serviceVariable.cart = response;
		})
	}


})
