module.exports = app => {
    const ce1 = require("../controllers/cecontroller.js");

    app.post("/commandexec", ce1.postRequest);

  };
