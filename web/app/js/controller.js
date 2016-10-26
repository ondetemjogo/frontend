angular.module('ondeTemJogoApp', [])
.controller('pesquisa', function($scope, $http) {

	$scope.pesquisarString = function(){
		$(".jumbotron").css("display", "none");
        
        var inputPesquisa = $("#pesquisa").val();
       
		var url = "http://apiondetemjogo.herokuapp.com/api/v1/search/" + inputPesquisa;
		console.log(url);
		$http.get(url ).
		then(function(response) {
		  $scope.value	= response.data;

		});
	}

})
