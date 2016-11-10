angular.module('shoes').controller('cartCtrl', function($scope, mainService){
	$scope.cart = mainService.cart.data;
	console.log('this is cart', $scope.cart);

	$scope.deleteMe = function(product) {
		
	}
})