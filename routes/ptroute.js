module.exports = app => {
    const pt1 = require("../controllers/ptcontroller.js");

    console.log("Path traversal route");
    app.get("/path", pt1.postRequest);

  };
