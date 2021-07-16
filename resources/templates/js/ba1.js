console.log(1);

// document.getElementById("btn").onclick = function() {myfunc()};

// function myfunc()
// {
// 	console.log(2);
// }

$("#btn").click(function() {
	console.log("hello");
	let username = document.getElementById("user").value;
	let password = document.getElementById("pass").value;
	let data = {
			user: username,
			pass: password
	};
	$.post("login", data)
		.done(function(result) {
			if(result["status"] == "true")
			{
				window.location.href = "/accounthome";
			}
			else
				document.getElementById("error").innerHTML=result["message"];			
		})
});
