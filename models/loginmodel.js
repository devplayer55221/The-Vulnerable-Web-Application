const sql = require("./db.js");

console.log("login model");
const Login = function(login) {
	this.user = login.user;
	this.pass = login.pass;
};

Login.postRequest = (newLogin, result) => {
	let insert_query = "select pass from userdetails where user='"+newLogin.user+"';";
	sql.query(insert_query, (err, res) => {
		if(err) {
			console.log("error: ",err);
			result(err, null);
			return;
		}
		console.log("res=");
		console.log(res);
		if(res.length)
			result(null, {message:"found", password:res[0].pass});
		else
			result(null, {message:"not found"});
	});
};

module.exports = Login;