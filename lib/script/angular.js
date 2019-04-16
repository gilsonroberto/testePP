		angular.module("listaTelefonica", ["ngMessages"]);
		angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $http){
			$scope.app = "Lista de Telefone";
			/* $scope.contatos = [
				{nome: uppercaseFilter("Pedro"), telefone: "99998888", data: new Date(),  operadora: {nome: "OI", codigo: 14, categoria: "Celular"}},
				{nome: uppercaseFilter("Ana"), telefone: "99998877", data: new Date(), operadora: {nome: "VIVO", codigo: 15, categoria: "Celular"}},
				{nome: uppercaseFilter("Maria"), telefone: "99998866", data: new Date(), operadora: {nome: "TIM", codigo: 41, categoria: "Celular"}}
			]; */

			$scope.contatos = [];

			$scope.operadoras = [];
		
			var carregarContato = function () {
				$http.get('http://localhost:3412/').then(function(response){
					$scope.contatos = response.data;
				});
			};


			var carregarOperadora = function(){
				$http.get('http://localhost:3413/operadoras').then(function(response){
					$scope.operadoras = response.data;
				});
			};

			$scope.adicionarContato = function (contato) {
				contato.data = new Date();
				$http.post("http://localhost:3412/", contato).then(function (response) {
					$scope.contatos = response.data;
					delete $scope.contato;
					$scope.contatoForm.$setPristine();
					carregarContato();
				});

			};

			/*$scope.adicionarContato = function(contato){
				contato.data = new Date();
				$scope.contatos.push(angular.copy(contato));
				delete $scope.contato;
				$scope.contatoForm.$setPristine();
			};*/

			$scope.apagarContatos = function(contatos){
				$scope.contatos = contatos.filter(function(contato){
					if (!contato.selecionado) return contato;
				});
			};

			$scope.isContatoSelecionado = function(contatos){
				return contatos.some(function(contato){
					return contato.selecionado;
				});
			};
			$scope.ordenarPor = function(campo){
				$scope.criterioDeOrdenacao = campo;
				$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
			};

			carregarContato();
			carregarOperadora();

		});