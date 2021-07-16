
exports.postRequest = (req, res) => {
	if(!req.body) {
		res.status(400).send({
			message: "Empty content"
		});
	}
	console.log("ba controller");

  
	const username=req.body.user;
	const password=req.body.pass;

  	if(username!="admin") {
  		res.send({status:"false", message:"Incorrect username"});
  	}
  	else if(password!="admin") {
  		res.send({status:"false", message:"Incorrect password"});
  	}
  	else {
  		res.send({status:"true"});
  	}
  	
}