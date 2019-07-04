
var mysql = require("mysql");
require("dotenv").config();

var env = process.env.JAWSDB_URL;
var connection;

if (env) {
  connection = mysql.createConnection(env);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;


// Connecting Node to MySQL
let mysql = require("mysql");

require("dotenv").config();


var env = process.env.JAWSDB_URL;


let connection = mysql.createConnection({
host: "localhost",
port: 3306,
user: "root",
password: "password",
database: "burgers_db"
});

// Adding Jaws DB
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'lg7j30weuqckmw07.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'z4hr74uw9ujzjwfx',
        password: 'jckjbjqkvky79pbt',
        database: 'bw1gr4d7dn6cykz8'
    });
};

// Initialize the connection
connection.connect(function(error){
    if (error) {
        console.error("error connecting: " + error.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

// Export the connection for use outside of this file
module.exports = connection;
