(function() {
    'use strict';

    /**
     * Schema Service
     *
     * @module migrations.services.SchemaService
     */
    app.factory('SchemaService', function(FIELD_SCHEMA) {
        return {

            /**
             * Creates a new field schema with the passed schema name.
             *
             * @method save
             * @param data {Object}
             * @return {Promise}
             */
            build_schema: function(entity_name, parsed_csv) {
              var current_schema = FIELD_SCHEMA[entity_name];
              
              return current_schema;
            }
        };

    });
    
    /**
     * Migration Service
     *
     * @module migrations.services.MigrationService
     */
    app.factory('MigrationService', function(SchemaService, $rootScope) {
      
        var _initialized = false,
            _schema = {},
            MigrationSchema;
        
        MigrationSchema = function(config){
          this.unmatched_fields = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8', 'test9', 'test10'];
          this.matched_fields   = [];
          this.igonored_fields  = [];
        };
        
        
        return {
          
            init:function (entity_name, parsed_csv){
              _schema = angular.extend(
                new MigrationSchema(), 
                SchemaService.build_schema(entity_name, parsed_csv)
              );
              _initialized = true;
              console.log("Schema Init", _schema);
            },
            
            getFields: function (){
              return _schema.fields;
            },   
            
            getUnmatchedFields: function (){
              return _schema.unmatched_fields;
            },
            
            getMatchedFields: function (){
              return _schema.matched_fields;
            },  
            
            getIgnoredFields: function (){
              return _schema.ignored_fields;
            },  
            
            ignoreField: function (field){
              $rootScope.$broadcast("IGNORE_FIELD", field);
              // var index = _schema.unmatched_fields.indexOf(item);
              // _schema.ignored_fields.shift(_schema.unmatched_fields[index]); 
              // _schema.unmatched_fields.splice(index, 1); 
            },
            
            unmatchField:function(field){
              $rootScope.$broadcast("UNMATCH_FIELD", field);
              // var index = _schema.matched_fields.indexOf(item);
              // _schema.unmatched_fields.shift(_schema.matched_fields[index]); 
              // _schema.matched_fields.splice(index, 1); 
            },
        
            matchField: function (field){
              $rootScope.$broadcast("MATCH_FIELD", field);
              // var index = _schema.unmatched_fields.indexOf(item);
              // _schema.matched_fields.shift(_schema.unmatched_fields[index]); 
              // _schema.unmatched_fields.splice(index, 1); 
            }
        };
    });
}());