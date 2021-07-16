$("#ping").click(function() {
	console.log("hello");
	
	let ipvalue = document.getElementById("ip").value;

	let data = {
			ip: ipvalue
	};

	$.post("commandexec", data)
		.done(function(result) {
				document.getElementById("result").innerHTML=result["message"];			
		})
});