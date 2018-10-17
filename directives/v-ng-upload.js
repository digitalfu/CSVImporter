(function() {
    'use strict';
    angular.module('upload', []);

    /**
     * @module uploads.directives.upload
     */
    angular.module('upload').directive('fileLoad', function() {
        return {
            restrict : 'E',
            scope : {
              fileModel: '='
            },
            templateUrl: 'directives/v-ng-upload.html',
            link:function (scope, elm, attr){
               
              function _handleFileSelect(event) {
                event.stopPropagation();
                event.preventDefault();
                scope.handleFileSelect(event)
              }
              function _handleDragOver(event) {
                event.stopPropagation();
                event.preventDefault();
                scope.handleDragOver(event);
              }

              elm.bind('dragover', scope.handleDragOver);
              elm.bind('drop', scope.handleFileSelect);
            },
            
            controller: function($scope) {
              var config = {
                complete: function (data){
                  console.log("Parsing Complete", data);
                }
              };
              $scope.fileModel.files = [];

              /**
               * Handle Drag over
               *
               * @param event
               */
              $scope.handleDragOver = function (event){
                event.stopPropagation();
                event.preventDefault();
                event.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
              };

              /**
               * Handle File Select
               * @param event
               */
              $scope.handleFileSelect = function(event) {
                event.stopPropagation();
                event.preventDefault();
                $scope.fileModel.files.length = 0;

                angular.forEach(event.dataTransfer.files, function (value, key){
                  $scope.fileModel.files.push(value);
                  Papa.parse(value, config);
                });

                if (!$scope.$$phase) {
                  $scope.$apply();
                }
              }
            }
        }
    });

}());