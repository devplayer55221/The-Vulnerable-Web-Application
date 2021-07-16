const Userdetails = require("../models/registermodel.js");

exports.create = (req, res) => {
	if(!req.body) {
		res.status(400).send({
			message: "Empty content"
		});
	}
	console.log("register controller");
	// console.log(req.body.name);
	// console.log(req.body.phone);
	// console.log(req.body.user);
	// console.log(req.body.pass);

	const userdetails = new Userdetails({
		name: req.body.name,
		phone: req.body.phone,
		user: req.body.user,
		pass: req.body.pass
	})
    console.log("register controller now create");
	Userdetails.create(userdetails, (err, data) => {
		if(err)
			res.status(500).send({
				message:
					err.message || "Error occured"
			});
		else {
			console.log("data = "+data);
			res.send({"message":"User created"});
		};
	})
}