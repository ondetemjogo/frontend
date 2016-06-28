angular.module("ondetemjogo", ["ngRoute"]);

angular.module("ondetemjogo").controller("loginController", function ($scope) {
	$scope.efetuarLogin = function (login) {
		console.log($scope.login);
	}

});

angular.module("ondetemjogo").controller("signupController", function ($scope) {
	$scope.signup = {};

	$scope.formValidation = function(signup){
		var _regExpEmail = /\w.*@\w*\.\w{3}/;
		var _emailValidation = _regExpEmail.test(signup.email);
		var _passwordCompare = signup.password == signup.passwordConfirmation;
		var _passwordLength = signup.password || '';
		var _passwordValidation = _passwordLength && _passwordCompare;
		return !_emailValidation || !_passwordValidation;
	}

	$scope.efetuarCadastro = function(signup){
		var userData = {
				email: signup.email,
				password: signup.password
		};
		console.log(userData);
		$scope.signup = {};
	}

});

angular.module("ondetemjogo").controller("dashboardController", function ($scope) {

});

angular.module("ondetemjogo").controller("welcomeController", function ($scope) {
	$(window).scroll(function() {
	    var windscroll = $(window).scrollTop();
	    if (windscroll >= 100) {
	        $('nav').addClass('fixed');
	        $('.ng-scope section').each(function(i) {
	            if ($(this).position().top <= windscroll - 20) {
	                $('nav a.active').removeClass('active');
	                $('nav a').eq(i).addClass('active');
	            }
	        });
	    } else {
	        $('nav').removeClass('fixed');
	        $('nav a.active').removeClass('active');
	    }
	}).scroll();
});

angular.module("ondetemjogo").controller("eventController", function($scope, $routeParams, $http) {
	var self = this;

	self.search = $routeParams.search;

	$scope.filterFunction = function(element) {
		return element.description.match(/^Ma/) ? true : false;
	};

	$http.get("http://localhost:8000/json/events-results.json").success(function(data) {
		$scope.users = data.results;
		$("#loader").hide();
		$("#userList").show();
	}).error(function(data, status) {
		alert("Error in get data");
	});

	$scope.showDetail = function(u) {
		if ($scope.active != u.username) {
			$scope.active = u.username;
		} else {
			$scope.active = null;
		}
	}

	$scope.doPost = function() {
		$http.get("http://localhost:8000/json/event.json").success(function(data) {
			var newUser = data.results[0];
			newUser.user.text = $("#inputText").val();
			newUser.date = new Date();
			$scope.users.push(newUser);
		}).error(function(data, status) {
			alert("Error in get data");
		});
	}


});