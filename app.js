const express = require("express");
const morgan = require("morgan");
const productRouter = require("./routes/productRoutes");
const app = express();

app.use(express.json());
app.use(morgan("dev"));

// app.get("/api/products", getAllProducts);
// app.get("/api/products/:id", getProduct);
// app.post("/api/products", createProduct);

// refactored in routes/productRoute.js
// const productRouter = express.Router();
app.use("/api/products", productRouter);

// productRouter.route("/").get(getAllProducts).post(createProduct);
// productRouter.route("/:id").get(getProduct);
module.exports = app;
