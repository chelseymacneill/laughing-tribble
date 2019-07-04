// Connecting Node to MySQL
let mysql = require("mysql");

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
