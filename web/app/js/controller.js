'use strict';

angular.module('ondeTemJogoApp')
  .controller('MainController', MainController)
  .controller('HeaderController', HeaderController);

  function MainController() {

  }

  function HeaderController(SearchService) {
    var vm = this;

    vm.pesquisar = pesquisar;

    function pesquisar(timeDoCoracao) {
      SearchService.pesquisar(timeDoCoracao)
        .then(function (response) {
          vm.value = response;
        });
    }
  }
