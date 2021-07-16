let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser);

const Userdetails = require("../models/disclosuremodel.js");

exports.postRequest = (req, res) => {
	if(!req.body) {
		res.status(400).send({
			message: "Empty content"
		});
	}

	var x = req.body.userno;

	const userdetails = new Userdetails({
		userno: x
	})
	console.log("x="+x);
	Userdetails.create(userdetails, (err, data) => {
		if(err)
		{
			console.log("controller error = "+err.message);
			console.log("type err = "+typeof(err.message));
			res.send({message:"No entry with this id is found!"});
		}
		else
		{
			console.log("controller data = "+data[0].name);
			console.log("type data = "+typeof(data));
			res.send({message:data[0].name});
		}
	})
}