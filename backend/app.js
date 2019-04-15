var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

var contatos = [
	{serial: "75-[:", nome: "Bruno Marzz", telefone: "9999-2222", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
	{serial: 'ZNB:4', nome: "Sandra Rosa", telefone: "9999-3333", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}},
	{serial: "HTEZ=", nome: "Mariana Lucia", telefone: "9999-9999", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}}
];
var operadoras = [
	{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
	{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
	{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
	{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
	{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
];

app.listen(3412, function () {
  console.log('Example app listening on port 3412!');
});


app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/app', function(req, res) {
  res.json(contatos);
});

app.post('/app', function(req, res) {
  //console.log(req);
  console.log(req.body);
  contatos.push(req.body);
  res.json(true);
});

app.put('/app', function(req, res){
  console.log(req.body);
  var contatoAtual = contatos.find(x => x.serial == req.body.serial);
  contatoAtual.nome = req.body.nome;
  contatoAtual.telefone = req.body.telefone;
  contatoAtual.operadora = req.body.operadora;
  contatoAtual.data = req.body.data;
  res.json(true);
});

app.get('/operadoras', function(req, res) {
  res.json(operadoras);
});