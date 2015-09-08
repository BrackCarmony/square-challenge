var app = angular.module("squareChallenge");
app.controller("boxController", function($scope, positionService){

$scope.init = function(x, y){
  $scope.x = x;
  $scope.y = y;
  $scope.checkSelect();

}

$scope.checkSelect = function(){
  var pos = positionService.getPosition()
  console.log(pos)
  if ($scope.x == pos.x && $scope.y == pos.y){
    $scope.selected = true;
    $scope.classes = {"selected":true};
  }
  else{
    $scope.selected = false;
    $scope.classes = {"selected":false}
  }
};

$scope.moveRight = function(){
  positionService.movePosition(1,0);
}

$scope.moveLeft = function(){
  positionService.movePosition(-1,0);
}

$scope.moveUp = function(){
  positionService.movePosition(0,-1);
}

$scope.moveDown = function(){
  positionService.movePosition(0,1);
}

$scope.$on('pos:updated', function(){
  console.log("I made it here!!!");
  $scope.checkSelect();
  });

$scope.checkSelect();

});