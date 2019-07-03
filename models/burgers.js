// Import ORM 
let orm = require("../config/orm.js");


// Call the ORM functions using burger specific input for the ORM 
let burgers = {
    // What is this acutally doing? 
    all: function(callback) {
        orm.all("burgers", function(response){
            callback(response);
        });
    },
    // Creates a new burger (where tho?)
    create: function(columns, values, callback) {
        orm.create("burgers", columns, values, function(response) {
            callback(response);
        });
    },
    // Updates an already existing burger
    update: function(objectColumnValues, condition, callback){
        orm.update("burgers", objectColumnValues, condition, function(response) {
            callback(response);
        });
    }
};

// Export object for use outside of this file 
module.exports = burgers; 