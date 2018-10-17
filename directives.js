(function() {
    'use strict';

    /**
     * Represents a list of stocktakes
     * @module stocktake.directives.stocktakesList
     */
    app.directive('fieldPanel', function(MigrationService) {
        return {
            restrict : 'E',
            scope : {
              localField: '=',
              foreignField: '='
            },
            templateUrl: 'field-panel.html',
            controller: function($scope) {
              $scope.fields   = {},
              $scope.field    = "",
              $scope.disabled = undefined;
         
              $scope.$watch($scope.fieldModel,
                function(new_value, old_value) {
                  if (new_value !== old_value) {
                    console.log("Field Model");
                  }
                }
              );
            
              /**
               * Clear the selected field.
               * 
               * @method clear
               */
              $scope.clear = function() {
                $scope.field.selected  = undefined;
              };
              
              /**
               * Match this field.
               * 
               * @method match
               */
              $scope.match = function (field) {
                MigrationService.matchField(field);
              }
              
              /**
               * Ignore this field.
               * 
               * @method ignore
               */
              $scope.ignore = function (field) {
                MigrationService.ignoreField(field);
              }
              
              /**
               * Initializes the directive.
               *
               * @method statusMapping
               * @param stocktake {Object}
               *        A stocktake object
               *
               * @return {Boolean} Whether the current stocktake status matches the selected status.
               */
              function _init () {
                $scope.field  = {}, 
                $scope.fields = [];
                
                _load_fields(MigrationService.getFields());
                $scope.$watch (
                  MigrationService.getFields(),
                  function(new_value, old_value) {
                    if (new_value !== old_value) {
                      _load_fields(SchemaService.getFields());
                    }
                  }
                );
              }
              
              function _load_fields(fields){
                $scope.fields.length = 0;
                angular.forEach(fields, function(value, key){
                  $scope.fields.push(value);
                });
              }
              
              $scope.someFunction = function (item){
                return item.group;
              };
              
              $scope.$on("CLEAR_DUPLICATE_MODEL", function (event, model) {
                if(model === $scope.fieldModel){
                  $scope.fieldModel.selected = {};
                }
              });
              
              /* Initialise */
              _init();
              
            }
        };
    });
    
    app.directive( 'transcope', function() {
    return {
        link: function( $scope, $element, $attrs, controller, $transclude ) {
            if ( !$transclude ) {
                throw minErr( 'ngTransclude' )( 'orphan',
                    'Illegal use of ngTransclude directive in the template! ' +
                    'No parent directive that requires a transclusion found. ' +
                    'Element: {0}',
                    startingTag( $element ));
            }
            var innerScope = $scope.$new();

            $transclude( innerScope, function( clone ) {
                $element.empty();
                $element.append( clone );
                $element.on( '$destroy', function() {
                    innerScope.$destroy();
                });
            });
        }
    };
}); 
}());
