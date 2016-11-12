angular.module('shoes', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '../views/home.html',
			controller: 'mainCtrl'
 
		})
		.state('womenShoes', {
			url: '/womenShoes',
			templateUrl: '../views/womensShoes.html',
			controller: 'womenShoesCtrl'

		})
		.state('cart', {
			url: '/cart',
			templateUrl: '../views/cart.html',
			controller: 'cartCtrl',
			resolve: {
				cart: function (mainService) {
					return mainService.getCart();
				}
			}
		})
		.state('checkout', {
			url: 'checkout',
			templateUrl: '../views/checkout.html',
			controller: 'checkoutCtrl'
		})


		$urlRouterProvider.otherwise('/');
})
