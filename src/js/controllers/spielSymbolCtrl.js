angular.module('fbg')
  .controller('SpielSymbolController',  ['$scope', '$http', function($scope, $http) {
      var spielSymbol;

      $http.get('/newData.json').success(function(data) {
        spielSymbol = data.body.main.spiele.spielsymbol;

        $scope.anrede = spielSymbol.anrede;
        $scope.wahl = spielSymbol.wahl;
        $scope.spieleSymbolArray = spielSymbol.spieleSymbolArray;
      });
  }]);
