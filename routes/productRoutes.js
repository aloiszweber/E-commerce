const express = require("express");
const {
  getAllProducts,
  createProduct,
  getProduct,
  checkID,
} = require("./../controllers/productController");
const router = express.Router();
// app.use("/api/products", router);

router.param("id", checkID);

router.route("/").get(getAllProducts).post(createProduct);
router.route("/:id").get(getProduct);

module.exports = router;
