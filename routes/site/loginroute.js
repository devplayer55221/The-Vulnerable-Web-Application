module.exports = app => {
    const login = require("../../controllers/site/logincontroller.js");

    console.log("Site Login route");
    app.post("/login-person", login.postRequest);

};
