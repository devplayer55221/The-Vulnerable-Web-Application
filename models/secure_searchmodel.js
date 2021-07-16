const sql = require("./db.js");

console.log("search model");

const Searchname = function(searchname) {
	this.name = searchname.name;
};

Searchname.search = (newSearchname, result) => {
	let search_query = `select * from userdetails where name=?;`;
	let data = [newSearchname.name];
	sql.query(search_query, data, (err, res) => {
		if(err) {
			console.log("error: ", err);
			result(err, null);
			return;
		}
		console.log("res=");
		console.log(res);
		if(res.length) {
			result(null, {message:"found", row:res});
		}
		else
			result(null, {message:"not found"});
	});
};

module.exports = Searchname;
