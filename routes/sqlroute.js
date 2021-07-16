module.exports = app => {
    const sql = require("../controllers/sqlcontroller.js");

    app.post("/search", sql.search);

  };
