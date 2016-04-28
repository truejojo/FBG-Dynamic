angular.module('fbg')
  .directive('spielsymbol', function() {
    return {
      restrict: 'E',
      templateUrl: 'src/templates/directives/spiel-symbol-tpl.html'
    }
  });
