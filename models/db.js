const mysql = require("mysql");
const dbconfig = require("../config/dbconfig.js");

const connection = mysql.createConnection({
	host: dbconfig.HOST,
	user: dbconfig.USER,
	password: dbconfig.PASSWORD,
	database: dbconfig.DB
});

connection.connect(error => {
	if(error) throw error;
	console.log("Successfully connected to the database");
});

module.exports = connection;