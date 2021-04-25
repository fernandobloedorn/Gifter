const express = require("express");
const db = require("./database/config");
const mongoose = require("mongoose");
const cors = require('cors')
var https = require('https')
var fs = require('fs')

// https://timonweb.com/javascript/running-expressjs-server-over-https/

class App {
  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();

    // https.createServer({
    //   key: fs.readFileSync('server.key'),
    //   cert: fs.readFileSync('server.cert')
    // }, express)
    // .listen(3333, function () {
    //   console.log('Example app listening on port 3333! Go to https://localhost:3333/')
    // })

    this.express.listen(3333, () =>
      console.log(`Sua API REST está funcionando na porta 3333 `)
    );
  }

  database() {
    mongoose.connect(db.uri, { useNewUrlParser: true });
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}
module.exports = new App().express;