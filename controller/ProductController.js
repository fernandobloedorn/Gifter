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
  async findById(req, res) {
    const id = req.params.id;
    const data = await Product.find({ "id": id });

    return res.json(data);
  }
  async find(req, res) {
    const gender = req.body.gender;
    const name = req.body.name;
    let find = {}

    if (gender && name) {
      find = { '$and': [ { 'gender': gender }, { 'name' : { '$regex' : name, '$options' : 'i' } } ] }
    } else if (gender) {
      find = { "gender": gender };
    } else if (name) {
      find = { 'name' : { '$regex' : name, '$options' : 'i' } };
    }

    const data = await Product.find(find);
    return res.json(data);
  }
}

module.exports = new ProductController();