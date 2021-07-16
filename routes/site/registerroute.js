module.exports = app => {
    console.log("Site Register route");
	
    const register = require("../../controllers/site/registercontroller.js");
    app.post("/register-person", register.postRequest);

};
