const express = require("express");
const { getIndex, getBasket } = require("../controllers/viewsController");
const router = express.Router();

router.get("/", getIndex);
router.get("/basket", getBasket);
module.exports = router;
