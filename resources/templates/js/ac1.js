$("#btn").click(function() {
	console.log("hello");
	let username = document.getElementById("user").value;
	let password = document.getElementById("pass").value;
	let data = {
			user: username,
			pass: password
	};

	document.cookie = "isadmin=false";

	$.post("loginuser", data)
		.done(function(result) {
			if(result["status"] == "true")
			{
				console.log("Correct credentials");
				console.log(document.cookie.split("="));
				if(document.cookie.split("=")[1]=="false")	
					//console.log("useraccount");
					window.location.href = "/accounthome";
				else
					//console.log("adminaccount");
					window.location.href = "/adminhome";
			}
			else {
				document.getElementById("error").innerHTML=result["message"];			
			}
		})
});
