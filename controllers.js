var modulo = angular.module('practicaApp');

modulo.controller('Seccion1Ctrl',function($scope){
	$scope.nombreseccion="Seccion 1";
	$scope.unnumero=10;
	$scope.otravariable="Comentarios";
	$scope.otronumero=30;
	$scope.sumanumeros=$scope.unnumero+$scope.otronumero;

})

modulo.controller('Seccion2Ctrl',function($scope){
	$scope.nombreseccion="Seccion 2";
	$scope.unnumero=20;
	$scope.otravariable="Estamos en la seccion 2";
	$scope.otronumero=30;
	$scope.sumanumeros=$scope.unnumero+$scope.otronumero;

})

modulo.controller('NavegarCtrl',function($scope,$state){
	$scope.cambiarseccion = function(donde){
		$state.go(donde);
	}
})