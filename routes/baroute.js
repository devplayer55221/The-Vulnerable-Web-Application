module.exports = app => {
    const ba1 = require("../controllers/ba1controller.js");

    console.log("Broken auth route page");
    app.post("/login", ba1.postRequest);

  };
