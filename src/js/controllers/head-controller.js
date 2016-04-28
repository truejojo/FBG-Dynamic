angular.module('fbg')
  .controller('HeaderController', ['$scope', '$http', function($scope, $http) {
      $http.get('/daten.json').success(function(data) {
        $scope.title = data.body.header.title;
      });
  }]);
