const sql = require("./db.js");

const Username = function(username) {
	this.name = username.name;
};

Username.create = (newUsername, result) => {
	console.log("data in model = "+newUsername.name);
	let insert_query = "select * from userdetails where name = '"+newUsername.name+"';";
	sql.query(insert_query, (err, res) => {
		if(err) {
			console.log("error: ",err);
			result(err, null);
			return;
		}
		else {
			result(null, {"message":"Success"});
		}
	})	
}