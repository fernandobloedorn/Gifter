const express = require("express");

const routes = express.Router();
const ProductController = require("./controller/ProductController");

routes.get("/", function(req, res) {
  return res.send("Minha primeira rota!");
});

routes.get("/products", ProductController.index);
routes.get("/product/:id", ProductController.findById);

routes.post("/product", ProductController.store);
routes.post("/products", ProductController.find);

module.exports = routes;