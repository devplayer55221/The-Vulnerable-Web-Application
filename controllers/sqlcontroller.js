const Searchname = require("../models/searchmodel.js");

exports.search = (req, res) => {
	if(!req.body) {
		res.status(400).send({
			message: "Empty content"
		});
	}
	console.log("search controller");

	const searchname = new Searchname({
		name: req.body.name
	})

	Searchname.search(searchname, (err, data) => {
		console.log("data = "+data);
		if(err)
			res.status(500).send({
				message:
					err.message || "Error occured"
			});
		else if(data.message!="found") {
			res.send({status: "false"});
		}
		else {
			console.log("data="+data.row);
			res.send({status: "true", detail: data.row});
		}
	});
}