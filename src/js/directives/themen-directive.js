angular.module('fbg')
  .directive('themen', function() {
    return {
      restrict: 'E',
      templateUrl: 'src/templates/directives/thementpl.html'
    }
  });
