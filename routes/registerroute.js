module.exports = app => {
    const register = require("../controllers/registercontroller.js");

    console.log("register route page");
    app.post("/registeruser", register.create);

  };
