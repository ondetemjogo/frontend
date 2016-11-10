angular.module("ondeTemJogoApp").controller("homeCtrl", function ($scope,$state){
	$scope.isNavCollapsed = true;
	$scope.isCollapsed = false;
	$scope.isCollapsedHorizontal = false;

	$scope.adicionarJogo = function(){
		$state.transitionTo('home.adicionarJogo');
	}

	$scope.voltarHome = function(){
		$state.transitionTo('home.inicio');
	}
});
