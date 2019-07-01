// Requre the connection to the db for the orm to work 
var connection = require("./connection.js"); // might not be the right connection link

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  };

// Object for all of our sql functions. Stored in an object for easy export
let orm = {
    // Select all rows from the given table
    all: function(table, callback) {
        let queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(error, result){
            if (error) {
                throw error;
            }
            callback(result);
        });
    },
    // Creates a new row in the given table
    create: function(table, columns, values, callback) {
        let queryString = "INSERT INTO " + table;

        queryString += "(";
        queryString += columns.toString();
        queryString += ")";
        queryString += "VALUES";
        queryString += printQuestionMarks(values.length);
        queryString += ")"

        console.log(queryString);

        connection.query(queryString, values, function(error, result){
            if (error) {
                throw error;
            }
            callback(result);
        })
    },
    // Edit an entry that already exists
    update: function(table, objectColumnValues, condition, callback) {
        let queryString = "UPDATE " + table;

        queryString += " SET " ;
        queryString += objToSql(objectColumnValues);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(error, result) {
            if (error) {
                throw error;
            }
            callback(result);
        });
    }
};


// Export the orm to be used outside of this file 
module.exports = orm