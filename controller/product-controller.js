const Product = require("../model/Product");

class ProductController {
  async store(req, res) {
    const data = await Product.create(req.body);

    return res.json(data);
  }
  async index(req, res) {
    const data = await Product.find({});

    return res.json(data);
  }
}

module.exports = new ProductController();