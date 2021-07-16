let express = require('express');
let cookieParser = require('cookie-parser');
let app = express()
let request = require('request');
let bodyParser = require('body-parser');

app.use(cookieParser);
app.use(bodyParser);

const Registerdata = require("../../models/site/insertmodel.js");

exports.postRequest = (req, res) => {
	if(!req.body) {
		res.status(400).send({
			message: "Empty content"
		})
	}

	console.log("register controller");

	const registerdata = new Registerdata({
		name: req.body.name,
		username: req.body.username,
		password: req.body.password
	})

	console.log("name=",req.body.name);
	console.log("username=",req.body.username);
	console.log("password=",req.body.password);

	Registerdata.search(registerdata, (err, data) => {
		if(err)
			res.status(500).send({
				message:
					err.message || "Error occured"
			})
		else {
			console.log("data message = "+data.message);
			res.send({message: data.message});
		}
	})
}
