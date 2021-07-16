const path = require("path");
var http = require('http');


exports.postRequest = (req, res) => {
	if(!req.body) {
		res.status(400).send({
			message: "Empty content"
		});
	}
	console.log("pt controller");
	console.log(req.query);
	let localpath = req.query.image;
	res.sendFile(path.resolve("resources/images", localpath));
}