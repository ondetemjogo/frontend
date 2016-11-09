angular.module("ondeTemJogoApp").controller("adicionarJogoCtrl", function ($scope, $state, brasileiraoAPI){

	var carregarDadosBrasileirao = function () {
		brasileiraoAPI.getAllInformations("2016").then(
			function (resp) {
				$scope.dadosBrasileirao = resp.data;
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
