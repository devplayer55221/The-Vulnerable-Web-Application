let express = require('express');
let cookieParser = require('cookie-parser');
let app = express()
  
app.use(cookieParser());

const Login = require("../models/loginmodel.js");


exports.postRequest = (req, res) => {

	if(!req.body) {
		res.status(400).send({
			message: "Empty content"
		});
	}
	console.log("login controller");
  console.log(req.headers.cookie);
	const username=req.body.user;
	const password=req.body.pass;

  const login = new Login({
    user: username,
    pass: password
  })

  Login.postRequest(login, (err, data) => {
      console.log("data=");
      console.log(data);
      console.log("data.password=");
      console.log(data.password);
      if(data.message!="found") {
        res.send({status:"false", message:"Incorrect username"});
      }
      else if(data.message=="found" && data.password!=password) {
        res.send({status:"false", message:"Incorrect password"});
      }
      else {
        res.cookie(req.headers.cookie.split("=")[0], req.headers.cookie.split("=")[1]);
        res.send({status:"true"});
      }

  });
  	
}