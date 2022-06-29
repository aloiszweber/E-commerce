const express = require("express");
const {
  getAllProducts,
  createProduct,
  getProduct,
} = require("./../controllers/productController");
const router = express.Router();

// router.param("id", checkID);

router.route("/").get(getAllProducts).post(createProduct);
router.route("/:id").get(getProduct);

module.exports = router;
