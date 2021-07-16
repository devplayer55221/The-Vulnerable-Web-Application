var sys = require("sys");
var exec = require("child_process").exec;

exports.postRequest = (req, res) => {
	if(!req.body) {
		res.status(400).send({
			message: "Empty content"
		});
	}

	console.log("ce controller");
	console.log("input="+req.body.ip);

	var answer = "";
	// function puts(error, stdout, stderr) { 
	// 	console.log(stdout); answer+=stdout+"<br>"; 
	// }


	exec("ping -c 3 "+req.body.ip, (error, stdout, stderr) => {
		console.log(stdout);
		answer+=stdout;
	});

	

	setTimeout(() => {res.send({message: answer})}, 5000);

	// exec("ping -c 5 " + req.body.ip, (error, stdout, stderr) => {
	//     if (error) {
	//         console.log(`error: ${error.message}`);
	//         return;
	//     }
	//     if (stderr) {
	//         console.log(`stderr: ${stderr}`);
	//         return;
	//     }
	//     console.log(`stdout: ${stdout}`);
	//     var answer = stdout;
	//     res.send({message: answer});
	// });
};