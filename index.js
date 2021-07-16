const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const path = require("path");
const cookieParser = require("cookie-parser");
const multer = require('multer');
const fileupload = require('express-fileupload')

var http = require('http');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileupload());



app.use("/css", express.static(path.join(__dirname, '/resources/templates/css')));
app.use("/js", express.static(path.join(__dirname, '/resources/templates/js')));
//app.use("/html", express.static(path.join(__dirname, '/resources/templates/js')));
app.use(express.static('uploads/images'));

//app.use(express.static(path.join(__dirname, '/public')));
//console.log("dirname - "+__dirname);
//app.use("/uploads", express.static(path.join(__dirname, '/resources/uploads')));

// app.get("/", (req, res) => {
// 	res.json({message: "the app is working"});
// })

// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, 'uploads/');
//     },
//     filename: function(req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     }
// });

// app.post("/uploadfile", (req, res) => {
// 	console.log("uploadfile");
// 	let upload = multer({ storage: storage}).single('filename');
// 	upload(req, res, function(err) {
// 		console.log("req file = "+req.files);
// 		if(err)
// 			res.send(err);
// 		else
// 		{
// 			console.log("req file path = "+req.file.path)
// 			res.send(`You have uploaded this image: <hr/><img src="${req.file.path}" width="500"><hr /><a href="./">Upload another image</a>`);
// 		}
// 	})
// })

app.post("/uploadfile", (req, res) => {
	const filename = req.files.filename.name;
	console.log("filename="+filename);
	//*******************************SECURE CODE!!!*****************************************
	// namearr = filename.split(".");
	// if(!(namearr[namearr.length-1]=="jpg" || namearr[namearr.length-1]=="jpeg" || namearr[namearr.length-1]=="png"))
	// {
	// 	res.send("You are trying to upload an invalid file!")
	// }
	// else
	// {
	// 	const path = __dirname + '/uploads/images/' + filename;
	// 	const filedata = req.files.filename;
	// 	console.log("path = "+path);
	// 	filedata.mv(path, (error) => {
	// 		res.send(`You have uploaded this image:${path}`);
	// 	})
	// }
	//******************************************************************************
	const path = __dirname + '/uploads/images/' + filename;
	const filedata = req.files.filename;
	console.log("path = "+path);
	filedata.mv(path, (error) => {
		res.send(`You have uploaded this image:${path}`);
	})
})

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/resources/templates/html/" + "index.html");
})

app.get("/sql1", (req, res) => {
	res.sendFile(__dirname + "/resources/templates/html/" + "sql1.html");
})

app.get("/ba1", (req, res) => {
	res.sendFile(__dirname + "/resources/templates/html/" + "ba1.html");
})

app.get("/ac1", (req, res) => {
	res.sendFile(__dirname + "/resources/templates/html/" + "ac1.html");
})

app.get("/sd1", (req, res) => {
	res.sendFile(__dirname + "/resources/templates/html/" + "sd1.html");
})

app.get("/xxe", (req, res) => {
	res.sendFile(__dirname + "/resources/templates/html/" + "xxe.html");
})

app.get("/pt1", (req, res) => {
	res.sendFile(__dirname + "/resources/templates/html/" + "pt1.html");
})

app.get("/fu", (req, res) => {
	res.sendFile(__dirname + "/resources/templates/html/" + "fu.html");
})

app.get("/ce", (req, res) => {
	res.sendFile(__dirname + "/resources/templates/html/" + "ce.html");
})

app.get("/accounthome", (req, res) => {
	res.sendFile(__dirname + "/resources/templates/html/" + "accounthome.html");
})

app.get("/adminhome", (req, res) => {
	res.sendFile(__dirname + "/resources/templates/html/" + "adminhome.html");
})

app.get("/register", (req, res) => {
	res.sendFile(__dirname + "/resources/templates/html/" + "register.html");
})

app.get("/xss1", (req, res) => {
	res.sendFile(__dirname + "/resources/templates/html/" + "xss1.html");
})

app.get("/xss2", (req,res) => {
	res.sendFile(__dirname + "/resources/templates/html/" + "xss2.html");
})

app.get("/xss3", (req,res) => {
	res.sendFile(__dirname + "/resources/templates/html/" + "xss3.html");
})

//---------------------------------------------------------------------

app.get("/mysite", (req,res) => {
	res.sendFile(__dirname + "/resources/templates/html/site/" + "home.html");
})

app.get("/site-login", (req,res) => {
	res.sendFile(__dirname + "/resources/templates/html/site/" + "login.html");
})

app.get("/site-register", (req,res) => {
	res.sendFile(__dirname + "/resources/templates/html/site/" + "register.html");
})

app.get("/site-dashboard", (req,res) => {
	res.sendFile(__dirname + "/resources/templates/html/site/" + "dashboard.html");
})

require("./routes/baroute.js")(app);
require("./routes/registerroute.js")(app);
require("./routes/sqlroute.js")(app);
require("./routes/acroute.js")(app);
require("./routes/ceroute.js")(app);
require("./routes/ptroute.js")(app);
require("./routes/xxeroute.js")(app);
require("./routes/sdroute.js")(app);
require("./routes/xssroute.js")(app);
//require("./routes/furoute.js")(app);


require("./routes/site/loginroute.js")(app);
require("./routes/site/registerroute.js")(app);
require("./routes/site/dashboardroute.js")(app);

app.listen(5000, () => {
	console.log("Server running on port 5000");
})

// http.createServer(function(req, res) {
// 	res.writeHead(2000, {'Content-Type': 'text/plain'});
// 	res.end('Hello World\n');
// }).listen(1337, "127.0.0.1");
// console.log("Server running at http://127.0.0.1:1337/");
