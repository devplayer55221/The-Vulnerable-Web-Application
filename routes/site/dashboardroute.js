module.exports = app => {
    const dashboard = require("../../controllers/site/dashboardcontroller.js");

    console.log("Site dashboard route");
    app.post("/browse-items", dashboard.browse_items);

    app.post("/items-bought", dashboard.items_bought);

    app.post("/addtocart", dashboard.addtocart);

    app.post("/view-cart", dashboard.view_cart);

    app.post("/removefromcart", dashboard.removefromcart);

    app.post("/buy-cart", dashboard.buy_cart);

};
