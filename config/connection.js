// Connecting Node to MySQL
let mysql = require("mysql");

let connection = mysql.createConnection({
host: "localhost",
port: 3306,
user: "root",
password: "password",
database: "burgers_db"
});

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
