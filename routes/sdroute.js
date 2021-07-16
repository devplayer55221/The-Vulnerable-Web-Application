module.exports = app => {
    const sd = require("../controllers/sdcontroller.js");

    console.log("SD route");
    app.post("/disclosure", sd.postRequest);

  };
