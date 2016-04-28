angular.module('fbg')
.controller('SpielthemaController', ['$scope', '$http', function($scope, $http) {

  $http.get('/daten.json').success(function(data) {

    $scope.themaTitel = data.body.main.section.thema.title;
    $scope.themen = data.body.main.section.thema.themen;

    $scope.infoTitel = data.body.main.section.info.title;
    $scope.infos = data.body.main.section.info.infos;
  });

  $scope.tab = 1;
  $scope.selectTab = function(setTab) {
    $scope.tab = setTab;
  };

  $scope.isSelected = function(checkTab) {
    return $scope.tab === checkTab;
  };
}]);
