angular.module("ondeTemJogoApp").factory("eventoAPI", function ($http, config) {
	var _getEventoPesquisar = function (chave) {
		return $http({
			method: "get",
			url: config.baseUrl + "search/" + chave
		});
	};
	return {
		getEventoPesquisar: _getEventoPesquisar
	};
});
