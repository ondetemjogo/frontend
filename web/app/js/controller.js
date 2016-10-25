angular.module('ondeTemJogoApp', [])
.controller('pesquisa', function($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
        then(function(response) {
            $scope.greeting = response.data;
        });

        $scope.pesquisarString = function(){

        var url = "https://apiondetemjogo.herokuapp.com/api/v1/search/"+ $scope.pesquisa;
        console.log(url);
        
        


        }
});


