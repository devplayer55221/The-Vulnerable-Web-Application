$("#submit").click(function() {
	let name = document.getElementById("name").value;
	let data = {
		name: name
	}
	$.post("search", data)
		.done(function(result) {
			console.log("result=");
			console.log(result.detail[0].id);
			if(result["status"]=="false")
			{
				document.getElementById("result").innerHTML="No user found";
			}
			else
			{
				for(let i=0;i<result.detail.length;i++)
					document.getElementById("result").innerHTML+=result.detail[i].id+" "+result.detail[i].name+" "+result.detail[i].phone+" "+result.detail[i].user+" "+result.detail[i].pass+"<br>";
			}
		})
})