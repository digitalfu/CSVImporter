/*globals angular */
(function() {
    'use strict';

    app.constant('FIELD_SCHEMA', {

        customer:{
          
          /**
           * Field Definitions
           *
           * @static
           * @property FIELD_SCHEMA.ajax
           * @type {String}
           */
          fields: {
  
              /**
               * Customer Code Field
               *
               * @static
               * @property FIELD_SCHEMA.fields.customer_code
               * @type {Object}
               */
              customer_code: {
                
                /**
                 * Field Name
                 * @static
                 * @property FIELD_SCHEMA.fields.customer_code.name
                 * @type {Array}
                 */
                name: "customer_code",
                
                /**
                 * Field Group
                 * @static
                 * @property FIELD_SCHEMA.fields.customer_code.group
                 * @type {Array}
                 */
                group:"Basic Fields",
                
                /**
                 * Matching Pool
                 * @static
                 * @property FIELD_SCHEMA.fields.customer_code.matching_pool
                 * @type {Array}
                 */
                matching_pool:[
                  'customerid', 
                  'uniqueid', 
                  'id'
                ]
                  
              },
              
              /**
               * First Name Field
               *
               * @static
               * @property FIELD_SCHEMA.fields.first_name
               * @type {String}
               */
              first_name: {
                
                /**
                 * Field Name
                 * @static
                 * @property FIELD_SCHEMA.fields.first_name.name
                 * @type {Array}
                 */
                name: "first_name",
                
                /**
                 * Field Group
                 * @static
                 * @property FIELD_SCHEMA.fields.surname.group
                 * @type {Array}
                 */
                group:"Basic Fields",
                
                /**
                 * Matching Pool
                 * @static
                 * @property FIELD_SCHEMA.fields.first_name.matching_pool
                 * @type {Array}
                 */
                matching_pool:[
                  'firstname', 
                  'fname'
                ]
              },
              
              /**
               * Surname Field
               *
               * @static
               * @property FIELD_SCHEMA.fields.surname
               * @type {String}
               */
              surname: { 
                
                /**
                 * Field Name
                 * @static
                 * @property FIELD_SCHEMA.fields.surname.name
                 * @type {Array}
                 */
                name: "surname",
                
                /**
                 * Field Group
                 * @static
                 * @property FIELD_SCHEMA.fields.surname.group
                 * @type {Array}
                 */
                group:"Basic Fields",
                
                /**
                 * Matching Pool
                 * @static
                 * @property FIELD_SCHEMA.fields.surname.matching_pool
                 * @type {Array}
                 */
                matching_pool:[
                  'lastname', 
                  'lname',
                  'surename'
                ]
              },
              
              /**
               * Company Name Field
               *
               * @static
               * @property FIELD_SCHEMA.fields.company_name
               * @type {Object}
               */
              company_name: {
                
                /**
                 * Field Name
                 * @static
                 * @property FIELD_SCHEMA.fields.company_name.name
                 * @type {Array}
                 */
                name: "company_name",
                
                /**
                 * Field Group
                 * @static
                 * @property FIELD_SCHEMA.fields.company_name.group
                 * @type {Array}
                 */
                group:"Basic Fields",
                /**
                 * Matching Pool
                 * @static
                 * @property FIELD_SCHEMA.fields.company_name.matching_pool
                 * @type {Array}
                 */
                matching_pool:[
                  'company', 
                  'companyname',
                  'businessname'
                ]
              },
              
              /**
               * Postal Address 1
               *
               * @static
               * @property FIELD_SCHEMA.fields.postal_address_1
               * @type {Object}
               */
              postal_address_1: {
                                
                /**
                 * Field Name
                 * @static
                 * @property FIELD_SCHEMA.fields.postal_address_1.name
                 * @type {Array}
                 */
                name: "postal_address_1",
                
                /**
                 * Field Group
                 * @static
                 * @property FIELD_SCHEMA.fields.postal_address_1.group
                 * @type {Array}
                 */
                group:"Postal Fields",
                
                 /**
                 * Matching Pool
                 * @static
                 * @property FIELD_SCHEMA.fields.postal_address_1.matching_pool
                 * @type {Array}
                 */
                matching_pool:[
                  'address1', 
                  'postaladdress1', 
                  'streetaddress1', 
                  'postal1', 
                  'add1',
                  'addr1',
                ]
              },
              
              /**
               * Postal Address 2
               *
               * @static
               * @property FIELD_SCHEMA.fields.postal_address_2
               * @type {Object}
               */
              postal_address_2: {
                
                /**
                 * Field Name
                 * @static
                 * @property FIELD_SCHEMA.fields.postal_address_2.name
                 * @type {Array}
                 */
                name: "postal_address_2",
                
                /**
                 * Field Group
                 * @static
                 * @property FIELD_SCHEMA.fields.postal_address_2.group
                 * @type {Array}
                 */
                group:"Postal Fields",
                
                 /**
                 * Matching Pool
                 * @static
                 * @property FIELD_SCHEMA.fields.postal_address_2.matching_pool
                 * @type {Array}
                 */
                matching_pool:[
                  'address2', 
                  'postaladdress2', 
                  'streetaddress2', 
                  'postal2', 
                  'add2',
                  'addr2',
                ]
                
              }
// Company Name Company Either First Name, Surname or Company Name 

// Phone Number Phone Numbers or “+ ( ) -” only or empty

// Mobile Phone Number Mobile Number Numbers or “+ ( ) -” only or empty

// Email Address Email, E-mail, e-mail, email check for “@“

// Customer Group Group, customer type, type If multiple tags per customer, save as note or CF.

// Postal Suburb suburb

// Postal City city

// Postal Postcode PO code, ZIP, ZIP code

// Postal State state

// Postal Country ID country, country code

// Physical Address 1 ship Address 1, shipping Address 1

// Physical Address 2 ship address 2, shipping address 2

// Physical Suburb shipping suburb, ship suburb

// Physical City shipping city, ship city

// Physical Postcode shipping post code, ship post code, 

// Physical State shipping state, ship state

// Physical Country shipping country, ship country

// Field - Secondary

// Sex Gender must be f or m or empty can we convert “male/female”, “man/woman”, or m/w. n/

// DOB Birthday, birth date, Date of Birth, 

// Loyalty enabled Loyalty 1/0 or empty convert y/n, yes/no, true/false, t/f, on/. If not filled out - 0?off?

// Fax Fax Number Numbers or “+ ( ) -” only or empty

// Website web, URL, www

// Note Notes

// Custom 1 Custom field

// Custom 2 Custom field

// Custom 3 Custom field

// Custom 4
        }
      }

    });

}());