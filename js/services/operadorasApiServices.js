angular.module("listaTelefonica").service("operadoraApi", function($http, config){
	this.getOperadoras = function(){
		return $http.get(config.baseUrl + '/operadoras');
	};
});