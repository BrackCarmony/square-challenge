var app = angular.module("squareChallenge");

app.service("positionService",['$rootScope',function($rootScope){

  var pos = {x:0,y:0}

  this.getPosition = function(){
    return pos;
  }

  setPosition = function(obj){
    pos = obj;
    $rootScope.$broadcast('pos:updated');
    save();
  }

  this.movePosition = function(deltaX,deltaY){
    setPosition({x:pos.x+deltaX,y:pos.y+deltaY});
    save();
  }

  function save(){
    console.log(pos);
    $rootScope.$broadcast('pos:updated');
    $rootScope.$emit('pos:updated');
  }
}]);