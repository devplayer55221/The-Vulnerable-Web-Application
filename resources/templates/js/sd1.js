$('#btn').click(function() {
	var userno = document.getElementById("userno").value;
	 console.log("sd1 js send");

	 var data = {"userno": userno};

	 $.post("disclosure", data)
	 	.done(function(result) {
	 		console.log("result="+result);
	 		document.getElementById("res1").innerHTML = result.message;
	 	})
})