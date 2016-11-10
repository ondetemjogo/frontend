angular.module("ondeTemJogoApp").value("config", {
  baseUrl: "http://apiondetemjogo.herokuapp.com/api/v1/",
  urlBrasileirao: function(ano){ return "http://jsuol.com.br/c/monaco/utils/gestor/commons.js?file=commons.uol.com.br/sistemas/esporte/modalidades/futebol/campeonatos/dados/"+ano+"/30/dados.json" }
});
