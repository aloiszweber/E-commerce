const Product = require("./../models/productModel");
const catchAsync = require("./../utils/catchAsync");
//TODO add catchAsync and remove catch from functions
//remember to add next to all functions
exports.getAllProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({
    status: "success",
    results: products.length,
    data: {
      products,
    },
  });
});
exports.getProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  //could use Product.findOne({id:req.params.id})
  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});

exports.createProduct = catchAsync(async (req, res, next) => {
  const newProduct = await Product.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      product: newProduct,
    },
  });

  // try {
  //   const newProduct = await Product.create(req.body);
  //   res.status(201).json({
  //     status: "success",
  //     data: {
  //       product: newProduct,
  //     },
  //   });
  // } catch (err) {
  //   res.status(400).json({
  //     status: "fail",
  //     message: "Invalid data sent!",
  //   });
  // }
});
