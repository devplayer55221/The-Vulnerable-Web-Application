var nname = document.getElementById("name");
var ncountry = document.getElementById("country");
var nstream = document.getElementById("stream");
var newdata = {
	name: nname,
	country: ncountry,
	stream: nstream
}

document.getElementById("sub1").onclick = function() {
	$.post("/addpeople", newdata, function(result) {
		$("#chall1").append("<div>Student added</div>");
	})
}

var tname = document.getElementById("name1");
var tdata = {
	name: tname
}

document.getElementById("sub2").onclick = function() {
	$.post("/showdetail", tdata, function(res) {
		$("#chall2").append("<div>"+res+"</div>")
	})
}
