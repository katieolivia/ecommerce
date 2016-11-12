angular.module('shoes').controller('womenShoesCtrl', function($scope, mainService, $state) {
	$scope.getShoes = function() {
		mainService.getShoes().then(function(response){
			$scope.shoes = response;
			return response;
		})
	};





	$scope.addToCart = function(item) {

		mainService.createCart(item).then(function(response){
			$state.go('cart');

			return response;
		})
	}

	








})