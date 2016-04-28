angular.module('fbg')
  .controller('SpieleCtrl',  ['$scope', '$http', function($scope, $http) {
      var spiele;

      $http.get('/newData.json').success(function(data) {
        spiele = data.body.main.spiele;

        $scope.anredeTyp = spiele.spieltyp.anrede;
        $scope.wahlTyp = spiele.spieltyp.wahl;
        $scope.arrayTyp = spiele.spieltyp.array;

        $scope.anredeSymbol = spiele.spielsymbol.anrede;
        $scope.wahlSymbol = spiele.spielsymbol.wahl;
        $scope.arraySymbol = spiele.spielsymbol.array;

        $scope.anredeSilbenanzahl = spiele.silbenanzahl.anrede;
        $scope.wahlSilbenanzahl = spiele.silbenanzahl.wahl;
        $scope.arraySilbenanzahl = spiele.silbenanzahl.array;

        $scope.anredeRundenanzahl = spiele.rundenanzahl.anrede;
        $scope.wahlRundenanzahl = spiele.rundenanzahl.wahl;
        $scope.arrayRundenanzahl = spiele.rundenanzahl.array;
      });

      $scope.setOptions = function(value) {
        
        $(document).ready(function(){
          $(this).find('.spiel-typ').addClass('ng-hide')
                 .closest('form').find('.spiel-symbol').removeClass('ng-hide').addClass('ng-show')
                 .closest('form').find('.spiel-silbenanzahl').removeClass('ng-hide').addClass('ng-show')
                 .closest('form').find('button').removeClass('ng-hide').addClass('ng-show');
        });

        if(value === 1) {
          $scope.arraySilbenanzahl = spiele.silbenanzahl.arrayKZMF;

          $(document).ready(function(){
            $(this).find('.spiel-rundenanzahl').removeClass('ng-hide').addClass('ng-show');
          });
        }
      }

  }]);
