angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, contatosApi, operadoraApi, serialGenerator){
			$scope.app = "Lista de Telefone";
			$scope.refresh = "Alterar Dados";
			$scope.contatos = [];
			$scope.operadoras = [];
			//$scope.contato = null;

			$scope.onContatoSelecionado = function(contato){
				if(contato.selecionado)
				{
					var operadora = $scope.operadoras.find(x => x.nome == contato.operadora.nome);
					
					var contatoSelecionado = angular.copy(contato);
					contatoSelecionado.operadora = operadora;
					$scope.contato = contatoSelecionado;

					//contato.operadora = operadora;
					//$scope.contato = contato;

					var outrosContatos = $scope.contatos.filter(x => x.serial != contato.serial && x.selecionado);
					angular.forEach(outrosContatos, function(value, key) {
						value.selecionado = false;
					});
				}
				else
				{
					$scope.contato = null;
				}
				//var contatoAtual = $scope.contatos.find(c => c.serial == serial);
				
				//$scope.contato = contatoAtual;
			};
		
			var carregarContato = function () {
				contatosApi.getContatos().then(function(response){
					$scope.contatos = response.data;
				}, function(response){
					$scope.statustext = "Aconteceu um problema: " + response.status +" "+response.statusText;
				});
			};


			var carregarOperadora = function(){
				operadoraApi.getOperadoras().then(function(response){
					$scope.operadoras = response.data;
				});
			};

			$scope.adicionarContato = function (contato) {
				contato.serial = serialGenerator.generate();
				contato.data = new Date();
				contatosApi.saveContato(contato).then(function (response) {
					//$scope.contatos = response.data;
					delete $scope.contato;
					$scope.contatoForm.$setPristine();
					carregarContato();
				});

			};

			//$scope.adicionarContato = adicionarContato;

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

			$scope.alterarContato = function(contato){
				contato.data = new Date();
				contatosApi.atualizarContato(contato).then(function (response){
					delete $scope.contato;
					$scope.contatoForm.$setPristine();
					carregarContato();
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