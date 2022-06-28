const fs = require("fs");
const productFile = `${__dirname}/../dev-data/products.json`;
const products = JSON.parse(fs.readFileSync(productFile));

exports.checkID = (req, res, next, val) => {
  console.log(`Product id is ${val}`);
  if (val * 1 > products.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  next();
};

exports.getAllProducts = (req, res) => {
  res.status(200).json({
    status: "success",
    results: products.length,
    data: {
      products: products,
    },
  });
};
exports.getProduct = (req, res) => {
  const product = products.find((el) => el.id === req.params.id);
  //id in json file are string not number!!!

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
};
exports.createProduct = (req, res) => {
  // console.log(req.body);
  const newId = prodcuts[products.length - 1].id + 1;
  const newProduct = Object.assign({ id: newId }, req.body);
  products.push(newProduct);

  fs.writeFile(productFile, JSON.stringify(products), (err) => {
    res.status(201).json({
      status: "success",
      data: {
        product: newProduct,
      },
    });
  });
};
