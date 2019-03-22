angular.module('fullstack.pessoas', [])

.controller('OpenController', function ($scope, $location, $route, Pessoas) {
  $scope.data = {};

  $scope.getPessoas = function() {
    Pessoas.getPessoas()
      .then(function(data) {
        $scope.data.pessoas = data;
      })
      .catch(function(error) {
        console.error(error);
      });
  };
  $scope.buscar = function(cpf){
    console.log(cpf)
  }
  $scope.getPessoas();

  $scope.box = function(pessoa) {
    console.log(pessoa)
    $scope.modal = pessoa;
  }

  $scope.cadastrarPessoa = function(pessoa) {
    $scope.loading = true;
    Pessoas.cadastrarPessoa({
      nome: pessoa.nome,
      cpf: pessoa.cpf,
      cnpj: pessoa.cnpj,
      celular: pessoa.celular,
      telefone: pessoa.telefone,
      cep: pessoa.cep,
      numero: pessoa.numero,
      email: pessoa.email
    })
      .then(function() {
        $scope.loading = false;
        $route.reload();
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  
  $scope.updatePessoa = function(pessoa) {
    $scope.loading = true;
    Pessoas.updatePessoa(pessoa['_id'],{
      nome: pessoa.nome,
      cpf: pessoa.cpf,
      cnpj: pessoa.cnpj,
      celular: pessoa.celular,
      telefone: pessoa.telefone,
      cep: pessoa.cep,
      numero: pessoa.numero,
      email: pessoa.email,
      alteradoEm: Date()
    })
      .then(function() {
        $scope.loading = false;
        $route.reload();
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  $scope.deletePessoa = function(pessoa) {
    console.dir(pessoa['_id']);
    Pessoas.deletePessoa(pessoa['_id'])
      .then(function() {
        $route.reload();
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  $scope.name = 'OpenController';
});
