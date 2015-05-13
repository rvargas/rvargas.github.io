angular.module('Luthiers', [])
  .controller('LuthiersCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.luthiers = {};
    
    $http.get('luthiers.json')
      .success(function (data) {
        $scope.luthiers = data;
        $scope.randomCharacter = $scope.luthiers[Math.floor(Math.random() * $scope.luthiers.length)];
      });
  }]);
