angular.module("ondeTemJogoApp").controller("adicionarJogoCtrl", function ($scope, $state, brasileiraoAPI){
  $scope.mytime = new Date();
  $scope.hstep = 1;
  $scope.mstep = 1;
  $scope.ismeridian = true;
	$scope.selectJogo = [];

 var obterJogosFases = function (fases){
	 $scope.jogosDisponiveis = [];
	 var diaHoje = new Date();

	 angular.forEach(fases, function(value, key) {
				angular.forEach( value.jogos.id, function(jogo, idJogo) {
					  var diaJogo = new Date(jogo.data);
					  jogo.time1 = $scope.equipesBrasileirao[jogo.time1];
						jogo.time2 = $scope.equipesBrasileirao[jogo.time2];
						jogo["jogoOcorreu"] = diaHoje > diaJogo;
						$scope.jogosDisponiveis.push(jogo);
				})
			})
		};


	var carregarDadosBrasileirao = function () {
		brasileiraoAPI.getAllInformations("2016").then(
			function (resp) {
				$scope.equipesBrasileirao = resp.data.equipes;
				obterJogosFases(resp.data.fases);
				console.log($scope.jogosDisponiveis);
			},
			function (resp){
				alert("Ocorreu um erro ao consultar os dados do brasileirão.");
				console.log(resp);
			}
		);
};

$scope.atribuirValor = function(valor){
	alert('valor');
};

carregarDadosBrasileirao();
//$state.transitionTo('home.inicio', $stateParams, {reload: true,  inherit: false, notify: true});

});
