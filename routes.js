const express = require("express");
const cors = require('cors')

const routes = express.Router();
const ProductController = require("./controller/ProductController");

routes.get("/", function(req, res) {
  return res.send("Minha primeira rota!");
});

routes.get("/products", cors(), ProductController.index);
routes.get("/product/:id", cors(), ProductController.findById);

routes.post("/product", cors(), ProductController.store);
routes.post("/products", 
  cors(
    {origin: ['http://localhost:3000', 'https://fernandobloedorn.github.io'], 
    methods: ["GET,HEAD,PUT,PATCH,POST,DELETE"]
  }), ProductController.find);

module.exports = routes;