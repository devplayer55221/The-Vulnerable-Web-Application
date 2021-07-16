window.onload = function() {
	var butt = document.getElementById("submit");
	butt.onclick = function() {
		var textname = document.getElementById("myname").value;
		var newtext = "<div><p>The name is: "+textname+".</p></div>";
		$("#chall1").append(newtext);
	}
}