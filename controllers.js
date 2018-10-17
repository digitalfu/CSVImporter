(function() {
  'use strict';
  app.controller('ImporterCtrl', function($scope, $http, MigrationService, $rootScope, $filter) {
    MigrationService.init('customer', true);
    $scope.field           = {},
    $scope.files           = {},
    $scope.matchedFields   = MigrationService.getMatchedFields(),
    $scope.ignoredFields   = MigrationService.getIgnoredFields() || [],
    $scope.unmatchedFields = MigrationService.getUnmatchedFields() || [];

    $scope.getUnmatchedFields = function() {};
    $scope.getMatchedFields = function() {};
    $scope.getIgnoredFields = function() {};
    $scope.reset = function() {
      $rootScope.$broadcast("CLEAR_DUPLICATE_MODEL", true);
    };
    $scope.inspect = function () {
      console.log("Files Inspection", $scope.files);
    };
    
    $scope.$on("MATCH_FIELD", function (event, model) {
      var index = $scope.unmatchedFields.indexOf(model);
      $scope.matchedFields.unshift($scope.unmatchedFields[index]); 
      $scope.unmatchedFields = $filter('filter')($scope.unmatchedFields, '!'+model);
    });

    $scope.$on("UNMATCH_FIELD", function (event, model) {
      var index = $scope.matchedFields.indexOf(model);
      $scope.unmatchedFields.unshift($scope.matchedFields[index]); 
      $scope.matchedFields.splice(index, 1);
    });

    $scope.$on("IGNORE_FIELD", function (event, model) {
      var index = $scope.unmatchedFields.indexOf(model);
      $scope.ignoredFields.unshift($scope.unmatchedFields[index]); 
      $scope.unmatchedFields = $filter('filter')($scope.unmatchedFields, '!'+model);
    });
  });
}());