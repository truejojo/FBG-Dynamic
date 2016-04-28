angular.module('fbg', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider.when('/', {templateUrl: '/src/templates/pages/home/index.html'})
    .when('/src/templates/pages/spiele', {templateUrl: '/src/templates/pages/spiele/index.html'})
    .when('/src/templates/pages/info', {templateUrl: '/src/templates/pages/info/index.html'})
    .when('/src/templates/pages/anmelden', {templateUrl: '/src/templates/pages/anmelden/index.html'})
    .otherwise({redirctTo:'/'});
  });
