angular.module('conveyorbelt', []);

angular.module('conveyorbelt').directive('conveyorBelt', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      'payload': '=',
      'size': '=' 
    },
    templateUrl: 'directives/v-ng-conveyorbelt.html',
    // link: function (scope, element, attrs, ctrl, transclude) {
    //   transclude(scope, function(clone, scope) {
    //     element.append(clone);
    //   });
    // },
    controller: function ($scope) {
 
      var _default_size = 4,
          _start_index = 0,
          _end_index,
          _size;
 
      function _init() {
        _size = ($scope.size !== undefined && parseInt($scope.size) < 1) ? parseInt($scope.size) : _default_size;
        console.log($scope.payload);
        $scope.cargo = [];
        for(var i = _start_index ; i < _size ; i++ ) {
          if($scope.payload[i] !== undefined) {
            $scope.cargo.push($scope.payload[i]);
          }
        }
        _end_index = _size - 1;
      }
      _init();
      
      $scope.next = function() {
        if($scope.payload[(_end_index+1)] !== undefined){
          console.log("Here:next");
          _start_index++;
          _end_index++;
          $scope.cargo.shift();
          $scope.cargo.push($scope.payload[_end_index]);
        }
      };
      
      $scope.prev = function() {
        
        if($scope.payload[(_start_index-1)] !== undefined){
          console.log("Here:prev");
          _start_index--;
          _end_index--;
          $scope.cargo.pop();
          $scope.cargo.unshift($scope.payload[_start_index]);
        }
      }
      $scope.$watchCollection('payload', function(new_value, old_value){
        console.log("Collection watch");
        _init();
      });
    }
  };
});