const express = require("express");
const morgan = require("morgan");
const productRouter = require("./routes/productRoutes");
// const basketRouter = require("./routes/basketRoutes");
const app = express();

//MIDDLEWARE
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use(express.static(`${__dirname}/public`));

app.use("/api/products", productRouter);
// app.use("/basket", basketRouter);

module.exports = app;
