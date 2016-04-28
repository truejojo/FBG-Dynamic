angular.module('fbg')
  .directive('spieltyp', function() {
    return {
      restrict: 'E',
      templateUrl: 'src/templates/directives/spiel-typ-tpl.html',
      controller: 'SpielTypController'
    }
  });
