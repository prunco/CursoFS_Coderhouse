angular.module('practicaApp',['ui.router']);

angular.module('practicaApp')

.config(function($stateProvider,$urlRouterProvider){

	$stateProvider.state('seccion1', {
		url:"/seccion1",
		templateUrl:"templates/seccionestandar",
		controller:'Seccion1Ctrl'
	})

	$stateProvider.state('seccion2',{
		url:'/seccion2',
		templateUrl:'templates/seccionestandar',
		controller:'Seccion2Ctrl'
	})

	$urlRouterProvider.otherwise('/');
});
