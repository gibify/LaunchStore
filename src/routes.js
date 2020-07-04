const express =  require('express');
const routes = express.Router();
const ProductController = require('./app/Controllers/ProductController');

routes.get("/", function(req, res) {
    return res.render("layout.njk");
});
routes.get("/products/create", ProductController.create);

module.exports = routes;