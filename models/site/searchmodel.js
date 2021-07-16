const sql = require("./../db.js");
var util = require("util");

const Logindata = function(logindata) {
	this.username = logindata.username;
	this.password = logindata.password;
};

Logindata.search = (newLogindata, result) => {
	console.log("newLogindata.username = "+newLogindata.username);
	let search_query = "select id, password from mysite_table where username='"+newLogindata.username+"';";
	sql.query(search_query, (err, res) => {
		if(err) {
			console.log("error: ", err);
			result(err, null);
			return;
		}
		console.log("res="+util.inspect(res[0]));

		if(res[0]!=undefined && res[0].password == newLogindata.password)
		{
			console.log("id="+res[0].id);
			result(null, {id: res[0].id})
		}
		else
			result(null, {message:"username or password incorrect"});
	});
};

module.exports = Logindata;
