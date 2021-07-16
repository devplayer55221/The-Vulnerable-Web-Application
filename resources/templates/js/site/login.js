$("#submit").click(function() {

	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;

	let data = {
		username: username,
		password: password
	}

	console.log("username = "+data.username);
	console.log("password = "+data.password);
	console.log("data = "+ data);

	$.post("login-person", data)
		.done(function(result) {
			document.getElementById("finalres").innerHTML=result.message;
			window.open("site-dashboard","_self");
		})
		.fail(function() {
			console.log("hello everyone, fail");
		})


	// $.ajax({
	// 	url: 'login-person',
	// 	type: 'POST',
	// 	data: data,
	// 	datatype: 'json',
	// 	async: true
	// })
	// .done(function(result) {
	// 	console.log("hello all");
	// 	console.log("result="+result.resp);
	// 	document.getElementById("finalres").innerHTML=result.resp;
	// 	console.log("hello all 2222");
	// })
	// .fail(function() {
	// 	console.log("hello everyone, fail in ajax");
	// })
})