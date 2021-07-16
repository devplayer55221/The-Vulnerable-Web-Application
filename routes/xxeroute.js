module.exports = app => {
    const xxe = require("../controllers/xxecontroller.js");

    console.log("XXE route");
    app.post("/getphone", xxe.postRequest);

  };
