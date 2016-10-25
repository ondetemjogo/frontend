angular.module('ondeTemJogoApp', [])
.controller('pesquisa', function($scope, $http) {
	$scope.pesquisarString = function(){

		var url = "https://apiondetemjogo.herokuapp.com/api/v1/search/"+ $scope.pesquisa;
		$http.get(url).
		then(function(response) {
			$scope.value = response.data;
			console.log($scope.value);
		});
	}	
});


