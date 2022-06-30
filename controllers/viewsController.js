const Product = require("../models/productModel");

exports.getIndex = async (req, res, next) => {
  const products = await Product.find();
  const bestProducts = products.slice(0, 3);
  const lastProducts = products.slice(3);

  res.status(200).render("base", {
    title: "All Products",
    bestProducts,
    lastProducts,
  });
};
