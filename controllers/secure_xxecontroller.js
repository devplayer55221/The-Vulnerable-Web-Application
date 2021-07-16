let express = require('express');
let cookieParser = require('cookie-parser');
let app = express()

var xml2js = require('xml2js');

app.use(cookieParser());

const Userdetails = require("../models/xxemodel.js");

exports.postRequest = (req, res) => {
	if(!req.body) {
		res.status(400).send({
			message: "Empty content"
		});
	}
	console.log("xxe controller");
	console.log(req.body.string);
	var x;
	var parser = new xml2js.Parser();
	parser.parseString(req.body.string, function(err, result) {
		console.log("result="+result);
		x=result.fetchdata.username[0];
	})

	console.log("x="+x);

	const userdetails = new Userdetails({
		user: x
	})
	Userdetails.create(userdetails, (err, data) => {
		if(err)
			res.status(500).send({
				message:
					err.message || "Error occured"
			});
		else {
			console.log("data = "+data);
			res.send({"message":data});
		};
	})
}