const sql = require("./db.js");

console.log("register model");
const Userdetails = function(userdetails) {
	this.name = userdetails.name;
	this.phone = userdetails.phone;
	this.user = userdetails.user;
	this.pass = userdetails.pass;
};

Userdetails.create = (newUserdetails, result) => {
	let insert_query = `insert into userdetails (name, phone, user, pass) values(?, ?, ?, ?);`;
	let data = [newUserdetails.name, newUserdetails.phone, newUserdetails.user, newUserdetails.pass];
	sql.query(insert_query, data, (err, res) => {
		if(err) {
			console.log("error: ",err);
			result(err, null);
			return;
		}
		console.log("res in model = "+res);
		result(null, res);
	});
};

module.exports = Userdetails;
