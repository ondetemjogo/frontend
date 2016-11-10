angular.module("ondeTemJogoApp").controller("adicionarJogoCtrl", function ($scope, $state, brasileiraoAPI){

  $scope.mytime = new Date();

  $scope.hstep = 1;
  $scope.mstep = 1;

  $scope.ismeridian = true;

 var obterJogosFases = function (fases){
	 angular.forEach(fases, function(value, key) {
		  $scope.dataJogos = value.jogos.data;
			$scope.idJogos = value.jogos.id;
		});
 }

	var carregarDadosBrasileirao = function () {
		brasileiraoAPI.getAllInformations("2016").then(
			function (resp) {
				obterJogosFases(resp.data.fases);
				$scope.equipesBrasileirao = resp.data.equipes;
				console.log(resp);
			},
			function (resp){
				alert("Ocorreu um erro ao consultar os dados do brasileirão.");
				console.log(resp);
			}
		);
};


carregarDadosBrasileirao();
//$state.transitionTo('home.inicio', $stateParams, {reload: true,  inherit: false, notify: true});

});
