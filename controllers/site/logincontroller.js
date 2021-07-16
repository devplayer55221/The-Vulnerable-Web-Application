let express = require('express');
let cookieParser = require('cookie-parser');
let app = express()
//let bodyParser = require('body-parser');

app.use(cookieParser);
//app.use(bodyParser);

const Logindata = require("../../models/site/searchmodel.js");

exports.postRequest = (req, res) => {
	if(!req.body) {
		res.status(400).send({
			message: "Empty content"
		})
	}

	// let resp = {
	// 		message: "hello"
	// }
	// console.log(resp);
	// res.send(resp);

	const logindata = new Logindata({
		username: req.body.username,
		password: req.body.password
	})

	console.log("username = "+req.body.username);
	console.log("password = "+req.body.password);

	Logindata.search(logindata, (err, data) => {
		if(err)
			res.status(500).send({
				message:
					err.message || "Error occured"
			});
		else if(data.id != undefined)
			{
				console.log("id returned in controller");
				res.cookie("userid",data.id);
				console.log("to send=");
				res.send({message: "login successful"});
			}
		else {
				console.log("not found valid");
				res.send({message: data.message});
			}
	})
}
