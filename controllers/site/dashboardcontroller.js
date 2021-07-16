let express = require('express');
let cookieParser = require('cookie-parser');
let app = express();
var util = require('util');


app.use(cookieParser);

const Items = require("../../models/site/dashboardmodel.js");

exports.browse_items = (req, res) => {
	if(!req.body) {
		res.status(400).send({
			message: "Empty content"
		})
	}

	// const  items = new Items({

	// })

	Items.getAll((err, data) => {
		if(err)
			res.status(500).send({
				message:
					err.message || "Error occured"
			});
		else
			res.send(data);
	})
}

exports.addtocart = (req, res) => {
	if(!req.body) {
		res.status(400).send({
			message: "Empty content"
		})
	}
	//console.log("req is here");
	const items = new Items({
		userid: req.cookies.userid,
		productid: req.body.productid,
	})
	//console.log("")
	Items.insertCart(items, (err, data) => {
		if(err)
			res.status(500).send({
				message:
					err.message || "Error occured"
			});
		else {
			console.log("inserted or updated successfully = "+data);
			Items.updateProductRemove(items, (err, data) => {
				if(err)
					res.status(500).send({
						message:
							err.message || "Error occured"
					});
				else {
					res.send(data);
				}
			})
		}
		
	})
}

exports.items_bought = (req, res) => {
	if(!req.body) {
		res.status(400).send({
			message: "Empty content"
		})
	}

	console.log("cookies = "+util.inspect(req.cookies));
	console.log(req.cookies.userid);

	const items = new Items({
		userid: req.cookies.userid
	})

	Items.getBought(items, (err, data) => {
		if(err)
			res.status(500).send({
				message:
					err.message || "Error occured"
			});
		else
			res.send(data);
	})
}

exports.view_cart = (req, res) => {
	if(!req.body) {
		res.status(400).send({
			message: "Empty content"
		})
	}

	const items = new Items({
		userid: req.cookies.userid
	})

	Items.getCart(items, (err, data) => {
		if(err)
			res.status(500).send({
				message:
					err.message || "Error occured"
			});
		else
			res.send(data);
	})
}

exports.removefromcart = (req, res) => {
	if(!req.body) {
		res.status(400).send({
			message: "Empty content"
		})
	}
	//console.log("req is here");
	const items = new Items({
		userid: req.cookies.userid,
		productid: req.body.productid
	})

	Items.deleteCart(items, (err, data) => {
		if(err)
			res.status(500).send({
				message:
					err.message || "Error occured"
			});

		Items.updateProductAdd(items, (err, data) => {
			if(err)
				res.status(500).send({
					message:
						err.message || "Error occured"
				});
			else {
				res.send(data);
			}
		})
	})
}

exports.buy_cart = (req, res) => {
	if(!req.body) {
		res.status(400).send({
			message: "Empty content"
		})
	}

	const items = new Items({
		userid: req.cookies.userid,
	})

	// Items.getIdFromCart(items, (err, data) => {
	// 	if(err)
	// 		res.status(500).send({
	// 			message:
	// 				err.message || "Error occured"
	// 		});
	// 	else {
	// 		console.log(util.inspect(data));
	// 		res.send(data);
	// 	}	
	Items.buyFromCart(items, (err, data) => {
		if(err)
			res.status(500).send({
				message:
					err.message || "Error occured"
			});
		else {
			console.log("Inserted into user_product table, now delete from cart table");
			Items.deleteCartAll(items, (err, data) => {
				if(err)
					res.status(500).send({
						message:
							err.message || "Error occured"
					});
				else
					res.send(data);
			})
		}
	})
}