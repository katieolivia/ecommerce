angular.module('shoes').controller('cartCtrl', function($scope, mainService, cart){
	


// ngCart.setTaxRate(6.85);
// ngCart.setShipping(4.99);
// console.log(ngCart.getCart());
	$scope.cart = cart;

	$scope.addOne = function(shoe) {
		mainService.addOne(shoe).then(function(response) {
			$scope.cart = response;
		})
	};

	


	$scope.takeOne = function(shoe) {
		mainService.takeOne(shoe).then(function(response) {
			$scope.cart = response;
		})
	};



})