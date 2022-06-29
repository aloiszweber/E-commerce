const express = require("express");
const { addToBasket } = require("../controllers/basketController");
const router = express.Router();

router.route("/:id").get(addToBasket);

module.exports = router;
