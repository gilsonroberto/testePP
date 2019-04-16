angular.module("listaTelefonica").factory("contatosApi", function($http, config){
	var _getContatos = function(){
		return 	$http.get(config.baseUrl + '/app');
	};

	var _saveContato = function(contato){
		return $http.post(config.baseUrl + "/app", contato);
	};

	var _atualizarContato= function(contato){
		return $http.put(config.baseUrl + "/app", contato);
	};

	return{
		getContatos: _getContatos,
		saveContato: _saveContato,
		atualizarContato: _atualizarContato
	};
});