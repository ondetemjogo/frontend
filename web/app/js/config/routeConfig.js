angular.module("ondeTemJogoApp").config(function ($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('home', {
		  url: '/home',
		  controller: "homeCtrl",
		  templateUrl: "views/home.html"
	})
	.state('home.inicio', {
		  templateUrl: "views/partials/proximosJogo.html"
	})
	.state('home.adicionarJogo', {
		  templateUrl: "views/partials/adicionarJogo.html",
		  controller: "adicionarJogoCtrl"
	});
	$urlRouterProvider.otherwise("/home");
});
