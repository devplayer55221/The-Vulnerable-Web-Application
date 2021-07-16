module.exports = app => {
    const fu = require("../controllers/fucontroller.js");

    console.log("FU route");
    app.post("/uploadfile", fu.postRequest);

  };
