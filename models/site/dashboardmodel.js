const sql = require("./../db.js");
var util = require('util');

const Items = function(items) {
	this.userid = items.userid;
	this.productid = items.productid;
};

Items.getAll = (result) => {
	let get_query = "select * from products";
	sql.query(get_query, (err, res) => {
		//console.log("res = "+util.inspect(res[0]));
		if(err) {
			result(err, null);
		}
		else {
			result(null, res);
		}
	})
};

Items.insertCart = (newItems, result) => {

	let get_query = "select * from cart where userid="+newItems.userid+" and productid="+newItems.productid+";";
	sql.query(get_query, (err, res) => {
		if(err) {
			result(err, null);
		}
		else if(res.length == 0)
		{
			console.log("inserting in cart");
			let insert_query = "insert into cart (userid, productid, quantity) values ("+newItems.userid+", "+newItems.productid+", 1);";
			sql.query(insert_query, (err, res) => {
				if(err) {
					console.log("error in insert");
					result(err, null);
				}
				else {
					console.log("insert success");
					result(null, res);
				}
			})
		}
		else
		{
			console.log("updating cart");
			let update_query = "update cart set quantity=quantity+1 where userid="+newItems.userid+" and productid="+newItems.productid+";";
			sql.query(update_query, (err, res) => {
				if(err) {
					console.log("error in insert");
					result(err, null);
				}
				else {
					console.log("update success");
					result(null, res);
				}
			})
		}
	})
};

Items.updateProductRemove = (newItems, result) => {
	let update_query = "update products set quantity=quantity-1 where id="+newItems.productid+";";
	sql.query(update_query, (err, res) => {
		if(err) {
			result(err, null);
		}
		else {
			result(null, res);
		}
	})
};

Items.getBought = (newItems, result) => {
	let get_query = "select products.name, products.price, user_product.quantity from products inner join user_product on products.id=user_product.productid where products.id in (select productid from user_product where userid="+newItems.userid+");";
	sql.query(get_query, (err, res) => {
		console.log("res = "+util.inspect(res));
		if(err) {
			result(err, null);
		}
		else {
			console.log("get bought = "+util.inspect(res));
			result(null, res);
		}
	})
};

Items.getCart = (newItems, result) => {
	let get_query = "select products.id, products.name, products.price, cart.quantity from products inner join cart on products.id=cart.productid where products.id in (select productid from cart where userid="+newItems.userid+");";
	sql.query(get_query, (err, res) => {
		console.log("res = "+util.inspect(res));
		if(err) {
			result(err, null);
		}
		else {
			result(null, res);
		}
	})
};

Items.deleteCart = (newItems, result) => {
	let get_query = "select quantity from cart where userid="+newItems.userid+" and productid="+newItems.productid+";";
	sql.query(get_query, (err, res) => {
		if(err) {
			result(err, null);
		}
		else if(res == 1)
		{
			let delete_query = "delete from cart where userid="+newItems.userid+" and productid="+newItems.productid+";";
			sql.query(delete_query, (err, res) => {
				if(err) {
					result(err, null);
				}
				else {
					result(null, res);
				}
			})
		}
		else
		{
			let update_query = "update cart set quantity=quantity-1 where userid="+newItems.userid+" and productid="+newItems.productid+";";
			sql.query(update_query, (err, res) => {
				if(err) {
					result(err, null);
				}
				else {
					result(null, res);
				}
			})
		}
	})
};

Items.updateProductAdd = (newItems, result) => {
	let update_query = "update products set quantity=quantity+1 where id="+newItems.productid+";";
	sql.query(update_query, (err, res) => {
		if(err) {
			result(err, null);
		}
		else {
			result(null, res);
		}
	})
};

// Items.getIdFromCart = (newItems, result) => {
// 	let get_query = "select productid from cart where userid="+newItems.userid+";";
// 	sql.query(get_query, (err, res) => {
// 		if(err) {
// 			result(err, null);
// 		}
// 		else {
// 			result(null, res);
// 		}
// 	})
// };

Items.buyFromCart = (newItems, result) => {
	console.log("now inserting to user_product table");
	let insert_query = "insert into user_product (userid, productid, quantity) select userid, productid, quantity from cart where userid="+newItems.userid+";";
	sql.query(insert_query, (err, res) => {
		if(err) {
			result(err, null);
		}
		else {
			result(null, res);
		}
	})
};

Items.deleteCartAll = (newItems, result) => {
	let delete_query = "delete from cart where userid="+newItems.userid+";";
	sql.query(delete_query, (err, res) => {
		if(err) {
			result(err, null);
		}
		else {
			result(null, res);
		}
	})
};

module.exports = Items;