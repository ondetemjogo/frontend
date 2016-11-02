'use strict';

angular.module('ondeTemJogoApp')
  .service('SearchService', searchService);

function searchService($http) {
  var service = {
    pesquisar: pesquisar
  };

  return service;

  function pesquisar(timeDoCoracao) {
    var url = 'http://apiondetemjogo.herokuapp.com/api/v1/search/'
      .concat(timeDoCoracao);

    return $http.get(url)
      .then(function(response) {
        return response.data;
      });
  }
}
