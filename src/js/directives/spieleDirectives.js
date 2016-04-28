angular.module('fbg')
  .directive('spieltyp', function() {
    return {
      restrict: 'E',
      templateUrl: 'src/templates/directives/spiel-typ-tpl.html',
      controller: 'SpieleCtrl'
    }
  })
  .directive('spielsymbol', function() {
    return {
      restrict: 'E',
      templateUrl: 'src/templates/directives/spiel-symbol-tpl.html',
      controller: 'SpieleCtrl'
    }
  })
  .directive('silbenanzahl', function() {
    return {
      restrict: 'E',
      templateUrl: 'src/templates/directives/silben-anzahl-tpl.html',
      controller: 'SpieleCtrl'
    }
  })
  .directive('rundenanzahl', function() {
    return {
      restrict: 'E',
      templateUrl: 'src/templates/directives/runden-anzahl-tpl.html',
      controller: 'SpieleCtrl'
    }
  });
