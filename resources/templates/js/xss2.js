$( document ).ready(function() {

	$.get("getcomment")
		.done(function(result) {
			console.log("get comments")
		})

	$("#sub").click(function() {
		let comment = document.getElementById("text1").innerHTML;
		let data = {
			comment: comment
		}

		$.post("addcomment", data)
			.done(function(result) {
				document.getElementById("happened") = data.message;
			})
	})
})

