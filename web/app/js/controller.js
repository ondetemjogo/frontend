angular.module('ondeTemJogoApp', [])
.controller('pesquisa', function($scope, $http) {

	$scope.pesquisarString = function(){
		var url = "http://apiondetemjogo.herokuapp.com/api/v1/search/";
		$http.get(url).
		then(function(response) {
		  $scope.value	= response.data;

		});
	}

})
