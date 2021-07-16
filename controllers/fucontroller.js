let express = require('express');
const multer = require('multer');
const path = require('path');

let app = express();

//let bodyParser = require('body-parser');

//app.use(bodyParser);

app.use(express.static(__dirname + '/public'));
console.log("dirname = "+__dirname+"/../");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

exports.postRequest = (req, res) => {
	console.log("FU controller");
	if(!req.body) {
		res.status(400).send({
			message: "Empty content"
		});
	}
	console.log("No error");
	console.log("req = "+req);
	//let upload = multer({ storage: storage}).single('filename');
	const upload = multer({dest: __dirname + '/uploads/images'});
	upload(req, res, function(err) {
		if(err)
			res.send(err);
		else
		{
			console.log("req file path = "+req.file.path)
			res.send(`You have uploaded this image: <hr/><img src="${req.file.path}" width="500"><hr /><a href="./">Upload another image</a>`);
		}
	})
}