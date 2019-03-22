angular.module('fullstack', [
  'fullstack.factories',
  'fullstack.pessoas',
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './pessoas/pessoas.html',
    controller: 'OpenController'
  })
  .when('/open', {
    templateUrl: './pessoas/pessoas.html',
    controller: 'OpenController'
  })

  .otherwise({
    redirectTo: '/open'
  });
});
