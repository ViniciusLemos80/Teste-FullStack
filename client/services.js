angular.module('fullstack.factories', [])

.factory('Pessoas', function ($http) {

  var getPessoas = function() {
    return $http({
      method: 'GET',
      url: '/api/pessoas'
    })
    .then(function(resp) {
      return resp.data.docs;
    });
  };

  var getPessoa = function(id) {
    return $http({
      method: 'GET',
      url: '/api/pessoa/'+id
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  var cadastrarPessoa = function(pessoa) {
    return $http({
      method: 'POST',
      url: '/api/pessoa',
      data: pessoa
    });
  };

  var updatePessoa = function(id,data) {
    return $http({
      method: 'PUT',
      url: '/api/pessoa/'+id,
      data: data
    });
  };

  var deletePessoa = function(id) {
    return $http({
      method: 'DELETE',
      url: '/api/pessoa/'+id
    });
  };

  return {
    getPessoas: getPessoas,
    getPessoa: getPessoa,
    cadastrarPessoa: cadastrarPessoa,
    updatePessoa: updatePessoa,
    deletePessoa: deletePessoa
  };
});
