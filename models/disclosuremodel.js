const sql = require("./db.js");

const Userdetails = function(userdetails) {
	this.userno = userdetails.userno;
}

Userdetails.create = (newUserdetails, result) => {
	console.log("data in model = "+newUserdetails.userno);
	console.log("type of data = "+typeof(newUserdetails.userno));
	let insert_query = "select name from userdetails where id="+newUserdetails.userno+";";
	let data = [newUserdetails.userno];
	sql.query(insert_query, (err, res) => {
		if(err) {
			console.log("err model ="+err);
			result(err, null);
			return;
		}
		console.log("res model="+res);
		result(null, res);
	})
}

module.exports = Userdetails;