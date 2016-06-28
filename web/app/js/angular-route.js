angular.module("ondetemjogo").config(function ($routeProvider) {

	$routeProvider.when("/index", {
		templateUrl: "view/welcome.html",
		controller: "welcomeController"
	});

	$routeProvider.when("/login", {
		templateUrl: "view/login.html",
		controller: "loginController"
	});

	$routeProvider.when("/signup", {
		templateUrl: "view/signup.html",
		controller: "signupController"
	});

	$routeProvider.when("/dashboard", {
		templateUrl: "view/dashboard.html",
		controller: "dashboardController"
	});

	$routeProvider.when("/events/:search", {
		templateUrl: "view/events.html",
		controller: "eventController",
		controllerAs: "eventCtrl"
	});

	$routeProvider.otherwise({ redirectTo: "/index" });

});
