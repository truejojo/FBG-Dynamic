angular.module('fbg')
  .controller('SpielTypController',  ['$scope', '$http', function($scope, $http) {
      var spieltyp;

      $http.get('/newData.json').success(function(data) {
        spieltyp = data.body.main.spiele.spieltyp;

        $scope.anredeTyp = spieltyp.anrede;
        $scope.wahlTyp = spieltyp.wahl;
        $scope.arrayTyp = spieltyp.array;
      });
      // $scope.setOptions = function(value) {
      //   if(value === 1) {
      //     console.log("hat geklappt!");
      //   }
      // }
  }]);
