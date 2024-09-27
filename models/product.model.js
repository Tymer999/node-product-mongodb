const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please enter product name"],
    },
    price: {
      type: Number,
      require: true,
      default: 0,
    },
    quantity: {
      type: Number,
      require: true,
      default: 0,
    },
    image: {
      type: String,
      require: false,
    },
  },
  {
    Timestamp: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
