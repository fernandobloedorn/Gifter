const express = require("express");

const routes = express.Router();
const ProductController = require("./controller/product-controller");

routes.get("/", function(req, res) {
  return res.send("Minha primeira rota!");
});

routes.get("/products", ProductController.index);

routes.post("/product", ProductController.store);

module.exports = routes;