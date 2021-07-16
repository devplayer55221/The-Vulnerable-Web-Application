let express = require('express');
let cookieParser = require('cookie-parser');
let app = express()
let request = require('request');
let bodyParser = require('body-parser');

app.use(cookieParser);
app.use(bodyParser);

const Username = require("../models/xss3model.js");

exports.postRequest = (req,res) => {
	if(!req.body) {
		res.status(400).send({
			message: "Empty content"
		})
	}

	const username = new Username({
		id: req.body.data.name
	})

	Username.create(username, (err, data) => {
		if(err)
		{
			console.log("Error in database");
			res.status(500).send({
				message: err.message || "Error occured"
			})
		}
		else {
			console.log("Successfully found "+req.body.data.name+" in database");
			res.send(data);
		}
	})
}