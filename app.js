const path = require("path");
const express = require("express");
const morgan = require("morgan");
const productRouter = require("./routes/productRoutes");
// const basketRouter = require("./routes/basketRoutes");
const viewRouter = require("./routes/viewRoutes");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
//MIDDLEWARE
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

// app.use(express.static(`${__dirname}/public`));
app.use("/", viewRouter);
app.use("/api/products", productRouter);
// app.use("/basket", basketRouter);

module.exports = app;
