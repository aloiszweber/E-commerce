const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./../models/productModel");

dotenv.config({ path: "./config.env" });

const DB = process.env.DB_REMOTE.replace("<PASSWORD>", process.env.DB_PASS);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    // console.log(con.connections);
    console.log("DB connection successful");
  });

//REad file
const products = JSON.parse(
  fs.readFileSync(`${__dirname}/products.json`, "utf-8")
);

//import data to DB
const addData = async (product) => {
  await Product.create({
    name: product.name,
    image: product.image,
    price: product.price,
  });
};
const importData = async () => {
  products.forEach(async (product) => {
    try {
      await addData(product);
      console.log(product.name + ` has been addded`);
    } catch (err) {
      console.log(err);
    }
  });
};
console.log(process.argv);
if (process.argv[2] === "--import") {
  importData();
}
