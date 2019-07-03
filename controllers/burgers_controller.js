// Purpose : 

// Import needed modules
let express = require("express");

let burger_model = require("../models/burgers.js");

// Get an instanse of router
let router = express.Router();

// Create all the routes 
router.get("/", function(request, response){
    burger_model.all(function(data) {
        let handlebarsObject = {
            // What is burgers? Property of what? 
            burgers: data
        };
        console.log(handlebarsObject);
        response.render("index", handlebarsObject)
    });
});

// When does this get triggered? 
router.post("/api/burgers", function(request, response) {
    burger_model.create(
        [ "burger_name", "devoured"], 
        [request.body.burger_name, request.body.devoured],
        function(result) {
            // Send back an id of the new burger
            // What is insert ID? Where did it come from 
            response.json({id: result.insertId});
        });
});

// Export object to use outside of this file
module.exports = router