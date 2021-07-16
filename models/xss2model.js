const sql = require("./db.js");

const Usercomments = function(usercomments) {
	this.comment = usercomments.comment;
	this.id = usercomments.id;
};

Usercomments.getAll = (result) => {
	let get_query = "select comments from comment_tab;";
	sql.query(get_query, (err, res) => {
		if(err) {
			console.log("error: ",err);
			result(err, null);
			return;
		}
		else {
			result(null, {"message": res});
		}
	})
}

Usercomments.create = (newUsercomments, result) => {
	console.log("data in model = "+newUsercomments.comment);
	let insert_query = "insert into comment_tab (userid, comments) values('"+newUsercomments.id+"','"+newUsercomments.comment+"');";
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