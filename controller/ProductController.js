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
  async find(req, res, next) {

    // res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    // // res.header('Access-Control-Allow-Credentials', 'true');
    // res.header('Access-Control-Allow-Headers', '*');
    // next();
    // res.header('Access-Control-Allow-Headers', 'Content-Type');
    // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');


    const gender = req.body.gender;
    const name = req.body.name;
    let find = {}

    if (gender && name) {
      // find = { '$and': [ { 'gender': gender }, { 'name' : { '$regex' : name, '$options' : 'i' } } ] }
      find = { '$and': [ { '$or' : [{ 'gender': gender }, { 'gender': 'U'} ] }, { 'name' : { '$regex' : name, '$options' : 'i' } } ] }
    } else if (gender) {
      find = { '$or' : [{ 'gender': gender }, { 'gender': 'U'} ] };
    } else if (name) {
      find = { 'name' : { '$regex' : name, '$options' : 'i' } };
    }

    const data = await Product.find(find);
    return res.json(data);
  }
}

module.exports = new ProductController();