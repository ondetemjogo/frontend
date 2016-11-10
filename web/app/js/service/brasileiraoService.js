angular.module("ondeTemJogoApp").factory("brasileiraoAPI", function ($http, config) {
	var _getAllInformations = function (ano) {
		return $http({
			method: "get",
			url: config.urlBrasileirao(ano)
		});
	};
	return {
		getAllInformations: _getAllInformations
	};
});
