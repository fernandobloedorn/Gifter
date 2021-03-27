const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    id: {
        type: Number,
        required: true
    },
    name: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    gender: {
        type: String,
        required: true
      }
  },
  {
    timestamps: true
  }, 
  { 
    collection: "products"
  }
);

module.exports = mongoose.model("Product", ProductSchema);