

$("#btn1").click(function() {
	console.log("image 1");
	let data = {
		image: "tiger.png"
	};
	$.get("path", data)
		.done(function(result) {
			//document.getElementById("thefile").innerHTML = "<img src='"+result+"'>";
			console.log(result);

			var rawResponse = result; // truncated for example

			// convert to Base64
			var b64Response = btoa(rawResponse);

			// create an image
			var outputImg = document.createElement('img');
			outputImg.src = 'data:image/png;base64,'+b64Response;

			console.log(outputImg);

			// append it to your page
			document.body.appendChild(outputImg);
		})
});

$("#btn2").click(function() {
	console.log("image 2");
	let data = {
		image: "lion.png"
	};
	$.get("path", data)
		.done(function(result) {
			document.getElementById("thefile").innerHTML = "<img src='"+result+"'>";
			console.log(result);
			var rawResponse = result; // truncated for example

			// convert to Base64
			var b64Response = btoa(rawResponse);

			// create an image
			var outputImg = document.createElement('img');
			outputImg.src = 'data:image/png;base64,'+b64Response;

			console.log(outputImg);

			// append it to your page
			document.body.appendChild(outputImg);
		})
});

$("#btn3").click(function() {
	console.log("image 3");
	let data = {
		image: "cheetah.png"
	};
	$.get("path", data)
		.done(function(result) {
			document.getElementById("thefile").innerHTML = "<img src='"+result+"'>";
			console.log(reuslt);
			var rawResponse = result; // truncated for example

			// convert to Base64
			var b64Response = btoa(rawResponse);

			// create an image
			var outputImg = document.createElement('img');
			outputImg.src = 'data:image/png;base64,'+b64Response;

			console.log(outputImg);

			// append it to your page
			document.body.appendChild(outputImg);
		})
});