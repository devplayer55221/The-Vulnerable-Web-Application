module.exports = app => {
    const ac1 = require("../controllers/ac1controller.js");

    console.log("Broken access control route");
    app.post("/loginuser", ac1.postRequest);

  };
