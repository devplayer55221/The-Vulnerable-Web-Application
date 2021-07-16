module.exports = app => {

    const xss2 = require("../controllers/xss2controller.js");
    const xss3 = require("../controllers/xss3controller.js");

    console.log("XSS route");

    app.post("/addcomment", xss2.postRequest);
    app.post("/searchname", xss3.postRequest);
    app.get("/getcomment", xss2.getRequest);

  };
