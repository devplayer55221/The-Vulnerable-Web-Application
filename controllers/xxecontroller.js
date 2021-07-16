let express = require('express');
let cookieParser = require('cookie-parser');
let app = express()
let request = require('request');
let bodyParser = require('body-parser');

//var xml2js = require('xml2js');
var xmldoc = require('xmldoc');
var convert = require('xml-js');
var libxmljs = require('libxmljs');

app.use(cookieParser);
app.use(bodyParser);

const Userdetails = require("../models/xxemodel.js");

exports.postRequest = (req, res) => {
	if(!req.body) {
		res.status(400).send({
			message: "Empty content"
		});
	}

	// console.log("-------request start-------");
	// request(req, function(error, response, body) {
	// 	console.log("body = "+body);
	// })
	// console.log("---------request end-----");

	console.log("xxe controller");
	console.log("request = "+req);
	console.log("req header = "+req.headers);
	console.log("req body ="+req.body.string);
	var x;
	console.log("console done");
	var products = libxmljs.parseXmlString(req.body.string.toString('utf8'), {noent:true,noblanks:true});
	
	console.log("child 0 ="+products.root().childNodes()[0]);
	console.log("child 1 ="+products.root().childNodes()[1]);
	x = products.root().childNodes()[1].text();
	//console.log("products = "+products.root().childNodes()[0]);
	console.log("x length = "+x.length);
	console.log("products type = "+typeof(products));
	// if(x.length==0)
	// {
	// 	console.log("over");
	// 	res.send({"message":x});
	// 	return;
	// }

	// var result = convert.xml2json(req.body.string);
	// console.log("result = "+result);

	// var docmt = new xmldoc.XmlDocument(req.body.string);
	// var child = docmt.childNamed("username");
	// if(child!== undefined)
	// {
	// 	console.log("childval="+child.val);
	// 	x=child.val;
	// }
	//var parser = new xml2js.Parser();
	// parser.parseString(req.body.string, function(err, result) {
	// 	console.log("result="+result);
	// 	x=result.fetchdata.username[0];
	// })

	//console.log("x="+x);

	const userdetails = new Userdetails({
		user: x
	})
	Userdetails.create(userdetails, (err, data) => {
		if(err)
		{
			console.log("error by database");
			res.status(500).send({
				message:
					err.message || "Error occured"
			});
		}
		else {
			console.log("success by database");
			
			console.log("data output = "+data.output);
			//res.send({"message":products});
			if(data.message == 'notfound')
			{
				console.log("data output = "+data.output);
				res.send(data.output);
				//res.send({"message":"notfound", "output":data.output});
			}
			else
				res.send({"message":"found", "output":data.output});
		}
	})
}