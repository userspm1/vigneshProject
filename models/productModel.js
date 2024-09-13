const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
  productImage_path: {
    type: String,
  },
  productImage_name: {
    type: String,
  },
  product_name: {
    type: String,
  },
  wood_type: {
    type: String,
  },
  price: {
    type: String,
  },
  categoryImage_name: {
    type: String,
  },
  categoryImage_path: {
    type: String,
  },
  brandLogoImage_name: {
    type: String,
  },
  brandLogoImage_path: {
    type: String,
  },
  category_name: {
    type: String,
  },
  brand_name: {
    type: String,
  },
  woodImage_name: {
    type: String,
  },
  woodImage_path: {
    type: String,
  },
  wood_name: {
    type: String,
  },
  wood_color: {
    type: String,
  },
  discription: {
    type: String,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
