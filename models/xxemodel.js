const sql = require("./db.js");

console.log("xxe model");
const Userdetails = function(userdetails) {
	this.user = userdetails.user;
};

Userdetails.create = (newUserdetails, result) => {
	console.log("data in model = "+newUserdetails.user);
	let insert_query = "select phone from userdetails where user='"+newUserdetails.user+"';";
	sql.query(insert_query, (err, res) => {
		if(err) {
			console.log("error: ",err);
			result(err, null);
			return;
		}
		console.log("res length = "+res.length);
		if(res.length != 0)
		{
			console.log("res in model = "+res[0].phone);
			result(null, {"message":"found", "output":res[0].phone});
		}
		else
		{
			result(null, {"message":"notfound", "output":newUserdetails.user});
		}
	});
};

module.exports = Userdetails;