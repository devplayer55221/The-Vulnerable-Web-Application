$("#sub").click(function() {
	var data = {
		name: document.getElementById("i1").value,
		username: document.getElementById("i2").value,
		password: document.getElementById("i3").value
	}

	$.post("register-person", data)
		.done(function(result) {
			console.log("message = "+result.message);
			document.getElementById("finalres").innerHTML=result.message;
			window.open("mysite","_self");
		})
})
