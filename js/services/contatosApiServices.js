angular.module("listaTelefonica").factory("contatosApi", function($http, config){
	$http.defaults.headers.delete = { "Content-Type" : "application/json;charset=utf-8" }

	var _getContatos = function(){
		return 	$http.get(config.baseUrl + '/app');
	};

	var _saveContato = function(contato){
		return $http.post(config.baseUrl + "/app", contato);
	};

	var _atualizarContato= function(contato){
		return $http.put(config.baseUrl + "/app", contato);
	};

	var _deleteContato = function(contato){
		return $http.delete(config.baseUrl + "/app", {data: contato});
	};

	return{
		getContatos: _getContatos,
		saveContato: _saveContato,
		atualizarContato: _atualizarContato,
		deleteContato: _deleteContato
	};
});