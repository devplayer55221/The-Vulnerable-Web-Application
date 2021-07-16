$("#btn").click(function() {
	console.log("hello");
	let name = document.getElementById("name").value;
	let phone = document.getElementById("phone").value;
	let username = document.getElementById("user").value;
	let password = document.getElementById("pass").value;
	let data = {
			name: name,
			phone: phone,
			user: username,
			pass: password
	};
	$.post("registeruser", data)
		.done(function(result) {
			if(result["status"] == "true")
			{
				console.log(result["message"]);
				document.getElementById("status").innerHTML=result["message"];
			}
			else
				document.getElementById("status").innerHTML=result["message"];			
		})
});
