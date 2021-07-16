console.log(document.cookie);
if(document.cookie == "")
	window.open("mysite","_self")

$("#bi").click(function() {

	$.post("browse-items")
		.done(function(result) {
			console.log(result);
			var toinsert="";
			toinsert += "<table>";
			for(let i=0;i<result.length;i++)
			{	
				if(result[i].quantity != 0)	
					toinsert += "<tr><td>"+result[i].name+"</td><td>"+result[i].price+"</td><td>"+result[i].quantity+"</td><td><button id='a"+i+"'>Add to cart</button></td></tr>";
			}
			toinsert += "</table>";
			document.getElementById("result").innerHTML = toinsert;

			for(let i=0;i<result.length;i++)
			{
				$("#a"+i).click(function() {
					console.log("hello "+i);
					let data2 = {
						productid: result[i].id
					}
					$.post("addtocart", data2)
						.done(function(result2) {
							console.log(result2);
						})	
				})
			}
		})
})

$("#ib").click(function() {
	console.log(document.cookie.split("=")[0]);
	console.log(document.cookie.split("=")[1]);
	// var data = {
	// 	userid: document.cookie.split("=")[1]
	// }
	$.post("items-bought")
		.done(function(result) {
			console.log(result);
			var toinsert="";
			toinsert+="<table>";
			for(let i=0;i<result.length;i++)
			{
				toinsert += "<tr><td>"+result[i].name+"</td><td>"+result[i].price+"</td><td>"+result[i].quantity+"</td></tr>";
			}
			toinsert += "</table>";
			document.getElementById("result").innerHTML = toinsert;
		})
})

$("#vc").click(function() {
	$.post("view-cart")
		.done(function(result) {
			console.log(result);
			var toinsert="";
			toinsert += "<table>";
			for(let i=0;i<result.length;i++)
			{
				toinsert += "<tr><td>"+result[i].name+"</td><td>"+result[i].price+"</td><td>"+result[i].quantity+"</td><td><button id='r"+i+"'>Remove from cart</button></td></tr>";
			}
			toinsert += "</table>";
			document.getElementById("result").innerHTML = toinsert;

			for(let i=0;i<result.length;i++)
			{
				$("#r"+i).click(function() {
					//console.log("hello "+i);
					let data2 = {
						productid: result[i].id
					}
					$.post("removefromcart", data2)
						.done(function(result2) {
							console.log(result2);
						})	
				})
			}
			var button = document.createElement("button");
			button.id = "buy";
			button.innerHTML = "Buy";
			document.getElementById("result").append(button);

			$("#buy").click(function() {
				$.post("buy-cart")
					.done(function(result3) {
						console.log(result3);
					})
			})
		})
})

// $("#as").click(function() {
// 	$.post("account-summary", data)
// 		.done(function(result) {
			
// 		})
// })

$("#logout").click(function() {
	document.cookie = "userid=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
	window.open("mysite","_self");
})