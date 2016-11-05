angular.module('shoes').controller('womenShoesCtrl', function($scope, mainService) {
	$scope.getShoes = function() {
		mainService.getShoes().then(function(response){
			console.log('this is data', response);
			$scope.shoes = response;
			return response;
		})
	};

	// $scope.shoes = $scope.getShoes();
console.log('shoes', $scope.shoes)



})