angular.module('shoes').service('mainService', function($http) {

	this.getShoes = function() {
		return $http ({
			method: 'GET',
			url: '/api/shoes'
		}).then(function(response) {
			return response.data;
			
		})
	}


})
