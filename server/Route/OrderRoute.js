const express = require("express");
const router = express.Router();
const {
	getAllOrders,
	checkoutProduct,
} = require("../Controllers/OrderController");

router.post("/create", checkoutProduct);
router.get("/", getAllOrders);

module.exports = router;
