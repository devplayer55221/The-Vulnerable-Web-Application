const sql = require("./../db.js");

const Registerdata = function(registerdata) {
	this.name = registerdata.name;
	this.username = registerdata.username;
	this.password = registerdata.password;
};

Registerdata.search = (newRegisterdata, result) => {

	console.log("insert model");
	let insert_query = "insert into mysite_table (name, username, password) values('"+newRegisterdata.name+"','"+newRegisterdata.username+"','"+newRegisterdata.password+"');";
		console.log(insert_query);
	sql.query(insert_query, (err, res) => {
		if(err) {
			console.log("error: ", err);
			result(err, null);
			return;
		}
		console.log("res=");
		console.log(res);

		result(null, {message:"inserted"});
	});
};

module.exports = Registerdata;
