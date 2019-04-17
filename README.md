# Lista de Telefone

 Este projeto consiste em uma lista de contatos, possuindo id de identificação, nome, telefone, operadora e data de inclusão/alteração.
 Neste projeto você pode filtrar o cadastro através de qualquer um dos campos descritos, pode incluir, alterar ou até mesmo apagar um dos contatos da lista. 
 Para nosso FrontEnd vamos utilizar como framework o [AngularJS](https://angularjs.org/) e também [Bootstrap]( https://getbootstrap.com/docs/4.1/getting-started/download/).
 O sistema consome um serviço onde utilizamos para backend [NodeJS](https://nodejs.org/en/download/) e [Express]( https://expressjs.com/pt-br/starter/installing.html), a instalação e o arquivo para rodar podem ser acompanhada [por aqui]( https://github.com/gilsonroberto/testePP/tree/master/backend).
 
![](https://github.com/gilsonroberto/testePP/blob/master/backend/png/header.PNG)
 
# Exemplo de Uso

#### Filtrar Contatos
 A início o usuário pode filtrar o cadastro pelo campo buscar, pode ser utilizado qualquer um dos campos visualizados em tela, a pesquisa retorna conforme a digitação do usuário. 
 
#### Incluir Contatos
 Para inclusão de um novo nome todos os campos devem ser preenchidos respeitando as características de cada um deles, o campo nome deve ter no mínimo 10 caracteres, o campo telefone deve obedecer ao parâmetro dddd-dddd ou ddddd-dddd, o campo operadora também deve ser selecionado com as opções dispostas na tela, após preenchimento e o botão “Adicionar Contato” fica habilitado para inclusão do novo contato, o campo “ID” é preenchido automaticamente e enviado para o backend junto com todos os dados.
 
 #### Alterar ou Apagar Contatos
 Ao selecionar um contato ele ficará amarelo e em negrito para identificar que estamos tratando somente deste contato, os campos a serem alterados serão preenchidos automaticamente, para alterar os dados basta alterar um dos campos e clicar no botão “Alterar Contato”, caso queira apagar o contato basta clicar no botão “Apagar Contato”.
 
 # Tecnologias Utilizadas
 
 Para um formulário simples foi utilizado aqui Html, CSS, Bootstrap e AngularJs, o framework foi escolhido pois acaba reduzindo consideravelmente a quantidade de linhas do  código e também por facilitar a organização da estrutura, além de ter uma maior familiaridade com ele.

<<<<<<< HEAD
  ![](www.github.com/gilsonroberto/testePP/blob/master/backend/png/header.PNG)
=======

  
>>>>>>> d6fd4748aa8e950a2c0612fd201961bbfe52c749
