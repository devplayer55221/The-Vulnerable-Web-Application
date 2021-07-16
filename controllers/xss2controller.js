let express = require('express');
let cookieParser = require('cookie-parser');
let app = express()
let request = require('request');
let bodyParser = require('body-parser');

app.use(cookieParser);
app.use(bodyParser);

const Usercomments = require("../models/xss2model.js");

exports.getRequest = (req, res) => {

	const usercomments = new Usercomments()

	Usercomments.getAll((err, data) => {
		if(err)
		{
			console.log("Error in database");
			res.status(500).send({
				message: err.message || "Error occured"
			})
		}
		else {
			console.log("Successfully written in database");
			res.send({message: data});
		}
	})
}

exports.postRequest = (req,res) => {
	if(!req.body) {
		res.status(400).send({
			message: "Empty content"
		})
	}

	const usercomments = new Usercomments({
		comment: req.body.data.comment,
		id: req.body.data.id
	})

	Usercomments.create(usercomments, (err, data) => {
		if(err)
		{
			console.log("Error in database");
			res.status(500).send({
				message: err.message || "Error occured"
			})
		}
		else {
			console.log("Successfully written in database");
			res.send({message: data});
		}
	})
}